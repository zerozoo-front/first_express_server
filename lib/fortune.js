const fortuneCookies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortuneCookies.length);
  console.log("idx: ", idx);
  return fortuneCookies[idx];
};
