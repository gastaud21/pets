import { useEffect, useState, Fragment } from "react";
import { listPets } from "../services/pets";
import "./PublicPage.css";

function PublicPage() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const request = async () => {
      const { data } = await listPets();
      console.log(data);
      setPets(data.pets);
    };
    request();
  }, []);

  return (
    <>
      {pets.map((pet) => (
        <Fragment key={pet.id}>
          <div className="card">
            <div className="card__text">
              <p>Nome: {pet.name}</p>
              <p>Raça: {pet.breed}</p>
              <p>Idade: {pet.age} Anos</p>
              <p>Espécie: {pet.species}</p>
              <p>Gênero: {pet.gender}</p>
            </div>
            <img className="card__img" src={pet.url} alt="pet" />
          </div>
        </Fragment>
      ))}
    </>
  );
}

export default PublicPage;
