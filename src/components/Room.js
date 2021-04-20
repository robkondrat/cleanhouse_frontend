import { Card } from "react-bootstrap";
import StatusDropDown from "./StatusDropDown";

export default function Room({ room }) {
  function statusBg({ status }) {
    if (status === "Dirty Occupied" || status === "Dirty Vacant") {
      return "danger";
    } else if (status === "Clean Occupied" || status === "Clean Vacant") {
      return "success";
    } else if (status === "Due for Check-Out") {
      return "warning";
    } else if (status === "DND") {
      return "primary";
    } else if (status === "OOO") {
      return "secondary";
    } else {
      return "light";
    }
  }

  return (

    <div>
      <Card bg={statusBg(room)}>
        <Card.Body>
          <Card.Title>
            Room {room.number} - {room.room_type}
          </Card.Title>
          <Card.Text>User ID: {room.user_id}</Card.Text>
          <Card.Text>{room.status}</Card.Text>
          <StatusDropDown room={room} />
        </Card.Body>
      </Card>
    </div>
  );
}

// TODO: Setup a drodown list that shows room status options, and updates the backend api based on user selection (maybe with a modal to confirm selection)
// TODO: Show the actual user assigned to the room instead of just their ID
