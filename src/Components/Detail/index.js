import React,{Component} from "react";
import "./index.scss";
import "./font/iconfont.css";
import "./Commentary/index.js";
import "./Business/index.js";
import axios from "axios";
import {
	NavLink
}from "react-router-dom";


class Detail extends Component{
	constructor(props) {
		super(props);
		this.state={
			looplist:[],
		}
	}

componentDidMount() {
		//axios 返回值中 会包装一个对象， 把后台的结果放在data中
		// console.log(this.props.match.params.elmID);
		axios.get("/api/detail1?id="+this.props.match.params.id).then(res=>{
			this.setState({
				looplist:res.data,
				title:res.data.delivery_mode?res.data.delivery_mode.text:"",
				money:res.data.piecewise_agent_fee.description,
				huodong:res.data.activities[0].description,
				num:res.data.activities,
			})
			
		})

	}
render() {
		return (
			<div>
			<header id="detail">
				<div id="first">
					<NavLink to="../list" activeClassName="active">
						<a><i className="iconfont icon-back"></i></a>
					</NavLink>
				</div>
				<div id="second">
						<img className="shopName" src={(()=>{
										var imgsrc = this.state.looplist.image_path;
										if(!imgsrc){
											return
										}
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
										
									})()}/>
						<div id="secondRight">
							<h3>{this.state.looplist.name}</h3>
							<p>
								<span>{this.state.title}</span>/
								<span><span>{this.state.looplist.order_lead_time}</span>分钟送达</span>/
								<span></span>
							</p>
							<div>{this.state.money}</div>

							{(()=>{
								console.log(this);
							})()}
							<NavLink className="skip1" to={"/detail/"+this.props.match.params.id+"/business"} activeClassName="active"><i className="iconfont icon-right"></i></NavLink>
						</div>
				</div>
				<div id="third">
				<span>{this.state.huodong}</span>
				<div className="thirdNumber">
					<span>2</span>个活动</div>
				</div>
			</header>
			<div className="option">
				<div className="wares">
					<span>
					<NavLink className="skip" to={"/detail/"+this.props.match.params.id+"/goods"} activeClassName="active">商品</NavLink>
					</span>
				</div>
				<div className="assess">
					<span>
					<NavLink className="skip" to={"/detail/"+this.props.match.params.id+"/commentary"} activeClassName="active">评价</NavLink>
					</span>
				</div>
			</div>

			{this.props.children}

			</div>





		)
	
	}

}

export default Detail;