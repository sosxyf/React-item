import React,{Component} from "react";
import "./index.scss";

class ListThree extends Component{
	constructor(props) {
		super(props);
		this.state = {
			nature:['1','2','3','4','5','6']
		}
		
	}


	render() {
		return (

			<div id="listone">
				<div className="listone-top">
					<p>配送方式</p>
					<div className="send">蜂鸟专送</div>
				</div>
				<div className="listone-center">
					<p>商家属性(可多选)</p>
					<ul className="nature">
						{
							this.state.nature.map((item,index)=>
								<li className="nature-li" key={new Date().getTime()+index}>
									<span className="nature-char">品</span>
									<span className="nature-brand">品牌商家</span>
								</li>
							)
						}
					</ul>
				</div>
				<div className="listone-bottom">
					<a href="#" className="empty">清空</a>
					<a href="#" className="ensure">确定</a>
				</div>
			</div>
		)
	}
}

export default ListThree;