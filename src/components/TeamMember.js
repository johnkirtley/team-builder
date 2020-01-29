import React from 'react'
import Styled from 'styled-components';

const Card = Styled.div`
display: block;
text-align: center;
background-color: yellow;
width: 25%;
padding: 3% 0;
border-radius: 10px;
margin: 3% auto;

&:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
}
`

const TeamMember = props => {
    return (
        <div>
            <h2>Team Member List</h2>
            {props.teamMember.map(member => (
                <Card key={member.id}>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h4>{member.position}</h4>
                </Card>
            ))}
        </div>
    );
};

export default TeamMember;