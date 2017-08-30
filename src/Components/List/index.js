import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';
import "../detail/font/iconfont.css";
import {
	NavLink
}from "react-router-dom";

class List extends Component{
	constructor(props) {
		super(props);
		this.state = {
			foodstore:[],
			currentpage:0,
			hasMore:true,
			count:0,
			twocount:20,
			zero:1,
			divIsShow:false,
			isShow:false,
			current:0
		}
		
	}

	componentDidMount() {
		const count = 0,twocount = 20,zero=1;
		axios.get("/api/listmeishi").then(res=>{
			this.setState({
				foodstore:res.data
			})
		})


	}
	

	render() {
		return (
			<div id="home-all">
				<header>
					<NavLink to="./msite" activeClassName="active">
						<span className="return">
							<i className="iconfont icon-back"></i>
						</span>
					</NavLink>
					<span>美食</span>

				</header>
				<ul className="home-ul" onClick={this.menu.bind(this)}>
					<li className="home-li">
						<NavLink to="/list/listone" activeClassName="active-color">分类</NavLink>
						<span className="tri"></span>
					</li>
					<li className="home-li">
						<NavLink to="/list/listtwo" activeClassName="active-color">排序</NavLink>
						<span className="tri"></span>
					</li>
					<li className="home-li">
						<NavLink to="/list/listthree" activeClassName="active-color">筛选</NavLink>
						<span className="tri"></span>
					</li>
					
				</ul>
				<div id="listone" style={{display:this.state.divIsShow?"block":"none"}}>
					{
						this.props.children
					}
				</div>
				<ul className="food">
					<InfiniteScroll
					    pageStart={0}
					    loadMore={this.handleKerwinLoadMore.bind(this)}
					    hasMore={this.state.hasMore}
					    initialLoad={false} 
					    loader={<div className="loader">正在加载 ...</div>}
					>
						{
							
							this.state.foodstore.map((item,index)=>
								<NavLink to={"/detail/"+item.id+"/goods"} activeClassName="active">
									<li key={new Date().getTime() + index} className="food-li">
										
										<img src={(function(){
											var imgsrc = item.image_path;
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
											
										})()} className="home-left"/>
										<div className="home-right">
											<div className="right-first">
												<h3 className="right-top">
													<span className="brand">品牌</span>
													<span className="cate">{item.name}</span>
													<span className="first-right">保</span>
												</h3>
												<div className="right-center">
													<span className="star"></span>
													<span className="score">{item.rating}</span>
													<span className="sell">月售{item.recent_order_num}单</span>
													<span className="time-right bird">蜂鸟专送</span>
													<span className="time-right time">准时达</span>
												</div>
												<div className="right-bottom">
													<span className="price">￥{item.float_minimum_order_amount}起送</span>
													<span className="price">/ {item.piecewise_agent_fee.description}</span>
													<span className="price">/ {item.average_cost}</span>
													<span className="distance fen">{item.order_lead_time}分钟</span>
													<span className="distance mi">{item.distance}m /</span>
												</div>
				
											</div>
											<div className="right-all">
												<div className="right-last">	
													<div className="last-top">
														<span className="tubiao-green">新</span>
														<span className="favor">新用户下单立减17.0元</span>
													</div>
													<div className="last-center">
														<span className="tubiao-red">减</span>
														<span className="favor">满20减5，满30减8，满50减13</span>
													</div>
													<div className="last-bottom">
														<span className="tubiao-red">折</span>
														<span className="favor">五折套餐</span>
													</div>
												</div>
												<div className="right-last-right">
													<span className="active">3个活动</span>
													<span className="tri"></span>
												</div>
											</div>
											
										</div>
									</li>
								</NavLink>
							)
							
						}
					</InfiniteScroll>
				</ul>
			</div>
		)
	}

	handleKerwinLoadMore(item){
		console.log("请求数据了");
		// console.log(item.id);
		var count1 = this.state.count + 20;
		this.setState({
			count:count1
		})
		
		var zero = ++this.state.zero;
		console.log(count1);
		axios.get("/api/listmeishi").then(res=>{
			// console.log(res.data);
			this.setState({
				foodstore:[...this.state.foodstore,...res.data]
			})

		})
	}

	menu(){
		this.setState({
			divIsShow:!this.state.divIsShow
		})
	}

	menuThree(index){
		this.setState({
			current:index,
			isShow:!this.state.isShow
		})
	}

}
export default List;



















































