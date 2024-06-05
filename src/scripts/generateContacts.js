import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let contacts = [];
  for (let i = 0; i <= number; i++) {
    contacts.push(createFakeContact());
  }
  //   console.log(JSON.stringify(contacts));
  try {
    await fs.appendFile(PATH_DB, JSON.stringify(contacts));
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await generateContacts(5);
