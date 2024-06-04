import { useEffect, useState } from "react";
import { getCharacters, getCharacterById } from "./services/api";
import { CharacterImg, Popup } from "./styled";

function App() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState(); //[{}]
  const [favorites, setFavorites] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  const handleDeleteFromFavourites = (id) => {
    const newFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(newFavorites);
  };

  const handlePopup = async () => {
    if (id === "") return alert("Digite um id");
    else {
      setVisible(true);
      const response = await getCharacterById(id);
      console.log(response);
      setCharacter(response);
    }
  };
  return (
    <>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <button onClick={handlePopup}>Mostrar</button>
      {characters.map((character) => {
        return (
          <button
            key={character.id}
            onClick={() => setFavorites([...favorites, character])}
          >
            <h1>{character.name.first}</h1>
            <p>{character.species}</p>
          </button>
        );
      })}
      <h2>Favoritos</h2>
      {favorites.map((favorite) => {
        return (
          <button
            key={favorite.id}
            onClick={() => handleDeleteFromFavourites(favorite.id)}
          >
            <h1>{favorite.name.first}</h1>
            <p>{favorite.species}</p>
          </button>
        );
      })}

      <Popup visible={visible}>
        <div>
          <p>{character?.name.first}</p>
          <CharacterImg src={character?.images.main} alt="" />
        </div>
      </Popup>
    </>
  );
}

export default App;
