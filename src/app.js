import {Link} from 'react-router-dom'

export default function App(){
    return(
        <div>
            <h1>组件测试阶段</h1>
            <Link to="signIn">登录</Link>
            <br/>
            <Link to="register">注册</Link>
            <br/>
            <Link to="forgetPassword">忘记密码</Link>
            <br/>
            <Link to="comment">评论</Link>
            <br/>
            <Link to="top">顶部</Link>
            <br/>
            <Link to="search">搜索</Link>
            <br/>
            <Link to="list">列表</Link>
                <br/>
                <Link to="shoppingCart">购物车</Link>
            {/*<br/>*/}
            {/*<Link to="item">卡片</Link>*/}
            <br/>
            <Link to={"baiduMap"}>百度地图</Link>
            <br/>
            <Link to={"tf"}>tf</Link>
            <br/>
            <Link to={'showItem'}>show</Link>
            <br/>
            <Link to={'order'}>订单</Link>
        </div>
    )
}