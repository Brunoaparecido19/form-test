const formOne = document.querySelector(".form-one");
const formTwo = document.querySelector(".form-two");
const printData = document.querySelector(".print-data");

function submitFormOne() {
  formOne.style.display = "none";
  formTwo.style.display = "block";
}
function submitFormTwo() {
  formOne.style.display = "none";
  formTwo.style.display = "none";
  printData.style.display = "block";
  saveFormData();
}

function saveFormData() {
  const formOneData = {
    name: formOne.querySelector("#Name").value,
    email: formOne.querySelector("#E-mail").value,
    phone: formOne.querySelector("#Phone").value,
    address: formTwo.querySelector("#Address").value,
    city: formTwo.querySelector("#City").value,
    state: formTwo.querySelector("#State").value,
    zip: formTwo.querySelector("#Zip").value,
  };
  localStorage.setItem("formOneData", JSON.stringify(formOneData));
}

function getFormData() {
  const formOneData = JSON.parse(localStorage.getItem("formOneData"));
  console.log(formOneData);
}