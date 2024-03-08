import generateCode from "./generateCode";

const prices = [
  { min: 0, max: 1, value: "dưới 1 triệu " },
  { min: 1, max: 2, value: "từ 1 - 2 triệu " },
  { min: 2, max: 3, value: "từ 2 - 3 triệu " },
  { min: 3, max: 5, value: "từ 3 - 5 triệu " },
  { min: 5, max: 7, value: "từ 5 - 7 triệu " },
  { min: 7, max: 10, value: "từ 7 - 10 triệu " },
  { min: 10, max: 15, value: "từ 10 - 15 triệu " },
  { min: 15, max: 999, value: "trên 15 triệu " },
];
export const dataPrice = prices.map((item) => ({
  ...item,
  code: generateCode(item.value),
}));

const areas = [
  { min: 0, max: 20, value: "dưới 20m " },
  { min: 20, max: 30, value: "từ 20m - 30m" },
  { min: 30, max: 50, value: "từ 30m - 50m" },
  { min: 50, max: 70, value: "từ 50m - 70m" },
  { min: 70, max: 90, value: "từ 70m - 90m" },
  { min: 90, max: 99999, value: "trên 90m" },
];
export const dataArea = areas.map((item) => ({
    ...item,
    code: generateCode(item.value),
  }));