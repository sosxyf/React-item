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
				menu:res.data[7].sub_categories
			})
		})
	}

	render() {
		return (
			<div>
				{
					this.state.menu.map((item,index)=>
						<li className="classify-right-li" key={new Date().getTime()+index}>
							<NavLink to="/list/listone/listl1" activeClassName="active"></NavLink>
								<img src={(function(){
									var imgsrc = item.image_url;
									var img1 = imgsrc.substring(0,1);
									var img2 = imgsrc.substring(1,3);
									var img3 = imgsrc.substring(3);
									var img4;
									
									if (imgsrc.indexOf("jpg")>-1){
										img4 = img1 +"/"+ img2 +"/"+img3+".jpg?";
									} else if (imgsrc.indexOf("png")>-1) {
										img4 = img1 +"/"+ img2 +"/"+img3+".png?";
									} else {
										img4 = img1 +"/"+ img2 +"/"+img3+".jpeg?";
									}
									return "https://fuss10.elemecdn.com/"+img4;
									
								})()} className="classify-img"/>
							<span className="classify-all">{item.name}</span>
							<span className="classify-num">{item.count}</span>
						</li>
					)
				}
			</div>

					
		)
	}
}

export default L1;