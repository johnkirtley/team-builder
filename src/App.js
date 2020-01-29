import React, { useState } from 'react';
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: 1,
      name: 'John',
      email: 'kirtleyj16@gmail.com',
      position: 'Frontend Engineer'
    }
  ]
  )

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
      <h1>Team Members</h1>
      <Form addNewMember={addNewMember} />
      <TeamMember teamMember={teamMember} />

    </div>
  );
}

export default App;
