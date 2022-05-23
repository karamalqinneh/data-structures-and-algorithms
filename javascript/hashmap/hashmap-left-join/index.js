const leftJoin = (map1, map2) => {
  let map2Keys = map2.keys();

  map2Keys.forEach((key) => {
    let hashIdx = map2.encode(key);
    if (!map1.map[hashIdx]) {
      // console.log(map1[hashIdx]);
      console.log("NULL value");
    } else {
      let obj = {};
      obj[key] = map2.get(key);
      map1.map[hashIdx].insert(obj);
    }
  });
  return map1;
};

module.exports = leftJoin;
