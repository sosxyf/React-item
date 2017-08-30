import React,{Component} from "react";
import "./index.scss";

class Order extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (
			<div id="pjy_order">
				<header>
					<span>返回</span>
					<b>发现</b>
				</header>
				<div id="pjy_orders">
					<ul>
						<li>
							<img className="orders_left" src="https://fuss10.elemecdn.com/f/dc/fc2de6ba2016ca8d95c5ecdd01e96jpeg.jpeg?imageMogr/format/webp/"/>
							<div className="orders_right">
								<p className="orders_business">何乐屋（数码店）<b> > </b></p>
								<span className="orders_data">2017-4-12</span>
								<span className="orders_time">10:54</span>
								<span className="orders_state">订单完成</span>
								<div className="orders_menu">
									<p>七彩鲜蔬韩国拌饭+紫菜蛋花汤</p>
									<b>￥23.1</b>
								</div>
							</div>
							<div className="clear"></div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Order;