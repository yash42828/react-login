import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
            <div className="column">
            <h3> Project Description </h3>
            <a href="/login" class="button">Login </a>
            <a href="/signup" class="button success">Signup </a>

            </div>
            </div>
            
        );
    }
}

export default Welcome;