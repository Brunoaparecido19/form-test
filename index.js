const formOne = document.querySelector(".form-one");
const formTwo = document.querySelector(".form-two");
const formThree = document.querySelector(".form-three");
const formFour = document.querySelector(".form-four");
const formFive = document.querySelector(".form-five");
const formSix = document.querySelector(".form-six");
const formSeven = document.querySelector(".form-seven");
const formEight = document.querySelector(".form-eight");
const formNine = document.querySelector(".form-nine");
const formTen = document.querySelector(".form-ten");
const finished = document.querySelector(".finished");

const arrayOfForms = [formOne, formTwo, formThree, formFour, formFive, formSix, formSeven, formEight, formNine, formTen]

function saveFormData() {
  const formOneData = {
    name: formOne.querySelector("#Name").value,
    lastname: formOne.querySelector("#LastName").value,
    age: formTwo.querySelector("#Age").value,
    phone: formTwo.querySelector("#Phone").value,
    email: formThree.querySelector("#E-mail").value,
    nickname: formThree.querySelector("#Nickname").value,
    address: formFour.querySelector("#Address").value,
    city: formFive.querySelector("#City").value,
    state: formSix.querySelector("#State").value,
    country: formSeven.querySelector("#Country").value,
    zip: formEight.querySelector("#Zip").value,
    password: formNine.querySelector("#Password").value,
    confirmPassword: formTen.querySelector("#ConfirmPassword").value,
  };
  localStorage.setItem("formOneData", JSON.stringify(formOneData));
}
function getFormData() {
  const formOneData = JSON.parse(localStorage.getItem("formOneData"));
  console.log(formOneData);
}

function submitFormOne() {
  formOne.style.display = "none";
  formTwo.style.display = "block";
  saveFormData();
}
function submitFormTwo() {
  formTwo.style.display = "none";
  formThree.style.display = "block";
}
function submitFormThree() {
  formThree.style.display = "none";
  formFour.style.display = "block";
  saveFormData();
}
function submitFormFour() {
  formFour.style.display = "none";
  formFive.style.display = "block";
  saveFormData();
}
function submitFormFive() {
  formFive.style.display = "none";
  formSix.style.display = "block";
  saveFormData();
}
function submitFormSix() {
  formSix.style.display = "none";
  formSeven.style.display = "block";
  saveFormData();
}
function submitFormSeven() {
  formSeven.style.display = "none";
  formEight.style.display = "block";
  saveFormData();
}
function submitFormEight() {
  formEight.style.display = "none";
  formNine.style.display = "block";
  saveFormData();
}
function submitFormNine() {
  formNine.style.display = "none";
  formTen.style.display = "block";
  saveFormData();
}
function submitFormTen() {
  formTen.style.display = "none";
  saveFormData();
}


function openForm(formNumber) {
  arrayOfForms.map((form, index) => {
    if(index === formNumber - 1) {
      return form.style.display = "block";
    } else {
      return form.style.display = "none"
    }
  })
}