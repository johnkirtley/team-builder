import React, { useState } from 'react';
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([])

  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      position: member.position
    };
    setTeamMember([...teamMember, newMember]);
  }
  return (
    <div className="App">
      <h1>Add New Member</h1>
      <Form addNewMember={addNewMember} />
      <TeamMember teamMember={teamMember} />

    </div>
  );
}

export default App;
