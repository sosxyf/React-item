/*
路由配置模块
 */
import React from "react";
import App from "./Components/App/index";
import Msite from "./Components/Msite/index";
import Discover from "./Components/Discover/index";
import Login from "./Components/Login/index";
import LoginCode from "./Components/LoginCode/index";
import List from "./Components/List/index";
import ListOne from "./Components/ListOne/index";
import ListTwo from "./Components/ListTwo/index";
import ListThree from "./Components/ListThree/index";
import Order from "./Components/Order/index";
import Detail from "./Components/Detail/index";
import Profile from "./Components/Profile/index";
import Goods from "./Components/Goods/index";
import Commentary from "./Components/Detail/Commentary/index";
import Business from "./Components/Detail/Business/index";

import L1 from "./Components/ListSecend/L1/index";
import L2 from "./Components/ListSecend/L2/index";
import L3 from "./Components/ListSecend/L3/index";
import L4 from "./Components/ListSecend/L4/index";
import L5 from "./Components/ListSecend/L5/index";
import L6 from "./Components/ListSecend/L6/index";
import L7 from "./Components/ListSecend/L7/index";
import L8 from "./Components/ListSecend/L8/index";
import L9 from "./Components/ListSecend/L9/index";
import L10 from "./Components/ListSecend/L10/index";
import L11 from "./Components/ListSecend/L11/index";
import L12 from "./Components/ListSecend/L12/index";
import L13 from "./Components/ListSecend/L13/index";
import L14 from "./Components/ListSecend/L14/index";
import L15 from "./Components/ListSecend/L15/index";


import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect //重定向组件
} from "react-router-dom"

const router = (
	<Router>
		<App> {/*自己写的根组件*/}
			
			<Switch>{/*只匹配第一个符合条件的孩子组件*/}
				<Route path="/msite" component={Msite}/>
				<Route path="/discover" component={Discover}/>
				<Route path="/order" component={Order}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/code" component={LoginCode}/>
				<Route path="/list" render={()=>
					<List>
						<Switch>
							<Route path="/list/listone" render={()=>
								<ListOne>
									<Switch>
										<Route path="/list/listone/l1" component={L1}/>
										<Route path="/list/listone/l2" component={L2}/>
										<Route path="/list/listone/l3" component={L3}/>
										<Route path="/list/listone/l4" component={L4}/>
										<Route path="/list/listone/l5" component={L5}/>
										<Route path="/list/listone/l6" component={L6}/>
										<Route path="/list/listone/l7" component={L7}/>
										<Route path="/list/listone/l8" component={L8}/>
										<Route path="/list/listone/l9" component={L9}/>
										<Route path="/list/listone/l10" component={L10}/>
										<Route path="/list/listone/l11" component={L11}/>
										<Route path="/list/listone/l12" component={L12}/>
										<Route path="/list/listone/l13" component={L13}/>
										<Route path="/list/listone/l14" component={L14}/>
										<Route path="/list/listone/l15" component={L15}/>
										<Redirect from="/list/listone" to="/list/listone"/>
									</Switch>
								</ListOne>
							}/>
							<Route path="/list/listtwo" component={ListTwo}/>
							<Route path="/list/listthree" component={ListThree}/>
							<Redirect from="/list" to="/list"/>
						</Switch>
					</List>
				}/>
				
				<Route path="/login" component={Login}/>
				<Route path="/detail/:id" render={(props)=>
					<Detail {...props}>
						<Switch>
							<Route path="/detail/:id/goods" component={Goods}/>
							<Route path="/detail/:id/commentary" component={Commentary}/>
							<Route path="/detail/:id/business" component={Business}/>
							
						</Switch>
					</Detail>
				}/>
				<Redirect from="/" to="/msite"/>
			</Switch>
		</App>
	</Router>
)
/*最外层的包装模块*/
export default router;


