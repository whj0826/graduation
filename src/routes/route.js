import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from '../app';
import {CircularProgress} from "@mui/material";
import Test from "../test/test";
import Items from "../module/item/items";
const Register = React.lazy(() => import('../module/logon/register/register'));
const SignIn = React.lazy(() => import('../module/logon/signin/signin'));
const ForgetPassword = React.lazy(()=> import('../module/logon/forgotPassword/forgotPassword'));
const Comment = React.lazy(()=> import('../module/comment/comment'));
const Top = React.lazy(()=>import('../module/top/top'));
const Search = React.lazy(()=>import('../module/search/search'));
const List = React.lazy(()=>import('../module/list/list'));
const Item = React.lazy(()=>import('../module/item/items'));
const ShowItem = React.lazy(()=>import('../module/item/showItem'));
const ShoppingCart = React.lazy(()=>import('../module/shoppingCart/shoppingCart'));
const BaiduMap = React.lazy(()=>import('../module/baiduMap/baiduMap'));
const ShowItemA = React.lazy(()=>import('../module/showItem/showItem'));
const Tf = React.lazy(()=>import('../test/transformTest'));
const Order = React.lazy(()=>import('../module/order/order'))
export default function AppRoutes(){
    return(
        <BrowserRouter>
            <React.Suspense fallback={<CircularProgress />}>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="signIn" element={<SignIn/>}/>
                    <Route path="forgetPassword" element={<ForgetPassword/>}/>
                    <Route path="comment" element={<Comment/>}/>
                    <Route path="top" element={<Top/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="list" element={<List/>}>
                        <Route path={":id"} element={<Items/>}/>
                    </Route>
                    <Route path="item" element={<Item/>}/>
                    <Route path="show/:id" element={<ShowItem/>}/>
                    <Route path="shoppingCart" element={<ShoppingCart/>}/>
                    <Route path="baiduMap" element={<BaiduMap/>}/>
                    <Route path="showItem" element={<ShowItemA/>}/>
                    <Route path="order" element={<Order/>}/>
                    <Route path="*" element={
                        <div><p>出错了</p></div>
                    }/>
                    <Route path="tf" element={<Tf/>}>
                        <Route path=":id" element={<Test/>}/>
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}