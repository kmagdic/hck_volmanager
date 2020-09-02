export interface DataItem {
  id: number;
  name: string;
}

export interface Place {
  id: number;
  name: string;
  county: string;
  postCode: number;
}

export interface SkillGroup {
  id: number;
  name: string;
  orderNum?: number;
}

export interface Skill {
  id: number;
  name: string;
  skillGroup: SkillGroup;
  orderNum?: number;
}

export const genders = [
  { value: "M", label: "muški" },
  { value: "F", label: "ženski" },
  { value: "A", label: "ne želim se izjasniti" },
];

export const projectSet = [
  { id: "1", name: "project 1", orderNum: 1 },
  {
    id: "2",
    name: "project 2",
    projectGroup: { id: 1, name: "Da", orderNum: 2 },
    orderNum: 2,
  },
  { id: "3", name: "project 3", orderNum: 3 },
];
