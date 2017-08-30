import React,{Component} from "react";
import "./index.scss";

class ListTwo extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="listone">
				<li className="sort">
					<span className="ic"></span>
					<span className="char">智能排序</span>
				</li>
				<li className="sort">
					<span className="ic"></span>
					<span className="char">距离最近</span>
				</li>
				<li className="sort">
					<span className="ic"></span>
					<span className="char">销量最高</span>
				</li>
				<li className="sort">
					<span className="ic"></span>
					<span className="char">起送价最低</span>
				</li>
				<li className="sort">
					<span className="ic"></span>
					<span className="char">配送速度最快</span>
				</li>
				<li className="sort">
					<span className="ic"></span>
					<span className="char">评分最高</span>
				</li>

			</div>
		)
	}
}

export default ListTwo;