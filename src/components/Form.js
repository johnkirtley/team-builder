import React, { useState } from 'react';
import Styled from 'styled-components';


const Entry = Styled.div`
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin-top: 1%;
`

const Button = Styled.button`
font-size: 1rem;
margin-top: 2%;
border-radius: 10px;
padding: 0.5% 1%;
cursor: pointer;
`

const TeamList = props => {
    const [member, setMember] = useState({
        name: '',
        email: '',
        position: ''
    });

    const handleChanges = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({ name: '', email: '', position: '' });
    };

    return (
        <form onSubmit={submitForm}>
            <Entry>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChanges} value={member.name} />
            </Entry>
            <Entry>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChanges} value={member.email} />
            </Entry>
            <Entry>
                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" onChange={handleChanges} value={member.position} />
            </Entry>

            <Button className='submit-button' type="submit">Add New Member</Button>
        </form>
    );
};

export default TeamList;
