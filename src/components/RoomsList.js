import React, { useState, useEffect } from "react";
import Room from "./Room";
import axios from "axios";
import styled from "styled-components";

const RoomsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function RoomsList() {
  useEffect(() => {
    axios.get("/api/rooms").then((res) => setRooms(res.data));
  }, []);

  const [rooms, setRooms] = useState([]);

  // const totalRows = Math.floor(rooms[rooms.length - 1].number / 100);
  // console.log(totalRows);

  return (
    <RoomsListStyles>
      <div className="rooms-list">
        {rooms
          .sort((a, b) => a.number - b.number)
          .map((room) => (
            <Room key={room.id} room={room} />
          ))}
      </div>
    </RoomsListStyles>
  );
}
