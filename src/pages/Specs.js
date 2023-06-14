import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import ItemsArray from "../data/ItemsArray";

const Specs = () => {
  const location = useLocation();
  const { itemId } = location.state;
  const navigate = useNavigate();
  const selectedItem = ItemsArray.find((item) => item.id === itemId);
  const [description, setDescription] = useState(selectedItem.descrizione);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleClick = () => {
    const updatedItem = {
      ...selectedItem,
      descrizione: description,
    };
    ItemsArray.forEach((item, index) => {
      if (item.id === itemId) {
        ItemsArray[index] = updatedItem;
      }
    });
    navigate("/Lista");
  };

  return (
    <form>
      {selectedItem && (
        <div>
          <h2>{selectedItem.descrizione}</h2>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
          <p>annotazione: {selectedItem.annotazione}</p>
          <p>progr_scheda: {selectedItem.progr_scheda}</p>
          <p>numero inventario: {selectedItem.numero_inventario}</p>
          <p>stato_conservazione: {selectedItem.stato_conservazione}</p>
          <p>categoria_fiscale: {selectedItem.categoria_fiscale}</p>
        </div>
      )}

      <button onClick={handleClick}>⬅ Torna Alla lista</button>
    </form>
  );
};

export default Specs;

// const Specs = () => {
//   const location = useLocation();
//   const { itemId } = location.state;
//   const navigate = useNavigate();

//   const selectedItem = ItemsArray.find((k) => k.id === itemId);
//   const handleClick = () => {
//     navigate("/Lista");
//   };
//   return (
//     <form>
//       {selectedItem && (
//         <form>
//           <h2>{selectedItem.descrizione}</h2>
//           <p>annotazione: {selectedItem.annotazione}</p>
//           <p>progr_scheda: {selectedItem.progr_scheda}</p>
//           <p>numero inventario: {selectedItem.numero_inventario}</p>
//           <p>stato_conservazione: {selectedItem.stato_conservazione}</p>
//           <p>categoria_fiscale: {selectedItem.categoria_fiscale}</p>
//         </form>
//       )}

//       <button onClick={handleClick}> ⬅ Torna Alla lista</button>
//     </form>
//   );
// };

// export default Specs;
