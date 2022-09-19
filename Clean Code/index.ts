//unclear code

const sc = (a: number, b: number) => {
  const c = a * a;
  const d = b * b;
  const e = c + d;
};

//clear code

function addPowerNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber ** 2 + secondNumber ** 2;
}

function updateArrayByID(currentArray: Array<any>, newItem: any): Array<any> {
  try {
    const newArray = [...currentArray];

    if (!newItem._id) newArray.push(newItem);
    else {
      //find arry;
      const index = newArray.findIndex((item) => item._id === newItem._id);
      if (index === -1) newArray.push(newItem);
      else newArray[index] = newItem;
    }

    return newArray;
  } catch (error) {
    console.error(error);
    return currentArray;
  }
}
