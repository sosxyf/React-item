import React,{Component} from "react";
import "./index.scss";
import "./css/swiper.min.css";
import "./js/swiper.js";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller';
import {
	NavLink
} from "react-router-dom";
// import ReactSwipe from "react-swipe";

class Msite extends Component{
	constructor(props) {
		super(props);
		this.state = {
			foodstore:[],
			hotsearch:[],
			currentpage:0,
			hasMore:true,
			count:0,
			twocount:20,
			zero:1
		}
	}
	componentDidMount() {
            var swiper = new Swiper('.panda',{
                pagination: '.swiper-pagination', //初始化 分页器
                paginationClickable: true, //分页器可以点击
                speed:2000,
                spaceBetween: 100
            });
            const count = 0,twocount = 20,zero=1;
			axios.get("/api/indextuijian").then(res=>{
				console.log(res.data);
				this.setState({
					foodstore:res.data
				})
			});
			axios.get("/api/indexnav").then(res=>{
				console.log(res.data);
				this.setState({
					hotsearch:res.data
				})
			})
    }
	render() {
		return (
			<div id="panda_index">
				<div className="panda_top">
					<div className="search">
						搜索商品、店家
					</div>
					<div className="panda_bot">
						<ul>
							{
								this.state.hotsearch.map((item,index)=>
									<li key={index}>{item.word}</li>
								)
							}
						</ul>
					</div>
				</div>

				<div className="swiper-container panda">
			        <div className="swiper-wrapper">
			            <div className="swiper-slide">
		                	<ul>
		                		<li>
		                			<NavLink to="/list">
		                			<img src="//fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>美食</p>
		                			</NavLink>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>甜品饮品</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>超市便利</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>果蔬生鲜</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>新店特惠</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>准时达</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>晚餐</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>汉堡薯条</p>
		                		</li>
		                	</ul>
		                </div>
            			<div className="swiper-slide">
            				<ul>
	            				<li>
		                			<img src="//fuss10.elemecdn.com/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>包子粥店</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>鲜花蛋糕</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>麻辣烫</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/9/c0/c4a1e0692daa0ca7f8c4c8f2e1496jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>地方菜系</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>批萨意面</p>
		                		</li>
		                		<li>
		                			<img src="//fuss10.elemecdn.com/6/d2/de0683a49a0655c728b70fdb344d5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"/>
		                			<p>异国料理</p>
		                		</li>
		                	</ul>
            			</div>
            		</div>
   					<div className="swiper-pagination"></div>
            	</div>
            	<div className="fengexian"></div>
            	<h1 className="panda_tuijian">商家推荐</h1>
            	<div id="home-all">
					<ul className="food" style={{padding:'0'}}>
						<InfiniteScroll
					    pageStart={0}
					    loadMore={this.handleKerwinLoadMore.bind(this)}
					    hasMore={this.state.hasMore}
					    initialLoad={false} 
					    loader={<div className="loader">正在加载 ...</div>}
					>
						{
							this.state.foodstore.map((item,index)=>
								<li key={index} className="food-li">
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
							)
							
						}
					</InfiniteScroll>
					</ul>
				</div>
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
}
export default Msite;