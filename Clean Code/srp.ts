//main function render two elements

function renderToScreen() {
  const table: HTMLElement | null = document.getElementById("box");

  if (table) {
    table.style.background = "lightblue";
    table.style.color = "white";
    table.style.fontSize = "1.4em";
    table.style.padding = "1em";
    table.style.width = "16em";
    table.style.margin = "auto";
    table.style.borderRadius = "10PX";
  }

  const readElement: HTMLElement | null = document.querySelector(".read");
  if (readElement) {
    readElement.style.textAlign = "center";
    readElement.style.padding = "0.4em";
    readElement.style.fontSize = "2em";
    setTimeout(function () {
      readElement.innerText = "Now...";
      readElement.style.color = "#DD2D4A";
    }, 3000);
    setTimeout(function () {
      readElement.innerText = "Thank You!";
      readElement.style.color = "black";
    }, 6000);
  }
}

function renderTable() {
  const table: HTMLElement | null = document.getElementById("box");

  if (table) {
    table.style.background = "lightblue";
    table.style.color = "white";
    table.style.fontSize = "1.4em";
    table.style.padding = "1em";
    table.style.width = "16em";
    table.style.margin = "auto";
    table.style.borderRadius = "10PX";
  }
}

function renderReadElement() {
  const readElement: HTMLElement | null = document.querySelector(".read");
  if (readElement) {
    readElement.style.textAlign = "center";
    readElement.style.padding = "0.4em";
    readElement.style.fontSize = "2em";
    setTimeout(function () {
      readElement.innerText = "Now...";
      readElement.style.color = "#DD2D4A";
    }, 3000);
    setTimeout(function () {
      readElement.innerText = "Thank You!";
      readElement.style.color = "black";
    }, 6000);
  }
}

// main function
const table = document.getElementById("box");
console.dir(table);
table.style.background = "lightblue";
table.style.color = "white";
table.style.fontSize = "1.4em";
table.style.padding = "1em";
table.style.width = "16em";
table.style.margin = "auto";
table.style.borderRadius = "10PX";

const readElement: any = document.querySelector(".read");
console.dir(readElement);
readElement.style.textAlign = "center";
readElement.style.padding = "0.4em";
readElement.style.fontSize = "2em";
setTimeout(function () {
  readElement.innerText = "Now...";
  readElement.style.color = "#DD2D4A";
}, 3000);
setTimeout(function () {
  readElement.innerText = "Thank You!";
  readElement.style.color = "black";
}, 6000);

const rowElement: any = document.querySelector(".row");
rowElement.style.border = "3px black dotted";
rowElement.style.padding = "1em";
rowElement.style.borderRadius = "10PX";

const pOne: any = document.querySelector("#one");
pOne.style.color = "white";
pOne.style.background = "#DD2D4A";
pOne.style.padding = "1em";
pOne.style.borderRadius = "10PX";
pOne.style.boxShadow = "2PX 2px 8px black";

const pTwo: any = document.querySelector("#two");
pTwo.style.background = "#F26A8D";
pTwo.style.padding = "1em";
pTwo.style.borderRadius = "10PX";
pTwo.style.boxShadow = "2PX 2px 8px black";

const pThree: any = document.querySelector("#three");
pThree.style.background = "#F49CBB";
pThree.style.padding = "1em";
pThree.style.borderRadius = "10PX";
pThree.style.boxShadow = "2PX 2px 8px black";
