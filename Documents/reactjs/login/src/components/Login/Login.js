import React, { Component } from 'react';
import './Login.css';
import {PostData} from '../../services/PostData';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect: false
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login(){ 
        if(this.state.username && this.state.password){
        // console.log('Login Function');
        PostData('login',this.state).then ((result) => {
            let responseJSON = result;
            // console.log(responseJSON);

            if(responseJSON.userData){
                sessionStorage.setItem('userData', responseJSON);
                console.log('Homepage');
                this.setState({redirect: true});
            }
            else{
                console.log('login Error');
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
                <h2> Login Page </h2>
                <label> Username </label>
                <input type="text" name="username" placeholder="username" onChange={this.onChange}/>
                <label> Password </label>
                <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                <input type="submit" value="Login" className="button" onClick={this.login}/>
                <a href="/signup">Registration</a>
                </div>
            </div>
        );
    }
}

export default Login;