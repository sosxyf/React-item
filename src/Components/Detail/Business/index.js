import React,{Component} from "react";
import "./index.scss";
import "../font/iconfont.css";
import "../index.js";
import axios from "axios";
import {
	NavLink
}from "react-router-dom";


class Business extends Component{
	constructor(props) {
		super(props);
		this.state={
			shoplist:[],
		}
	}
	componentDidMount() {
		//axios 返回值中 会包装一个对象， 把后台的结果放在data中
		axios.get("/api/detail1?"+this.props.match.params.elmID).then(res=>{
			console.log(res.data.activities);
			this.setState({
				shoplist:res.data.activities,
				bardadd:res.data.supports[0].description,
			})
			
		})

	}
	render() {
		return (

			<div>
			<div className="bardMove">
			<header className="bardMove_back"><span className="bardBack_fiont">
				<NavLink className="skip" to={"/detail/"+this.props.match.params.id+"/goods"} activeClassName="active">△</NavLink>
			</span>
			<h1>商家详情</h1></header>
				<div className="bardMove_list">
					<div className="shop_info">
						<div className="bardSection">
							<h3 className="bardSection_title"></h3>
							<div className="bardSection_list">
								<ul>
									{
										this.state.shoplist.map((item,index)=>
											<li><p>{item.description}</p></li>
											)
									}
									<li><p>{this.state.bardadd}</p></li>
								</ul>
							</div>
						</div>
						<div className="bardSection">
							<h3 className="bardSection_title"></h3>
							<div className="bardSection_list">
								<p>新用户下单立减17.0元(不与其它活动同享)</p>
								<p>新用户下单立减17.0元(不与其它活动同享)</p>
								<p>新用户下单立减17.0元(不与其它活动同享)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
		)
	}
}

export default Business;