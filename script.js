let contacts = [
  { name: "Maxwell Wright", phone: "019171916495", email: "contact1@cctb.com" },
  { name: "Raja Villarreal", phone: "0863982895", email: "contact2@cctb.com" },
  { name: "Helen Richards", phone: "080031111", email: "contact3@cctb.edu" },
];

function addContact() {
  let name = prompt("Enter contact name:");
  let phone = prompt("Enter contact phone:");
  let email = prompt("Enter contact email:");

  if (name && phone && email) {
    contacts.push({ name, phone, email });
    alert("Contact added successfully!");

    // Update the contact list after a 3-second delay
    setTimeout(displayContacts, 3000);
  } else {
    alert("All fields are required!");
  }
}

function findContact() {
  let name = prompt("Enter the name of the contact to find:");
  let contact = contacts.find((contact) => contact.name === name);
  if (contact) {
    alert(
      `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
    );
  } else {
    alert("Contact not found.");
  }
}

function updateContact() {
  // Update the contact list immediately
  displayContacts();
  alert("Contact list updated successfully!");
}

function processContacts(callback) {
  contacts.forEach((contact) => callback(contact));
}

function displayContact(contact) {
  console.log(
    `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
  );
}

function displayContacts() {
  let contactList = document.getElementById("contact-list");
  contactList.innerHTML = ""; // Clear the current list

  contacts.forEach((contact) => {
    let contactDiv = document.createElement("div");
    contactDiv.textContent = `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
    contactList.appendChild(contactDiv);
  });
}

setTimeout(() => {
  console.log("Updating contact list...");
  processContacts(displayContact);
}, 2000);

setInterval(() => {
  console.log(`Total contacts: ${contacts.length}`);
}, 5000);

setInterval(() => {
  document.body.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
}, 5000);

function searchContact(name, index = 0) {
  if (index >= contacts.length) return null;
  if (contacts[index].name === name) return contacts[index];
  return searchContact(name, index + 1);
}

let contact = searchContact("Maxwell Wright");
console.log(contact);
