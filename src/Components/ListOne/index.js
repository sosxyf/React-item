import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
}from "react-router-dom";
import axios from "axios";

class ListOne extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isClicked:false,
			current:0,
			divIsShow:false
		}
		
	}


	render() {
		return (
			<div id="listone">
				<ul className="classify-left" onClick={this.click.bind(this)}>
					
					<NavLink to="/list/listone/l1" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">全部商家</span>
							<span className="num">2166</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l2" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">美食</span>
							<span className="num">2350</span>
						</li>
					</NavLink>					
					<NavLink to="/list/listone/l3" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">快餐便当</span>
							<span className="num">2341</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l4" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">特色菜系</span>
							<span className="num">319</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l5" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">异国料理</span>
							<span className="num">160</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l6" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">小吃夜宵</span>
							<span className="num">450</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l7" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">甜品饮品</span>
							<span className="num">392</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l8" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">果蔬生鲜</span>
							<span className="num">124</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l9" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">鲜花蛋糕</span>
							<span className="num">216</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l10" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">商店超市</span>
							<span className="num">165</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l11" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">早餐</span>
							<span className="num">571</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l12" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">午餐</span>
							<span className="num">878</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l13" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">下午茶</span>
							<span className="num">828</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l14" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">晚餐</span>
							<span className="num">927</span>
						</li>
					</NavLink>
					<NavLink to="/list/listone/l15" activeClassName="active-color">
						<li className="classify-left-li" >								
							<span className="all-store">夜宵</span>
							<span className="num">806</span>
						</li>
					</NavLink>
					

				</ul>
				<ul className="classify-right">

					{this.props.children}
				</ul>
			</div>
		)
	}

	click(){
		this.setState({
			isClicked:!this.state.isClicked
			
		})
		
	}



}

export default ListOne;