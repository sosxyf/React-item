import React,{Component} from "react";
import "./index.scss";
import axios from "axios";

class Goods extends Component{
	constructor(props) {
		super(props);
		this.state={
			dataikList:[],
		}
		
	}
componentDidMount() {
		//axios 返回值中 会包装一个对象， 把后台的结果放在data中
		axios.get("/api/detail2?id="+this.props.match.params.id).then(res=>{
			console.log(res.data[0])
			console.log(res.data[0].foods)
			this.setState({
				dataikList:res.data,


			})
			
		})

	}

	render() {
		return (

			<div>
			<nav id="datailNav">
			<ul className="menu">
					{
	            		this.state.dataikList.map((item,index)=>

	            			<li key={new Date().getTime() + index}>{item.name}</li>
	            		)
	            	}
			</ul>
			<div className="bardlist"  onScroll={()=>{
				console.log("1111");
				var a = document.querySelectorAll("dl");
				var b = document.querySelector(".menu");
				var c = b.querySelectorAll("li");
				(function ui(){
					for(i=0;i<a.length;i++){
						if(a[i].scrollTop>0 ){
							for(k=0;k<c.length;k++){
								c[k].style.background="blue";
							}

						}
					}
					
				})

			}}>
				
					
					{
	            		this.state.dataikList.map((item,index)=>
	            			<dl key={new Date().getTime() + index}>
	            				<dt>{item.name}</dt>
	            				
	            				{
	            					this.state.dataikList[index].foods.map((item,index)=>
	            					<dd key={new Date().getTime() + index}>	
	            							<span><img src={(function(){
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
										
									})()} className="bardLove"/ ></span>
	            							<div>
	            							<h4>{item.name}</h4>
					            			<p>
												<span className="bardEvaluate">{item.tips.split(" ")[1]}</span>
												<span className="bardPercent">好评率{item.satisfy_rate}%</span>
												
											</p>
					         				<div className="money">￥<span>
					         				{(function(){
					         					console.log(item.specfoods[0]);
					         				 })()}
					         				
					         						{item.specfoods[0].price}
					         				
					         				
					         				</span>
													<span>起</span>
											</div>
											<div className="add"><i className="iconfont icon-jia-copy"></i></div>
											</div>
	            					</dd>		
	            					)	
	            				}
	            				
	            			</dl>
	            		
	            		)
	            	}
	            
			</div>
			</nav>
			<footer id="detailFooter">
				<div>
				<i className="iconfont icon-gouwuche"></i>
				<div className="middle">
					<p>￥0</p>
					<p>配送费¥4</p>
				</div>
				<a href="javascript:" className="give">¥20起送</a>
				</div>
			</footer>
					
			</div>
		)
	}
}

export default Goods;