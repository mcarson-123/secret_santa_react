import axios from 'axios';

export const CREATE_PARTY = 'CREATE_PARTY';

export function createParty() {
  const url = "http://localhost:4000/api/parties";
  const request = axios.post(url, {name: "Madeline's Cat Party"});

  return {
    type: CREATE_PARTY,
    payload: request
  };
}
