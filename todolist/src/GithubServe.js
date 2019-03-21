import React, {Component} from "react";

class GithubServe extends Component{

	constructor(){
		super();
		this.state = {
			"github_serve_html":""
		}
		this.github_serve = this.github_serve.bind(this);
	}

	github_serve(){
		fetch('/github', {
		  method: 'get',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  }
		}).then(res => res.text()).then((res)=>{

			this.setState({"github_serve_html":res});
		}).catch(err=>console.log(err));
	}

	componentDidMount(){
		this.github_serve();
	}

	render(){
		return(<div dangerouslySetInnerHTML={{__html: this.state.github_serve_html}}/>)
	}
}

export default GithubServe;