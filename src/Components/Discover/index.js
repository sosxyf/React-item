import React,{Component} from "react";
import "./index.scss";

class Discover extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="pjy_find">
				<header>
					<span>返回</span>
					<b>发现</b>
				</header>
				<div className="pjy_top">
					<div className="pjy_left">
						<span>积分商城</span>
						<p>0元好物在这里!</p>
						<img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"/>
					</div>
					<div className="pjy_right">
						<div className="pjy_right_top">
							<span>美味爆料</span>
							<p>冰霜美食吃吃吃</p>
							<img src="https://fuss10.elemecdn.com/e/ff/3b9c4a4dfda1df548dc9274f6a7c1jpeg.jpeg?imageMogr/format/webp/"/>
						</div>
						<div className="pjy_right_bottom">
							<span>推荐有奖</span>
							<p>5元现金拿不停</p>
							<img src="https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/"/>
						</div>
					</div>
				</div>
				<img id="pjy_ban" src="https://fuss10.elemecdn.com/b/6d/656006edcd86033a1b32b23ddea37jpeg.jpeg?imageMogr/format/webp/"/>
				<div className="pjy_time">
					<div className="pjy_time_top">
						<h1>——<i></i>限时好礼——</h1>
					</div>
					<h2>小积分换豪礼</h2>
					<ul>
						<li>
							<h3>抽奖活动</h3>
							<img src="https://fuss10.elemecdn.com/0/53/47a80976e90c99f40b745cde5246fjpeg.jpeg?imageMogr/format/webp/"/>
							<p>iphone7 32G</p>
							<span>499积分</span>
							<b>￥4999元</b>
						</li>
						<li>
							<h3>0元换购</h3>
							<img src="https://fuss10.elemecdn.com/a/a2/206f0d7fa5af4b349b641fa35e730jpeg.jpeg?imageMogr/format/webp/"/>
							<p>7元饿了么红包</p>
							<span>3500积分</span>
							<b>￥7</b>
						</li>
						<li>
							<h3>0元抽奖</h3>
							<img src="https://fuss10.elemecdn.com/6/3c/342ebefe2207bcabd90efc9410130jpeg.jpeg?imageMogr/format/webp/"/>
							<p>0元转出单反拿来</p>
							<span>499积分</span>
						</li>
					</ul>
					<div className="clear"></div>
					<div className="more">
						查看更多 >
					</div>
				</div>
				<br/><br/><br/><br/><br/><br/>
			</div>
		)
	}
}

export default Discover;