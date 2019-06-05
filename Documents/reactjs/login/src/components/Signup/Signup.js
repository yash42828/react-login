import React, { Component } from 'react';
import './Signup.css';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';
class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            redirect: false
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    signup(){ 
        if(this.state.username && this.state.password){
        // console.log('Login Function');
        PostData('signup',this.state).then ((result) => {
            let responseJSON = result;
            // console.log(responseJSON);

            if(responseJSON.userData){
                sessionStorage.setItem('userData', responseJSON);
                // console.log('Homepage');
                this.setState({redirect: true});
            }
            else{
                console.log('signup Error');
            }
        }); 
    }
    }
    onChange(e){
        // console.log('on change');
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
    render() {
        if(this.state.redirect){
            return (<Redirect to={'/home'}/>)
        }
        if(sessionStorage.getItem("userData")){
            return (<Redirect to={'/home'}/>)
        }
        return (
            <div className="row small-up-2 medium-up-3 large-up-4">
                <div className="column bodyPart">
                <h2> Signup Page </h2>
                <label> Name </label>
                <input type="text" name="name" placeholder="Name" onChange={this.onChange}/>
                <label> Username </label>
                <input type="text" name="username" placeholder="username" onChange={this.onChange}/>
                <label> Password </label>
                <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                <label> Email </label>
                <input type="email" name="email" placeholder="Email" onChange={this.onChange}/>
                <input type="submit" value="Signup" className="button" onClick={this.signup}/>
                <a href="/login">Login</a>

                </div>
            </div>
        );
    }
}

export default Footer;