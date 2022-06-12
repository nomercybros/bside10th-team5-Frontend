import { atom } from "recoil";

export const tagState = atom({
  key: "addProjectState/tag",
  default: ["figma", "javascript", "react", "node", "java"],
});

export const projectStartDateState = atom({
  key: "addProjectState/startDate",
  default: new Date(),
});

export const projectEndDateState = atom({
  key: "addProjectState/endDate",
  default: new Date(),
});