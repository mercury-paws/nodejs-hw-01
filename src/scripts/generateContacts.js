import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  let contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  //   console.log(JSON.stringify(contacts));
  try {
    let existingData;

    try {
      const fileContent = await fs.readFile(PATH_DB, 'utf8');
      existingData = fileContent ? JSON.parse(fileContent) : [];
    } catch (err) {
      if (err.code === 'ENOENT') {
        existingData = [];
      } else {
        throw err;
      }
    }

    existingData.push(...contacts);

    await fs.writeFile(PATH_DB, JSON.stringify(existingData));
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

await generateContacts(5);
