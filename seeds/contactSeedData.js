const { Contact } = require("../models");

const ContactData = [
  {
    fullName: "Sam Smith",
    email: "bretpetersen82@gmail.com",
    Number: 612123123,
    Message:'fnsdfhskfhkshf',
  },
  {
    fullName: "Sam Smith",
    email: "bretpetersen82@gmail.com",
    Number: 612123123,
    Message:'fnsdfhskfhkshf',
  },
  {
    fullName: "Sam Smith",
    email: "bretpetersen82@gmail.com",
    Number: 612123123,
    Message:'fnsdfhskfhkshf',
  },
  
];

const seedContact = () => Contact.bulkCreate(ContactData);

module.exports = seedContact;
