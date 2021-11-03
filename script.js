const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1

const cat = {
    complain: function () {
        console.log("Meow!")
    }
};

cat.complain();

//question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.className = "subheading";

//question 5

var paragraphs = document.querySelectorAll("p");

for (var i = 0; i < paragraphs.length; i++) {

    paragraphs[i].style.color = "red";
}

//question 6

var resultsContainer = document.querySelector("div.results");

resultsContainer.innerHTML = "<p>New paragraph</p>";

resultsContainer.style.background = "yellow";

//question 7

function printList(list) {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i].name)
    }
}

console.log(printList(cats));

//question 8

function createCats(cats) {

    let listCats = "";

    for (let i = 0; i < cats.length; i++) {

        listCats = listCats + "<h5>" + cats[i].name + "</h5>"
        //If property age missing
        if (cats[i].age === undefined) {
            listCats = listCats + "<p>Age unknown</p>"

        } else {
            listCats = listCats + "<p>" + cats[i].age + "</p>"

        }
    }

    const finalHtml = "<div>" + listCats + "</div>";

    return finalHtml;

}

const newHtml = createCats(cats);

console.log(newHtml);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;

