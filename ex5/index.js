'use strict';

// Create the form in HTML format
function createForm(){
  var form = document.createElement('form');
  form.setAttribute('class', 'form');
  form.style.display = 'inline-grid';

  var lastNameLabel = document.createElement('label');
  lastNameLabel.textContent = "Nom"
  lastNameLabel.setAttribute('for', 'name');
  lastNameLabel.style.margin = 'auto';
  form.appendChild(lastNameLabel);

  var lastNameInput = document.createElement('input');
  lastNameInput.setAttribute('type', 'text');
  lastNameInput.setAttribute('class', 'lastName');
  lastNameInput.required = true;
  form.appendChild(lastNameInput);

  var firstNameLabel = document.createElement('label');
  firstNameLabel.textContent = " Prenom"
  firstNameLabel.setAttribute('for', 'name');
  firstNameLabel.style.margin = 'auto';
  form.appendChild(firstNameLabel);

  var firstNameInput = document.createElement('input');
  firstNameInput.setAttribute('type', 'text');
  firstNameInput.setAttribute('class', 'firstName');
  firstNameInput.required = true;
  form.appendChild(firstNameInput);

  var emailLabel = document.createElement('label');
  emailLabel.textContent = " E-mail";
  emailLabel.setAttribute('for', 'name');
  emailLabel.style.margin = 'auto';
  form.appendChild(emailLabel);

  var emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'text');
  emailInput.setAttribute('class', 'email');
  emailInput.required = true;
  form.appendChild(emailInput);

  var passwordLabel = document.createElement('label');
  passwordLabel.textContent = " Mot de passe";
  passwordLabel.setAttribute('for', 'pass');
  passwordLabel.style.margin = 'auto';
  form.appendChild(passwordLabel);

  var passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('class', 'password');
  passwordInput.required = true;
  form.appendChild(passwordInput);

  var submit = document.createElement('input');
  submit.value = 'ENVOYER';
  submit.setAttribute('type', 'button');
  submit.setAttribute('class', 'submit');
  submit.style.width = '100px';
  submit.style.margin = '30px auto';
  submit.addEventListener('click', verifyForm);

  form.appendChild(submit);

  document.body.appendChild(form);
}

// Verify fields follow the good format 

function verifyForm(){
  var lastName = document.querySelector('.lastName').value;
  var firstName = document.querySelector('.firstName').value;
  var email = document.querySelector('.email').value;
  var password = document.querySelector('.password').value;

  if(allValid(lastName, firstName, email, password)){
    alert('Le formulaire a bien été envoyé !');
    eraseAll();
  } else if(!nameValid(lastName)){
    alert('Attention, nom invalide');
  } else if(!nameValid(firstName)){
    alert('Attention, prenom invalide');
  } else if(!emailValid(email)){
    alert('Attention, email invalide');
  } else {
    alert('Attention, mot de passe invalide');
  }
}

function nameValid(name){
  return !name.search(/[A-Z][a-z]+((\s|-)[A-Z][a-z]+)*/g);
}

function emailValid(email){
  return !email.search(/[A-Za-z0-9]([A-Za-z0-9]|-|_)*@([A-z]|-)+\.[A-z]+/g);
}

function passwordValid(password){
  return !password.search(/[A-Za-z0-9]{8,}/g)
}

function allValid(lastName, firstName, email, password){
  return nameValid(lastName) && nameValid(firstName) && emailValid(email) && passwordValid(password);
}

// Erase the input values when fields are correct
function eraseAll(){
  document.querySelector('.lastName').value = '';
  document.querySelector('.firstName').value = '';
  document.querySelector('.email').value = '';
  document.querySelector('.password').value = '';
}

createForm();