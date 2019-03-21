import React, {Component} from "react";
import {Route, Link} from 'react-router-dom';
class Home extends Component{
	constructor(){
		super();
		this.login = this.login.bind(this);
		this.logout = this.login.bind(this);
		this.signup = this.signup.bind(this);
	}

	login(){
		let usr = document.getElementById("try_user_login").value;
		fetch('/login_action', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({username:usr})
		}).then((res) => {console.log(res.status); this.props.history.push('/todolist');}).catch(err=>console.log(err));
		
	}

	signup(){
		let con =  document.getElementById("try_user").value;
		fetch('/create_user_action', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({username:con})
		}).then(res => res.text()).then((res)=>{if(res!=="OK"){alert(res)}else{alert("You are now registered!")}}).catch(err=>console.log(err));
	}


render(){
	return(

		<div>
 
       		 				<Link to = "/github_serve" style = {{all:"unset"}}><div id = "gh_s">Github static serve</div></Link>
							<div className = "login_sys">
							<p>Sign up</p>
							<input placeholder = "username" id = "try_user"/>
							<button onClick = {this.signup}>Register</button>
							</div>
							<div className = "login_sys">
							<p>Log in</p>
							<input placeholder = "username" id = "try_user_login"/>
							<button onClick = {this.login}>login</button>
							</div>
							
							

											
			</div>

		);
}

}

export default Home;