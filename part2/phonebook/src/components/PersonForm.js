import React from "react";

export default function PersonForm({
  newName,
  newNumber,
  onChangeName,
  onChangeNumber,
  onClick,
}) {
  return (
    <form>
      <div>
        <input value={newName} onChange={onChangeName} placeholder="Name"/>
      </div>
      <div>
        <input value={newNumber} onChange={onChangeNumber} placeholder="Number"/>
      </div>
      <div>
        <button type="submit" onClick={onClick}>
          add
        </button>
      </div>
    </form>
  );
}
