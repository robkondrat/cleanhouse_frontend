import axios from "axios";
import { useState } from "react";

export default function StatusDropDown({ room }) {
  const [selection, setSelection] = useState();
  const [statusOptions] = useState([
    {
      label: "Due for Check-Out",
      value: "Due for Check-Out",
    },
    {
      label: "Clean Occupied",
      value: "Clean Occupied",
    },
    {
      label: "Clean Vacant",
      value: "Clean Vacant",
    },
    {
      label: "Dirty Occupied",
      value: "Dirty Occupied",
    },
    {
      label: "Dirty Vacant",
      value: "Dirty Vacant",
    },
    {
      label: "DND",
      value: "DND",
    },
    {
      label: "OOO",
      value: "OOO",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(room.id);
    var formData = new FormData();
    formData.append("status", selection)
    axios.patch(`/api/rooms/${room.id}`, formData)
      .then(response => {
        console.log("success", response)
      })
      .catch(error => {
        console.log(error)
      });
  }


  return (
    <form>
      <select value={selection ? selection : room.status} onChange={e => setSelection(e.currentTarget.value)}>
        {statusOptions.map(({ label, value }) => (
          <option key={value} value={label}>
            {label}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Update Room</button>
    </form>
  );
}
