import React from 'react'

const TeamMember = props => {
    return (
        <div>
            {props.teamMember.map(member => (
                <div key={member.id}>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h4>{member.position}</h4>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;