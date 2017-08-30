import React,{Component} from "react";
import "./index.scss";

class Login extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="xy_login">
				<header>
					登录<span onClick={this.bindleClick.bind(this)}>密码登录</span>
				</header>
				<div id="input">
					<input type="text" className="tel" placeholder="手机号"/>
					<input type="text" className="vC" placeholder="验证码"/>
					<span>获取验证码</span>
				</div>
				<p>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且以代表您已<a href="javascript:;">同意用户服务协议</a></p>
				<button>登录</button>
				<a href="javascript:;" className="aboutUs">关于我们</a>
				{this.props.children}
			</div>

		)
	}
	bindleClick(){
		this.props.history.push(`/code`);
	}
}

export default Login;