import React, {Component} from "react";

class TodoList extends Component{

	constructor(){
		super();
		
		this.state = {
			"items":[]
		}
		this.completeItem = this.completeItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.getList = this.getList.bind(this);
		this.newItem = this.newItem.bind(this);
		this.logout = this.logout.bind(this);
	}

	componentDidMount(){
			this.getList();
	}
	logout(){
		fetch('/logout', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  }
		}).then((res) => {console.log(res);this.setState({"items":[]});this.props.history.push("/")}).catch(err=>console.log(err));
		
	}

	getList(){
		this.setState({"items":[]});
		if(document.cookie.length < 11){
			this.props.history.push("/");
		}
		fetch('/todolist', {
		  method: 'get',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  }
		}).then((res) => res.json()).then((res) => this.setState({"items":res})).catch(err=>console.log(err));

	}
	
	completeItem(id){
		fetch('/complete_item', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({item_id:id})
		}).then((res) => {console.log(res.status); this.getList();}).catch(err=>console.log(err));
		

	}
	deleteItem(id){
		fetch('/delete_item', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({item_id:id})
		}).then((res) => {console.log(res.status); this.getList();}).catch(err=>console.log(err));
		

	}
	newItem(){
		let con = document.getElementById("inp").value;
		fetch('/new_item', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({content:con})
		}).then((res) => {console.log(res.status); this.getList();}).catch(err=>console.log(err));
		

	}

	render(){
		let rendered_items = [];
		if(this.state.items != undefined && this.state.items.length > 0){
			let t = this;
		this.state.items.forEach(function(item){
			let temp = (<div></div>);
			if(item.completed){
				temp = (<div key = {item.id} className = "todolistitem">
        			<p>{item.content}</p>
        			<button onClick = {()=>{t.deleteItem(item.id)}}>delete</button>
        		</div>);
			}else{
				temp = (<div className = "todolistitem">
        			<p>{item.content}</p>
        			<button onClick = {()=>{t.completeItem(item.id)}}>complete</button>
        			<button onClick = {()=>{t.deleteItem(item.id)}}>delete</button>
        		</div>);
			}





			rendered_items.push(temp);
		})
		}
		
		
		return (<div>
			<div className = "todolistview">
        		{rendered_items}
        		<div className = "todolistitem">
        			<input id = "inp"/>
        			<button onClick ={this.newItem}>add</button>
        			</div>
        			<button id = "logout" onClick = {this.logout}>logout</button>
        	</div>
		</div>

		);
	}
}

export default TodoList;