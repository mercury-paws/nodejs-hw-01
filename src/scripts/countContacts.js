import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
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
  return existingData.length;
};

console.log(await countContacts());
