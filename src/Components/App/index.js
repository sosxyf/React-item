import React,{Component} from "react";
import "./index.scss";

import {
	NavLink
} from "react-router-dom";
class App extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="app">
				<section>
					{this.props.children}
				</section>
				<footer className="fixed-wly">
					<ul className="left-wly">
						<li>
							<NavLink to="/miste" activeClassName="myselected">外卖</NavLink>
						</li>
						<li>
							<NavLink to="/discover" activeClassName="myselected">发现</NavLink>
						</li>
						<li>
							<NavLink to="/order" activeClassName="myselected">订单</NavLink>
						</li>						
						<li>
							<NavLink to="/profile" activeClassName="myselected">我的</NavLink>
						</li>
					</ul>
				</footer>
			</div>
		)
	}
}

export default App;