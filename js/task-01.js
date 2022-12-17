const findAllElement = document.querySelectorAll(".item");
console.log(`Number of categories: ${findAllElement.length}`);

const newArray = [...findAllElement].map(element => `Category: ${element.children[0].textContent} 
Elements: ${element.children[1].children.length}`).join("\n");
console.log(newArray)