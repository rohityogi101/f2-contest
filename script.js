let nameValue = document.getElementById("name-input");
let prValue = document.getElementById("pr-input");
let ageValue = document.getElementById("age-input");
// let status = document.getElementById("success")
// let error = document.getElementById("error")

let tbody = document.querySelector("tbody");

let addItem = document.querySelector("#add");

addItem.addEventListener("click", (event) => {
    event.preventDefault();

    let newRow = document.createElement("tr");

    let name = document.createElement("td");
    name.innerText ="Name : "+ nameValue.value;
    name.classList.add("item");
    newRow.append(name);

    let profession = document.createElement("td");
    profession.innerText ="Profession :  " + prValue.value;
    newRow.append(profession);

    let age = document.createElement("td");
    age.innerText = "Age :  " + ageValue.value;
    newRow.append(age);
    age.classList.add("age");



    if (nameValue.value && prValue.value && ageValue.value) {
        tbody.append(newRow);
        success.innerHTML = "Success : Employee Added!";
        error.innerHTML = "";
    }
    else{
        error.innerHTML = "Error : Please Make sure All the fields are filled before adding in an employee !";
    }

    nameValue.value = "";
    prValue.value = "";
    ageValue.value = "";
});