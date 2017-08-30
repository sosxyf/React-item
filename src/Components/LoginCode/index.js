import React,{Component} from "react";
import "./index.scss";
import axios from "axios";

class LoginCode extends Component{
	constructor(props) {
		super(props);
		this.state={
			cont:"",
			isShow:"none",
			warn:"idefault"
		}
		
	}


	render() {
		return (
			<div id="xy_logincode">
				<header>
					登录<span onClick={this.Switch.bind(this)}>短信登录</span>
				</header>
				<div id="input">
					<input type="text" className="tel" placeholder="手机号"/>
					<input type="password" className="vC" placeholder="密码"/>
				</div>
				<button onClick={this.handleClick.bind(this)}>登录</button>
				<a href="javascript:;" className="aboutUs">关于我们</a>
				<p className={this.state.warn} id="prompt">{this.state.cont}</p>
			</div>
		)
	}
	Switch(){
		this.props.history.push(`login`)
	}
	handleClick(){
		
		var username = document.getElementsByClassName('tel')[0].value;
		var password = document.getElementsByClassName('vC')[0].value;
		if(username===""){
			
			this.setState({
				warn:"unNull",
				cont:"用户名不能为空"
				});
			return;
		}
		if(password===""){
			this.setState({
				warn:"pwNull",
				cont:"密码不能为空"
				});
			return;
		}
		if(username!==''&&password!==''){
			axios.post('/api/login',{
				username:username,
				password:password
			}).then((res)=>{
				console.log(res.data);
			 	if(res.data.code==1){
					this.props.history.push(`/msite`);
					return;
					}
				if(res.data.code==0){
					this.setState({
						warn:"wrong",
						cont:res.data.msg
					})
				}
			}).catch((err)=>{
				console.log(err);
				// this.setState({
				// 	warn:"wrong",
				// 	cont:res.data.msg
				// })
			})
		}

	}

}

export default LoginCode;