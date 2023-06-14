import "./NewItemForm.css";
import statiConsArr from "../../data/StatiConservazioneArray";
export default function NewItemForm() {
  return (
    <form>
      <div className="new-item__controls">
        <label>Nome Item: </label>
        <input type="Text" />

        <label>Descrizione: </label>
        <input type="text" />

        <label>Numero Inventario: </label>
        <input type="number" min="0" />

        <label>Data Registrazione: </label>
        <input type="date" />

        <label>Stato conservazione: </label>
        <select>
          <option>Ottimo ({statiConsArr[0].ottimo})</option>
          <option>Buono ({statiConsArr[0].buono})</option>
          <option>Discreto ({statiConsArr[0].discreto})</option>
          <option>Mediocre ({statiConsArr[0].mediocre})</option>
          <option>Pessimo ({statiConsArr[0].pessimo})</option>
          <option>Fuori uso({statiConsArr[0].fuoriUso})</option>
        </select>

        {/* <button type="button" onClick={() => StatiConsFn}>
          CLICK ME!!{" "}
        </button> */}

        <label for="submit"></label>
        <button type="submit"> Invia</button>
      </div>
    </form>
  );
}
