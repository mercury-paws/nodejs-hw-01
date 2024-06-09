import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('All contacts have been removed');
  } catch (err) {
    console.error('Error while removing contacts:', err);
  }
};

await removeAllContacts();
