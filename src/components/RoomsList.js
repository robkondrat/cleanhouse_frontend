import React, { useState, useEffect } from 'react';
import Room from './Room';
import axios from 'axios';

const RoomsList = props => {
  useEffect(() => {
    axios.get('/api/rooms')
      .then(res => setRooms(res.data))
  }, []);

  const [rooms, setRooms] = useState([]);

  return (
    <div>
      <h1>Rooms:</h1>
      <div className="rooms-list">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  )
};

export default RoomsList;

