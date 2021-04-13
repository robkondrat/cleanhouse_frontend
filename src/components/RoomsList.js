import React, { useState, useEffect } from 'react';
import Room from './Room';
import axios from 'axios';
import styled from 'styled-components'

const RoomsListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;


export default function RoomsList() {
  useEffect(() => {
    axios.get('/api/rooms')
      .then(res => setRooms(res.data))
  }, []);

  const [rooms, setRooms] = useState([]);

  return (
    <RoomsListStyles>
      <div className="rooms-list">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </RoomsListStyles>
  )
};

