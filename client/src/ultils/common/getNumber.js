export const getNumberArea = (string) =>
  string.split(" ")
    .map((item) => +item.match(/\d+/))
    .filter((item) => item !== 0);

export const getNumberPrice = (string) =>
    string.split(" ")
      .map((item) => +item)
      .filter((item) => !item === false);
