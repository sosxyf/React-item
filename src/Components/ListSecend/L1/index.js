import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import {
	NavLink
}from "react-router-dom";

class L1 extends Component{
	constructor(props) {
		super(props);
		this.state = {
			menu:[]
		}
		
	}

	componentDidMount() {
		axios.get("/api/listmeishi2").then(res=>{
			console.log(res.data);
			this.setState({
				menu:res.data
			})
		})
	}

	render() {
		return (
			<div>

			</div>

					
		)
	}
}

export default L1;