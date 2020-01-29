import React, { useState } from 'react';

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
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChanges} value={member.name} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChanges} value={member.email} />
            </div>
            <div>
                <label htmlFor="position">Position</label>
                <input type="text" id="position" name="position" onChange={handleChanges} value={member.position} />
            </div>

            <button type="submit">Add New Member</button>
        </form>
    );
};

export default TeamList;
