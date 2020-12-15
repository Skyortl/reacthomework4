import React, { Component } from 'react';

class RegisterCard extends Component {
    render() 
    {
        const {number, card = 0} = this.props;
        return (
            <div className="card">
                {Boolean(card) && <h3>Register card #{number}</h3>}
                <p>Username: {card.username}</p>
                <p>E-mail: {card.email}</p>
                <p>Sex: {card.sex}</p>
            </div>
        );
    }
}

export default RegisterCard;
