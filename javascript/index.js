const unique = (str) => {
  let arr = str.split("");
  let character = arr.filter((ele) => ele !== " ");

  let hashMap = {};
  for (let i = 0; i < character.length - 1; i++) {
    let value = character[i];
    if (!hashMap[value]) {
      hashMap[value] = 1;
    } else {
      console.log(value);
      return false;
    }
  }
  return true;
};
