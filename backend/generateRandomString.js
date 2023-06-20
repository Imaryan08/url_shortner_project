const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    console.log(characters.length);
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    console.log(result);
  }
  return result;
};

console.log(generateRandomString(10));
