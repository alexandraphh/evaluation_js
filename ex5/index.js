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
