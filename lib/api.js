import { API_URL } from '../config';

const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const headers = {
  'Content-Type': 'application/json'
};

async function fetchAPI(url) {
  const res = await fetch(API_URL + url, {
    method: 'GET',
    headers
  })
    .then(checkStatus)
    .then(parseJSON);
  return res;
}

export async function getAllProjects() {
  const projects = await fetchAPI('/projects');
  return projects;
}

export async function getAllProjectBySlug(slug) {
  const data = await fetchAPI(`/projects/${slug}`);
  return data?.[0];
}

export async function getAllProjectSlugs() {
  const data = fetchAPI('/projects/slugs');
  return data?.data;
}

export async function getAllProceedingSlugs() {
  const data = fetchAPI('/proceedings/slugs');
  return data?.data;
}
