
import React from 'react';
import FriendCard from './FriendCard';
import friends from './friendsData';


function App() {
  return (
    <div style={containerStyle}>
      {friends.map((friend, index) => (
        <FriendCard key={index} {...friend} />
      ))}
    </div>
  );
}

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "20px"
};

export default App;
