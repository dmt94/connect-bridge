import sendRequest from "./send-request";
const BASE_URL = '/api/contacts';

export async function getAllContacts() {
  return sendRequest(BASE_URL);
}

export async function createContact(contactData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', contactData)
}

export async function getContact(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteAContact(id) {
  return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}

export async function updateAContact(id, payload) {
  return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', payload);
}