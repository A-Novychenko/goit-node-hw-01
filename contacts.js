const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  try {
    const allContacts = await fs.readFile(contactsPath);
    return JSON.parse(allContacts);
  } catch (err) {
    console.log("err", err.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const allContacts = await listContacts();
    const contact = allContacts.find(({id}) => id === contactId);
    return contact;
  } catch (err) {
    console.log("err", err.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const allContacts = await listContacts();
    const idx = allContacts.findIndex(({id}) => id === contactId);
    if (idx === -1) {
      return null;
    }

    const [deletedContact] = allContacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return deletedContact;
  } catch (err) {
    console.log("err", err.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const allContacts = await listContacts();

    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    allContacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    return newContact;
  } catch (err) {
    console.log("err", err.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
