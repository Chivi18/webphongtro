import { getNumberArea, getNumberPrice } from "./getNumber";

export const getCodePrice = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMaxMin = getNumberPrice(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 99999
          : arrMaxMin[1],
    };
  });
};

export const getCodeArea = (totals) => {
  let arr = [];
  return totals.map((item) => {
    let arrMaxMin = getNumberArea(item.value);
    if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
    let sortedArr = arr.sort();
    return {
      ...item,
      min: sortedArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
      max:
        sortedArr.indexOf(arrMaxMin[0]) === 0
          ? arrMaxMin[0]
          : sortedArr.indexOf(arrMaxMin[0]) === 1
          ? 99999
          : arrMaxMin[1],
    };
  });
};
export const getCodesPrice=(arrMaxMin,price)=>{
  const priceWithMinMax=getCodePrice(price)
  return priceWithMinMax.filter(item=>(item.min>=arrMaxMin[0]&&item.min<=arrMaxMin[1])|| (item.max >= arrMaxMin[0]&&item.max<=arrMaxMin[1]))
}
export const getCodesArea=(arrMaxMin,area)=>{
  const priceWithMinMax=getCodeArea(area)
  return priceWithMinMax.filter(item=>(item.min>=arrMaxMin[0]&&item.min<=arrMaxMin[1])|| (item.max >= arrMaxMin[0]&&item.max<=arrMaxMin[1]))
}