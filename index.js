const contactsService = require("./contacts");
const {Command} = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({action, id, name, email, phone}) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      return console.table(allContacts);

    case "get":
      const contact = await contactsService.getContactById(id);
      return console.table(contact);

    case "add":
      const addContact = await contactsService.addContact(name, email, phone);
      return console.table(addContact);

    case "remove":
      const removeContact = await contactsService.removeContact(id);
      return console.table(removeContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
