import { useEffect } from "react";
// import { renderMatches } from "react-router-dom";
import { listPets, createPet } from "../services/pets";
import "./ProtectedPage.css";

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets();
    };
    request();
  }, []);

  const toSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const breed = formData.get("breed");
    const age = formData.get("age");
    const species = formData.get("species");
    const gender = formData.get("gender");
    const url = formData.get("url");
    const data = {
      name,
      breed,
      age,
      species,
      gender,
      url,
    };
    console.log(data);
    await createPet(data);
    event.target.reset();
  };

  return (
    <main>
      <p>Página protegida</p>
      <p>Cadastre seu pet</p>
      <form onSubmit={toSubmit}>
        <label>
          Nome: <input type="text" name="name" />
        </label>
        <label>
          Raça: <input type="text" name="breed" />
        </label>
        <label>
          Idade: <input type="number" name="age" />
        </label>
        <label>
          Espécie:
          <select name="species">
            <option value="Gato">Gato</option>
            <option value="Cachorro">Cachorro</option>
          </select>
        </label>
        <label>
          Gênero:
          <select name="gender">
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>
        </label>
        <label>
          Imagem do pet (url): <input type="text" name="url" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default ProtectedPage;
