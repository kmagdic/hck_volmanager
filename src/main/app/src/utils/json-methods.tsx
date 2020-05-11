export interface ListItem {
  value: number, 
  label: string,
  //orderNum?: number;
};

export interface GroupedOption {
  label: string,
  options: ListItem[],
  //orderNum?: number
};

export const emptyGroup: GroupedOption[] = [];

//export const deepField = (obj: any, field: string) => field.split('.').reduce((att: any, value: any) => att[value], obj);
export const deepField = (obj: any, field: string) => field.split('.').reduce((att: any, value: any) => (att && att[value]) ? att[value] : null, obj);

export interface CompareListItemsFunction {
  (a: ListItem, b: ListItem): number;
}

export interface CompareGroupedOptionsFunction {
  (a: GroupedOption, b: GroupedOption): number;
}

//export const CompareListItemsByLabel: CompareListItemsFunction = (a: ListItem, b: ListItem) => a.label.localeCompare(b.label);
//export const CompareGroupedOptionsByLabel: CompareGroupedOptionsFunction = (a: GroupedOption, b: GroupedOption) => a.label.localeCompare(b.label);

export const asDateTime = (dt: any) => {
  return '' + dt.getFullYear() + '-' + 
    (dt.getMonth() + 1).toString().padStart(2, '0') + '-' + 
    dt.getDate().toString().padStart(2, '0') + ' ' + 
    dt.getHours().toString().padStart(2, '0') + ':' + 
    dt.getMinutes().toString().padStart(2, '0') + ':' + 
    dt.getSeconds().toString().padStart(2, '0');
};

export const asDate = (dt: any) => {
  return '' + dt.getFullYear() + '-' + 
    (dt.getMonth() + 1).toString().padStart(2, '0') + '-' + 
    dt.getDate().toString().padStart(2, '0');
};

export const isEmpty = (value: any): boolean => (value === undefined) || (value === null) || isNaN(value);
export const toSafeNumber = (value: any, nullsFirst: boolean = false): number => 
  isEmpty(value) ? nullsFirst ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER : value;

export const defaultDataGroupSort: any[] = [
    (a: any, b: any) => toSafeNumber(a.groupOrderNum) - toSafeNumber(b.groupOrderNum),
    "group",
    (a: any, b: any) => {
      var cmp = toSafeNumber(a.orderNum) - toSafeNumber(b.orderNum)
      //console.log("comparing", a, b, "with result", cmp);
      if (cmp === 0) {
        const groupAName = a.group.toLocaleLowerCase();
        const groupBName = b.group.toLocaleLowerCase();
        const indexA = groupAName.indexOf(a.label.toLocaleLowerCase());
        const indexB = groupBName.indexOf(b.label.toLocaleLowerCase());
        if ((indexA === -1) && (indexB !== -1)) {
          cmp = 1;  
        }
        else if ((indexA !== -1) && (indexB === -1)) {
          cmp = -1;
        } else {
          cmp = a.label.localeCompare(b.label);
        }
        //console.log("correcting to", cmp);
      }
      return cmp;
      }
  ];

export const sortData = (values: any[], compare: any[]): any[] => {
  return values.sort((a: any, b: any): number => {
    var compared = 0;
    compare.find(cmp => {
      var comparator: any;
      if (typeof cmp === "string") {
        comparator = (a: any, b: any) => a[cmp].localeCompare(b[cmp]);
      } else {
        comparator = cmp;
      }
      compared = comparator(a, b);
      return compared !== 0;
    });
    return compared;
  });
}

export const groupingOptions = (data: any[]): GroupedOption[] => {
  const groupedObject: { [key: string]: GroupedOption } = {};

  data.forEach(option => {
    const item = { value: option.value, label: option.label };
    if (groupedObject[option.group]) {
      groupedObject[option.group].options.push(item)
    } else {
      groupedObject[option.group] = { label: option.group, options: [item] }
    }
  })

  var groupedItems: GroupedOption[] = [];
  for(const group in groupedObject) {
    groupedItems.push(groupedObject[group]);
  }
  return groupedItems;
};


export const join = (first: any, second: any, create: any) => 
  first.map((fItem: any) => second.find((sItem: any) => create(fItem, sItem)) || fItem);
