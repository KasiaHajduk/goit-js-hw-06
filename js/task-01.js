// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

const parentUl = document.querySelector("#categories");
const categoryUl = parentUl.querySelectorAll("ul");
console.log(`Number of categories: ${categoryUl.length}\n\n`);
const parentLi = document.querySelectorAll(".item");
for (const parLi of parentLi) {
    const categories = parLi.querySelector("h2");
    const liNumber = parLi.querySelectorAll("li");
    console.log(`Category: ${categories.innerHTML}\nElements: ${liNumber.length}\n\n`);
}

