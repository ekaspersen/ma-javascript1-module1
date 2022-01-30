const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

// Question 2
const heading = document.querySelector("h3");
console.log(heading);

heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add(".subheading");

//Qusetion 5
const paragraph = document.querySelectorAll("p");
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].style.color = "red";
}

console.log(paragraph);

//Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `
  <p>New paragraph</p>
  `;
resultsContainer.style.background = "Yellow";

//Question 7
function getName(list) {
  for (let i = 0; i < cats.length; i++) {
    console.log(cats[i].name);
  }
}

getName(cats);

//Question 8
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let theCatsAge = "";

    if (cats[i].age) {
      theCatsAge = cats[i].age;
    } else {
      theCatsAge = " Unknown";
    }

    html += `
      <div>
      <h5>Name: ${cats[i].name}</h5>
      <p>Age: ${theCatsAge}</p>
      </div>
      `;
  }

  return html;
}

catContainer.innerHTML = createCats(cats);
