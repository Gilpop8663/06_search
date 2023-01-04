export interface medicineDataProps {
  name: string;
  brand?: string;
}

const BASE_URL =
  'https://port-0-node-express-3vw25lci3y9wi.gksl2.cloudtype.app/medicine';

export const getData = () => {
  return fetch(BASE_URL).then((res) => res.json());
};
export const getSearchData = (text: string) => {
  return fetch(`${BASE_URL}/?q=${text}`).then((res) => res.json());
};
