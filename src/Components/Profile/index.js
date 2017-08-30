import React,{Component} from "react";
import "./index.scss";

class Profile extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="xy_profile">
				<header>我的</header>
				<div className="profile-top" onClick={this.bindleClick.bind(this)}>
					<div className="left content-l"></div>
					<div className="content-m left">
						<h2>登录/注册</h2>
						<h3><img src="./src/assets/images/mobile.png"/>登陆后享受更多特权</h3>
					</div>
					<div className="right">></div>
				</div>
				<div className="choice">
					<div className="left">
					<div className="button"></div>
					<p>优惠</p>
					</div>
					<div className="right">
					<div className="button"></div>
					<p>积分</p>
					</div>
				</div>
				<div className="profile-middle">
					<ul>
					<li><span className="left"></span><p className="left">我的订单<span className="right">></span></p></li>
					<li><span className="left"></span><p className="left">积分商城<span className="right">></span></p></li>
					<li><span className="left"></span><p className="left">饿了吗会员卡<span className="right">></span></p></li>
					</ul>
				</div>
				<div className="profile-bottom">
					<ul>
					<li><span className="left"></span><p className="left">服务中心<span className="right">></span></p></li>
					<li><span className="left"></span><p className="left">下载饿了吗APP<span className="right">></span></p></li>
					</ul>
				</div>
			</div>
		)
	}
	bindleClick(){
		this.props.history.push(`/login`);
	}
}

export default Profile;