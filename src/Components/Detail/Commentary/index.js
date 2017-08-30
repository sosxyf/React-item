import React,{Component} from "react";
import "./index.scss";
import "../font/iconfont.css";
import "../Business/index.js";
import "./index.js";
import axios from "axios";
import {
	NavLink
}from "react-router-dom";

class Commentary extends Component{
	constructor(props) {
		super(props);
		this.state={
			playinglist:[],
			playingassess:[],
		}
	}
componentDidMount() {
		//axios 返回值中 会包装一个对象， 把后台的结果放在data中
		axios.get("/api/detail4?"+this.props.match.params.elmID).then(res=>{
			console.log(res.data);
			this.setState({
				playinglist:res.data,


			})
			
		})
		axios.get("/api/detail3").then(res=>{
			this.setState({
				playingassess:res.data,


			})
			
		})

	}

	render() {
		return(
			<div id="bard_footer">
				
			<div id="assess">
				<div className="assess_bard_first">
					<h2 className="Hbard_head">4.6</h2>
					<p>综合评价</p>
					<p className="bard_compare">高于周边商家50.9%</p>
				</div>
				<div className="assess_bard_second">
					<p>
						<span className="bardTitle">服务态度</span>
						<span className="bardStar1">❤❤❤❤❤ </span>
						<span className="bardGrade1">4.6</span>
					</p>
					<p>
						<span className="bardTitle">菜品评价</span>
						<span className="bardStar2">❤❤❤❤❤ </span>
						<span className="bardGrade2">4.6</span>
					</p>
					<p>
						<span className="bardTitle">送达时间</span>
						<span className="bardTime">41分钟</span>
					</p>
				</div>
			</div>
			<ul className="bard_tab">
			{
				this.state.playinglist.map((item,index)=>
				<li className="bardChing bardBlue" key={new Date().getTime() + index}>{item.name}({item.count})</li>
				)	
			}
			</ul>
			<ul className="bard_appraise">

				{
					this.state.playingassess.map((item,index)=>
					<li className="testimonials">
					<div >
						<img className="headPortrait" src="https://fuss10.elemecdn.com/f/2e/20a4300d40b97e98a5889591fb1f2jpeg.jpeg?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"/>
						<div className="appraiseContent">
							<div key={new Date().getTime() + index}>{item.username}</div>
							<div>❤❤❤❤❤</div>
							<div className="appraiseTime" key={new Date().getTime() + index}>{item.rated_at}</div>
							<ul className="appraiseKind">
								{
									this.state.playingassess[index].item_ratings.map((item,index)=>
										<li key={new Date().getTime() + index}>{item.food_name}</li>
										)
								}
							</ul>
						</div>
					</div>
					</li>

					)	
				}
		
		
			
		
			</ul>
			</div>
		)
	}
}
export default Commentary;