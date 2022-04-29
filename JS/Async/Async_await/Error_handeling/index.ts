async function getRandomErrorOrNumber(): Promise<number | any> {
//   try {
    const number: number = Math.floor(Math.random() * 100);
    if (number < 80) throw new Error("Not enough!");
    return number;
//   } catch (error) {
//     console.log("-----------");
//     console.error(error);
//   }
}

getRandomErrorOrNumber()
  .then((res) => {
    if (res) console.log(res);
  })
  .catch((err) => console.error(err));

async function main() {
  try {
    const res = await getRandomErrorOrNumber();
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error(error);
  }
}

main();
