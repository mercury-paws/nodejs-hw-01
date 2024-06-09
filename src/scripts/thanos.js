import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  try {
    let existingData;
    const fileContent = await fs.readFile(PATH_DB, 'utf8');
    existingData = fileContent ? JSON.parse(fileContent) : [];

    const remainigContacts = existingData.filter(() => Math.random() > 0.5);

    await fs.writeFile(PATH_DB, JSON.stringify(remainigContacts));
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Error processing contacts:', err);
  }
};

await thanos();
