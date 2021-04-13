import { Card } from "react-bootstrap";

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
          <Card.Text>{room.status}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
