   // src/services/dataService.js
   import { database } from './firebase';
   import { ref, set } from 'firebase/database';
   import { v4 as uuidv4 } from 'uuid';

   const saveContact = async (contact) => {
     try {
       console.log("Contact object:", contact);
       const contactId = contact.id || uuidv4();
       const contactRef = ref(database, 'kazhuga-contact-us/' + contactId);
       await set(contactRef, contact);
       console.log("Contact saved successfully!");
     } catch (error) {
       console.error("Error saving contact: ", error);
     }
   };

   export { saveContact };