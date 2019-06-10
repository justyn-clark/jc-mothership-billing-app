const API_HOSTNAME = 'https://challenge.mothership.com';
const USER_ID = 'u2kjfladadwddj9';

const constructUrl = url => `${API_HOSTNAME}${url}${USER_ID}`;

const constructOrganizationUrl = organizationId =>
  `${API_HOSTNAME}/organization/${organizationId}/billing`;

export const USER_URL = constructUrl('/user/');

export const ORGANIZATION_URL = organizationId =>
  constructOrganizationUrl(organizationId);
