import sendRequest from "./send-request";
const BASE_URL = '/api/applications';

export async function getAllApplications() {
  return sendRequest(BASE_URL);
}

export async function createApplication(applicationData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', applicationData)
}

export async function getApplication(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteAnApplication(id) {
  return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}

export async function updateApplication(id, payload) {
  return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', payload);
}


