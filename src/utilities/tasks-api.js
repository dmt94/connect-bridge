import sendRequest from "./send-request";
const BASE_URL = '/api/tasks';

export async function getAllTasks() {
  return sendRequest(BASE_URL);
}

export async function createTask(applicationId, taskData) {
  taskData.application = applicationId;
  return sendRequest(`${BASE_URL}/create`, 'POST', taskData)
}

export async function getTask(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteTask(id) {
  return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}

export async function updateTask(id, payload) {
  return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', payload);
}