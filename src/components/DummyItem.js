import "./DummyItem.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DummyItem = ({
  id,
  numero_inventario,
  descrizione,
  statoConservazione,
}) => {
  const navigate = useNavigate();
  const [itemId, setItemId] = useState(id);
  const [itemDesc, setItemDesc] = useState(descrizione);

  const handleClick = () => {
    navigate(`/specs/Item${id}`, { state: { itemId } });
    // console.log(`/specs/${id}`);
  };

  return (
    <div className="container">
      <li
        className="dummy-item"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <p>numero inventario: {numero_inventario}</p>
        <h2>{descrizione}</h2>

        <br></br>
      </li>
    </div>
  );
};

export default DummyItem;
