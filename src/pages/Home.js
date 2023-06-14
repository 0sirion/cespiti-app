import React from "react";
import NewItem from "../components/NewItem/NewItem";

const Home = () => {
  return (
    <div>
      <p>
        Benvenuti in Finmatica, nella sezione "Lista" troverai l'elenco
        dell'inventario
      </p>
      <NewItem />
    </div>
  );
};

export default Home;
