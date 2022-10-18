import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './list.css'
import {Container, Grid, Stack} from "@mui/material";
import SwiperBox from "../../common/components/swiperBox";
import {Link, Outlet} from "react-router-dom";
import Center from "../../common/components/center";

// import Items from "../item/item";
const Items = React.lazy(()=>import('../item/items'));

/*
数据格式
[
{
    type:'水果',data:[
        {id:'',image:'',price:'',number:'',name:''},
        {id:'',image:'',price:'',number:'',name:''}
        ]
},{
    type:'零食',data:[
        {id:'',image:'',price:'',number:'',name:''},
        {id:'',image:'',price:'',number:'',name:''}
        ]
}...]
* */
let list = [
    {
        type: '水果', data: [
            {id: '0011', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '0022', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '0013', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '0024', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '0015', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00261', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00112', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00222', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00132', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00242', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00152', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00262', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00110', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00220', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00130', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00240', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00150', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002610', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001120', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002220', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001320', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002420', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001520', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002620', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    }, {
        type: '零食', data: [
            {id: '0037', image: 'http://localhost:9090/', price: '13', number: '1', name: '零食零食'},
            {id: '0048', image: 'http://localhost:9090/', price: '14', number: '1', name: '零食零食'},
            {id: '0019', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '0020', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001q', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002w', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    }, {
        type: '肉类', data: [
            {id: '003e', image: 'http://localhost:9090/', price: '13', number: '1', name: '零食零食'},
            {id: '004r', image: 'http://localhost:9090/', price: '14', number: '1', name: '零食零食'},
            {id: '001t', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002y', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001u', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002i', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    }, {
        type: '菜类', data: [
            {id: '003o', image: 'http://localhost:9090/', price: '13.00', number: '1', name: '零食零食'},
            {id: '004p', image: 'http://localhost:9090/', price: '14', number: '1', name: '零食零食'},
            {id: '001a', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002s', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001d', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002f', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    }, {
        type: '饮料', data: [
            {id: '003g', image: 'http://localhost:9090/', price: '13', number: '1', name: '零食零食'},
            {id: '004h', image: 'http://localhost:9090/', price: '14', number: '1', name: '零食零食'},
            {id: '001j', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002k', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001l', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002z', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    }, {
        type: '家具', data: [
            {id: '003x', image: 'http://localhost:9090/', price: '13', number: '1', name: '零食零食'},
            {id: '004c', image: 'http://localhost:9090/', price: '14', number: '1', name: '零食零食'},
            {id: '001v', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002b', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '001n', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '002m', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    },
    {
        type: '水果', data: [
            {id: '00111', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00222', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00133', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00244', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
            {id: '00155', image: 'http://localhost:9090/', price: '11', number: '1', name: '水果水果水果'},
            {id: '00266', image: 'http://localhost:9090/', price: '12', number: '1', name: '水果水果水果'},
        ]
    }]

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    console.log(props)
    return (
            <div
                role="tabpanel"
                hidden={value !== index}
            >
                {value === index && (
                    <Box>
                        <Typography className={"row"}>{children}</Typography>
                    </Box>
                )}
            </div>
    );
}

export default function List() {
    const [value, setValue] = React.useState(0); // 记录当前选择的选项的索引

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
        <Container maxWidth={'lg'}>
            <Grid container>
                <Grid item xs={2}>
                    <SwiperBox showNum={4} butClassName={'list-swiper-but'}
                               width={'100%'} hight={'100px'}
                    >
                        {
                            list.map((item,index)=>(
                                <div style={{height:50}} className={'list-list-box'}>
                                    <Center>
                                        <Link className={'list-link'} to={item.type} state={item.data}>{item.type}</Link>
                                    </Center>
                                </div>
                            ))
                        }
                    </SwiperBox>
                </Grid>
                <Grid item xs={10} sx={{padding:3}}>
                    {/*
                        设置刚打开时的默认显示的内容
                        const location = useLocation();
                        获取路径
                        如果路径为什么什么的话，
                        从后端获取数据，隐藏<Outlet/>
                     */}
                    <Outlet/>
                </Grid>
            </Grid>
        </Container>
        </>
            // <Box
            //     sx={{width:'85%'}}
            //     className={"list-box"}
            // >
            //     <Grid container>
            //         <Grid item xs={2}>
            //             <div className={"list-left"}>
            //                 <Tabs
            //                     orientation="vertical"
            //                     variant="scrollable"
            //                     value={value}
            //                     onChange={handleChange}
            //                     sx={{height:300}}
            //                     className={"list-tabs"}
            //                 >
            //                     {
            //                         list.map((item) => (
            //                             <Tab label={item.type}/>
            //                         ))
            //                     }
            //                 </Tabs>
            //             </div>
            //         </Grid>
            //         <Grid item xs={10} sx={{display:'flex',justifyContent:'center'}}>
            //             <div className={"list-right"}>
            //                 {
            //                     list.map((item, index) => (
            //                         <TabPanel value={value} index={index} key={index}>
            //                             <React.Suspense fallback={<div>加载中...</div>}>
            //                                 <Items data={item.data} />
            //                             </React.Suspense>
            //                         </TabPanel>
            //                     ))
            //                 }
            //             </div>
            //         </Grid>
            //     </Grid>
            // </Box>
    );
}