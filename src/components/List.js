import { useState } from "react";
import ItemsArray from "../data/ItemsArray";
import DummyItem from "./DummyItem";
import "./List.css";

const List = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState(ItemsArray);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDescriptionChange = (itemId, newDescription) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          descrizione: newDescription,
        };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const filteredItems = items.filter(
    (item) =>
      item.descrizione.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toString().includes(searchQuery)
  );

  return (
    <div>
      <h1>Lista Elementi Inventario:</h1>
      🔍
      <input
        type="text"
        placeholder="Cerca item per nome o ID"
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredItems.map((item) => (
        <DummyItem
          key={item.id}
          id={item.id}
          numero_inventario={item.numero_inventario}
          descrizione={item.descrizione}
          onDescriptionChange={handleDescriptionChange}
        />
      ))}
    </div>
  );
};

export default List;

// abilitate modifiche **********************************************************************
// const List = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [items, setItems] = useState(ItemsArray);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleDescriptionChange = (itemId, newDescription) => {
//     const updatedItems = items.map((item) => {
//       if (item.id === itemId) {
//         return {
//           ...item,
//           descrizione: newDescription,
//         };
//       }
//       return item;
//     });
//     setItems(updatedItems);
//   };

//   const filteredItems = items.filter(
//     (item) =>
//       item.descrizione.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.id.toString().includes(searchQuery)
//   );

//   return (
//     <div>
//       <h1>Lista Elementi Inventario:</h1>
//       🔍
//       <input
//         type="text"
//         placeholder="Cerca item per nome o ID"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       {filteredItems.map((item) => (
//         <DummyItem
//           key={item.id}
//           id={item.id}
//           numero_inventario={item.numero_inventario}
//           descrizione={item.descrizione}
//           onDescriptionChange={handleDescriptionChange}
//         />
//       ))}
//     </div>
//   );
// };

// export default List;

// const List = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleDescriptionChange = (itemId, newDescription) => {
//     ItemsArray.forEach((item) => {
//       if (item.id === itemId) {
//         item.descrizione = newDescription;
//       }
//     });
//   };

//   const filteredItems = ItemsArray.filter(
//     (item) =>
//       item.descrizione.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.id.toString().includes(searchQuery)
//   );

//   return (
//     <div>
//       <h1>Lista Elementi Inventario:</h1>
//       🔎
//       <input
//         type="text"
//         placeholder="Cerca item per nome o ID"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       {filteredItems.map((item) => (
//         <DummyItem
//           key={item.id}
//           id={item.id}
//           numero_inventario={item.numero_inventario}
//           descrizione={item.descrizione}
//           onDescriptionChange={handleDescriptionChange}
//         />
//       ))}
//     </div>
//   );
// };

// export default List;

// const List = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredItems = ItemsArray.filter(
//     (item) =>
//       item.descrizione.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.id.toString().includes(searchQuery)
//   );

//   return (
//     <div>
//       <h1>Lista Elementi Inventario:</h1>
//       🔎
//       <input
//         type="text"
//         placeholder="Cerca item per nome o ID"
//         value={searchQuery}
//         onChange={handleSearch}
//       />
//       {filteredItems.map((item) => (
//         <DummyItem
//           key={item.id}
//           id={item.id}
//           numero_inventario={item.numero_inventario}
//           descrizione={item.descrizione}
//         />
//       ))}
//     </div>
//   );
// };

// export default List;
