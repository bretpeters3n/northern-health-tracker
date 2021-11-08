const { Contact } = require("../models");

const ContactData = [
  {
    user_id: 1,
    message: "The first message",
  },
  {
    user_id: 2,
    message: "Number 2",
  },
  {
    user_id: 3,
    message: "Try a third time",
  },
];

const seedContact = () => Contact.bulkCreate(ContactData);

module.exports = seedContact;
