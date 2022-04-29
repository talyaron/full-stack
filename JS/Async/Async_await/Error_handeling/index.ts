async function getRandomErrorOrNumber(): Promise<number | any> {
  try {
    return new Promise((resove, reject) => {
      setTimeout(() => {
        try {
          const number: number = Math.floor(Math.random() * 100);
          if (number < 80) throw new Error("Not enough!");
          resove(number);
        } catch (error) {
          console.log("########");
          console.error(error);
          reject(error.message);
        }
      }, 1000);
    });
  } catch (error) {
    console.log("-----------");
    console.error(error);
  }
}

getRandomErrorOrNumber()
  .then((res) => {
    console.log(res);
    if (res) console.log(res);
  })
  .catch((err) => console.error('then:',err));

async function main() {
  try {
    const res = await getRandomErrorOrNumber();
    console.log(res);
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error('catch:', error);
  }
}

main();
