import axios from "axios";

export const getCharacters = async () => {
  const response = await axios.get(
    "https://api.sampleapis.com/futurama/characters"
  );
  return response.data;
};


export const getCharacterById = async (id) => {
  const response = await axios.get(
    "https://api.sampleapis.com/futurama/characters/"+id
  );
  return response.data;
};
