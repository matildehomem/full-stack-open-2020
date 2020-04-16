import React from 'react'

export default function PersonForm({newName, newNumber, onChangeName, onChangeNumber, onClick}) {
    return (
        <form>
        <div>
          name: <input value={newName} onChange={onChangeName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={onChangeNumber}/>
        </div>
        <div>
          <button type="submit" onClick={onClick}>add</button>
        </div>
      </form>
    )
}
