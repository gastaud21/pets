import { useEffect, useState, Fragment } from "react";
import { listPets } from "../services/pets";

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
          <p>
            Nome: {pet.name}, Raça: {pet.breed}, Idade: {pet.age} Anos, Espécie:
            {pet.species}, genero: {pet.gender}
          </p>
          <img src={pet.url} alt="pet" />
        </Fragment>
      ))}
    </>
  );
}

// function PublicPage() {
//   return <div>Página pública</div>;
// }

export default PublicPage;
