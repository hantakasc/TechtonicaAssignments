var newListItem = document.createElement('li');
newListItem.textContent = 'Lots of love';
document.querySelector('ul').appendChild(newListItem);

const myDiv = document.getElementById("myDiv");

const ingredients = [
    { id: "walnuts-checkbox", value: "walnuts", text: "Add walnuts" },
    { id: "cinnamon-checkbox", value: "cinnamon", text: "Add cinnamon" },
    { id: "nutmeg-checkbox", value: "nutmeg", text: "Add nutmeg" },
    { id: "love-checkbox", value: "love", text: "Add LOTS of love"}
];

ingredients.forEach(ingredient => {
    let checkboxGroup = document.createElement("div");
    checkboxGroup.className = "checkbox-group";

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "ingredient";
    checkbox.value = ingredient.value;
    checkbox.id = ingredient.id;

    let label = document.createElement("label");
    label.htmlFor = ingredient.id;
    label.textContent = ingredient.text;

    myDiv.appendChild(checkbox);
    myDiv.appendChild(label);
    myDiv.appendChild(checkboxGroup);
});
