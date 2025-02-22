// Write your code here!
// const element = document.createElement("div");
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.style.height = "300px";
// element.style.backgroundColor = "#27647B";
// element.textContent = "You've changed what's on the screen!";
// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;

// const secondChild = ul.querySelector("li:nth-child(2)");
// ul.removeChild(secondChild);

// element.appendChild(ul)
// document.body.appendChild(element);

const main = document.querySelector('main')
document.body.removeChild(main)

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Ian is the champion'
document.body.appendChild(newHeader)