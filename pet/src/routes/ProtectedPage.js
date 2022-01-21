import { useEffect } from "react";
import { renderMatches } from "react-router-dom";
import { listPets } from "../services/pets";

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets();
      console.log(response);
    };
    request();
  });

  return (
    <main>
      <p>Página protegida</p>
      <p>Cadastre seu pet</p>
      <form>
        <label htmlFor="name">Nome do pet: </label>
        <input name="name" type="text"></input>
        <label htmlFor="breed">Raça do pet: </label>
        <input name="breed" type="text"></input>
        <label htmlFor="age">Idade do pet: </label>
        <input name="age" type="number"></input>
        <label htmlFor="species">Espécie do pet: </label>
        <input name="species" type="text">
          Cachorro
        </input>
        <input name="species" type="text">
          Gato
        </input>
        <label htmlFor="gender">Gênero do pet:</label>
        <input name="gender" type="radio">
          Fêmea
        </input>
        <input name="gender" type="radio">
          Macho
        </input>
        <label htmlFor="url">URL da imagem do pet: </label>
        <input name="url" type="text"></input>
      </form>
    </main>
  );
}

export default ProtectedPage;
