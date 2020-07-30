module.exports = (n) => {
  let arr = [];
  let hash = n;
  if (n === 1) {
    console.log("#");
  } else {
    for (let i = 0; i < n; i++) {
      arr.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
      for (let i = 0; i < hash; i++) {
        arr[i].push("#");
      }
      hash--;
    }
    arr.reverse().map((el) => {
      let numberOfSpaces = n - el.length;

      if (numberOfSpaces !== 0) {
        for (let i = 0; i < numberOfSpaces; i++) {
          el.push(" ");
        }
      }
    });

    console.log(arr.map((el) => el.reverse().join("")).join("\n"));
  }
};
