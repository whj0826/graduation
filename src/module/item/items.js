import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import './item.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {useState} from "react";
import {useLocation} from "react-router-dom";
const Item = React.lazy(()=>import('./item'));

// 多个物品的组件
export default function Items(props) {
    // data格式： [{id:'',image:'',price:'',number:'',name:''},...]
    // const {data} = props;
    const location = useLocation();
    const data = location.state;
    // 获取当前屏幕大小
    const [width, setWidth] = useState(window.innerWidth);
    // 设置GridSize
    const [gridSize,setGridSize] = useState(0);
    /*
   *           <576px	xs   2个商品  gridSize 6
               ≥576px	sm   2个     gs 6
               ≥768px	md   3个     gs 4
               ≥992px	lg   4个     gs 3
               ≥1200px	xl   4个     gs 3
               ≥1400px xxl
   * */
    useEffect(()=>{
        getWindowSize();
    },[])

    function getWindowSize() {
        setWidth(window.innerWidth);
        if (width < 768 ) {
            setGridSize(6);
        } else if (width >= 768 && width < 992) {
            setGridSize(4);
        } else if (width >= 992) {
            setGridSize(3);
        }
        console.log('改变-' + width + ' ' + gridSize);
    }
    window.onresize = getWindowSize;

    return (
        <Grid container spacing={3}>
            {
                data.map((item, index) => (
                    <React.Suspense fallback={<div>...</div>}>
                        <Item key={index} content={item} gs={gridSize}/>
                    </React.Suspense>
                ))
            }

        </Grid>
    )
}

