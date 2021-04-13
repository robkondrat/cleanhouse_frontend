export default function Room({ room }) {
  return (
    <div>
      <div>
        {room.number} | {room.floor} | {room.status} | {room.room_type}
      </div>
    </div>
  )
}