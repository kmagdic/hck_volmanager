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

export const deepField = (obj: any, field: string) => field.split('.').reduce((att: any, value: any) => att[value], obj);

export interface CompareListItemsFunction {
  (a: ListItem, b: ListItem): number;
}

export interface CompareGroupedOptionsFunction {
  (a: GroupedOption, b: GroupedOption): number;
}

export const CompareListItemsByLabel: CompareListItemsFunction = (a: ListItem, b: ListItem) => a.label.localeCompare(b.label);
export const CompareGroupedOptionsByLabel: CompareGroupedOptionsFunction = (a: GroupedOption, b: GroupedOption) => a.label.localeCompare(b.label);

export const isEmpty = (value: any): boolean => (value === undefined) || (value === null) || isNaN(value);
export const toSafeNumber = (value: any, nullsFirst: boolean = false): number => 
  isEmpty(value) ? nullsFirst ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER : value;

export const sortData = (values: any[], compare: any[]): any[] => {
  return values.sort((a: any, b: any): number => {
    var compared = 0;
    const f = compare.find(cmp => {
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

export const groupingOptions0 = (data: any[], createListItem: any, groupField: any): GroupedOption[] => {
  const groupedObject: { [key: string]: GroupedOption } = {};

  data.forEach(option => {
    const item: ListItem = createListItem(option);
    const groupName = (typeof groupField) === "string" ? deepField(option, groupField) : groupField(option);
    if (groupedObject[groupName]) {
      groupedObject[groupName].options.push(item)
    } else {
      groupedObject[groupName] = { label: groupName, options: [item] }
    }
  })

  var groupedItems: GroupedOption[] = [];
  for(const group in groupedObject) {
    groupedObject[group].options.sort((a: ListItem, b: ListItem) => a.label.localeCompare(b.label));
    groupedItems.push(groupedObject[group]);
  }
  groupedItems.sort((a: GroupedOption, b: GroupedOption) => a.label.localeCompare(b.label));
  return groupedItems;
};

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
