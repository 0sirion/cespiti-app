import { useState } from "react";

import NewItemForm from "./NewItemForm";
import "./NewItem.css";

// export default function NewItem() {
//   const [isShown, setIsShown] = useState(false);

//   const handleClick = (event) => {
//     // 👇️ toggle shown state
//     setIsShown((current) => !current);

//     // 👇️ or simply set it to true
//     // setIsShown(true);
//   };
//   return (
//     <div className="new-item">
//       <div>
//         <button onClick={handleClick}>Regista nuovo Item </button>

//         {/* 👇️ show elements on click */}
//         {isShown && <div></div>}

//         {/* 👇️ show component on click */}
//         {isShown && <NewItemForm />}
//       </div>
//     </div>
//   );
// }

export default function NewItem() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(true);
  };

  return (
    <div className="new-item">
      <div>
        {!isShown && <button onClick={handleClick}>Regista nuovo Item </button>}

        {isShown && (
          <div className="new-item-form-container">
            <NewItemForm />
          </div>
        )}
      </div>
    </div>
  );
}
