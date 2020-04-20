export interface ListItem {
  value: number, 
  label: string
};

export interface GroupedOption {
  label: string,
  options: ListItem[]
};

export const emptyGroup: GroupedOption[] = [];

export const deepField = (obj: any, field: string) => field.split('.').reduce((att: any, value: any) => att[value], obj);

export const groupingOptions = (data: any[], createListItem: any, groupField: any): GroupedOption[] => {
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

  const groupedItems: GroupedOption[] = [];
  for(const group in groupedObject) {
    groupedObject[group].options.sort((a: ListItem, b: ListItem) => a.label.localeCompare(b.label));
    groupedItems.push(groupedObject[group]);
  }
  groupedItems.sort((a: GroupedOption, b: GroupedOption) => a.label.localeCompare(b.label));
  return groupedItems;
};


export const join = (first: any, second: any, create: any) => 
  first.map((fItem: any) => second.find((sItem: any) => create(fItem, sItem)) || fItem);
