import {Fragment, useEffect, useRef, useState} from "react";
import {Button, Checkbox, Grid, Stack, Divider, Container, Box} from "@mui/material";
import {motion} from "framer-motion"
import Center from "../../common/components/center";
import './shoppingCart.css';

/*
数据格式：
    [{
        id:'',
        image:'',
        name:'',
        number:'',
        price:'',
        selected:'', //选中1 or true，不选中 0 or false
    }]
<576px	xs
≥576px	sm
≥768px	md
≥992px	lg
≥1200px	xl
≥1400px xxl
* */

/*
React.createElement(
  type,
  [props],
  [...children]
)
* */

let data = [
    {
        id: '001',
        image: 'http://localhost:9090/',
        name: '散文001',
        maxNumber: 12,
        price: '130.00',
        select: false
    },
    {
        id: '002',
        image: 'http://localhost:9090/',
        name: '散文002',
        maxNumber: 5,
        price: '120.00',
        select: false
    }, {
        id: '003',
        image: 'http://localhost:9090/',
        name: '散文003',
        maxNumber: 6,
        price: '110.00',
        select: false
    }
]

export default function ShoppingCart() {
    // const [count, setCount] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    // 表头中的每个格子所占的大小数组 [复选框,商品信息,单价,数量,金额,操作]
    const [headGridSize, setHeadGridSize] = useState([]);
    const [headContent, setHeadContent] = useState([]);
    const [items, setItems] = useState(data);

    let initBuyOperation = [];
    for (let i = 0; i < items.length; i++) {
        // 物品id，购物数量，物品可以购买的最大数量，是否购买
        initBuyOperation.push({id: items[i].id, number: 1, maxNumber: items[i].maxNumber, isBuy: false})
    }
    // 记录用户的购买操作信息
    const [buyOperation, setBuyOperation] = useState(initBuyOperation);

    useEffect(() => {
        reportWindowSize();
    }, [])

    /*
        表头
        当宽度小于768时，改变每个格子所占的大小 改变为[1,4,3,4] 对应的标题为[全选,商品信息,全额,数量] 通过滑动商品进行删除操作
        当宽度小于576时........................[2,5,5].............[全选,图片2+内容3,金额]
        表内容
        改变为[1,1,2,4,4] 对应的标题为[全选,图片,内容,全额,数量] 通过滑动商品进行删除操作
    * */
    // 每个商品中的每个格子所占的大小数组 [复选框,图片,内容,单价,数量,金额,操作]
    const [itemGridSize, setItemGridSize] = useState([1, 1, 2, 1, 2, 2, 2, 2]);

    // https://developer.mozilla.org/en-US/docs/web/api/window/resize_event
    // 动态获取当前屏幕的宽度
    function reportWindowSize() {
        setWidth(window.innerWidth);
        if (width <= 768 && width >= 576) {
            setHeadGridSize([1, 4, 3, 4]);
            setHeadContent(["商品信息", "金额", "数量"]);
        } else if (width <= 576) {
            setHeadGridSize([2, 5, 5]);
            setHeadContent(["商品信息", "金额"]);
        } else {
            setHeadGridSize([1, 3, 2, 2, 2, 2, 2])
            setHeadContent(["商品信息", "单价", "数量", "金额", "操作"]);
        }
        console.log('改变-' + width);
    }

    window.onresize = reportWindowSize;

    function del(id) {
        console.log(id)
    }
    function restore(id) {
        console.log(id)
    }

    function checkHandle(event) {
        console.log(event.target.checked, event.target.value)
    }

    function Count(props) {
        console.log('count')
        const {index} = props;
        // 计数处理，防止用户误操作
        const countHandle = (operation) => {
            let count = buyOperation[index];
            const max = count.maxNumber;  // 最大值
            let buyNum = count.number;  //购买的数量
            if (operation === 'add') {  // 加1
                if (max == buyNum) {  // 当数量加到最大值时，就无法加法运算
                    alert('该商品的数量有限');
                } else {  // 没有加到最大值时，可以加一
                    buyNum = buyNum + 1;
                }
            } else {  // 减1
                if (buyNum <= 1) { // 不允许数量减到0
                    buyNum = 1;
                } else {  // 没有减到0时，可以继续减一
                    buyNum = buyNum - 1;
                }
            }
            count.number = buyNum;
            buyOperation[index] = count;
            setBuyOperation([...buyOperation]);
        }
        return (
            <Fragment>
                <Stack direction={"row"} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div>
                        {/* 减法 */}
                        <button onClick={() => countHandle('sub')}
                                className={"sc-count-but"}>-
                        </button>
                        <input value={buyOperation[index].number} className={"sc-count-input"}/>
                        {/* 加法 */}
                        <button onClick={() => countHandle('add')}
                                className={"sc-count-but"}>+
                        </button>
                    </div>
                </Stack>
            </Fragment>
        )
    }

    function Head() {
        console.log('head')
        return (
            <Fragment>
                <Grid container>
                    {/* 选择框 */}
                    <Grid item xs={headGridSize[0]}>
                        <Center>
                            <Checkbox value={'all'} color="success" onChange={checkHandle}/>
                            {width > 576 && <Center>全选</Center>}
                        </Center>
                    </Grid>
                    {
                        headContent.map((item, index) => (
                            headGridSize.length > index + 1 &&
                            <Grid item xs={headGridSize[index + 1]} key={index}>
                                <Center>{item}</Center>
                            </Grid>
                        ))
                    }
                </Grid>
            </Fragment>
        )
    }

    function DynamicItem(props) {
        console.log('DynamicItem')
        const {index} = props;
        let item = items[index]; //根据索引获取一个物品的信息
        // 选择框
        const checkbox = <Checkbox color="success" value={item.id} onChange={checkHandle}/>;
        // 图片
        const img = <img src={item.image} alt={"error"} width={'115%'} height={92}/>;
        // 商品名字
        const name = <div style={{padding: 10}}>{item.name}</div>;
        // 单价
        const price = <div>{item.price}</div>;
        // 计数
        const count = <Count index={index}/>;
        // 删除按钮
        const delBut = <Button className={"sc-del-but"} variant={"outlined"}
                               onClick={() => del(item.id)}>删除</Button>;
        // 价格 + 计数组件
        const total = <Stack direction={"column"}>{price}{count}</Stack>
        // 小于768px且大于576px
        const sm = [1, 2, 2, 3, 4];
        const smList = [checkbox, img, name, price, count];
        // 小于576px
        const xs = [2, 2, 3, 5];
        const xsList = [checkbox, img, name, total];
        // 大于768px
        const mg = [1, 1, 2, 2, 2, 2, 2];
        const mgList = [checkbox, img, name, price, count, price, delBut];
        if (width <= 768 && width >= 576) {
            return (
                <Fragment>
                    {sm.map((item, index) => (
                        <Grid item xs={item} key={index}>
                            <Center>
                                {smList[index]}
                            </Center>
                        </Grid>
                    ))}
                </Fragment>
            )
        } else if (width <= 576) {
            return (
                <Fragment>
                    {xs.map((item, index) => (
                        <Grid item xs={item} key={index}>
                            <Center>
                                {xsList[index]}
                            </Center>
                        </Grid>
                    ))}
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    {mg.map((item, index) => (
                        <Grid item xs={item} key={index}>
                            <Center>
                                {mgList[index]}
                            </Center>
                        </Grid>
                    ))}
                </Fragment>
            )
        }
    }

    function Item(props) {
        console.log('item')
        const {index} = props;
        return (
            <Fragment>
                <div style={{zIndex: 100, backgroundColor: 'white', padding: 5}}>
                    <div>
                        <Divider textAlign="left">商店名称</Divider>
                    </div>
                    <Box>
                        <Grid container>
                            <DynamicItem index={index}/>
                        </Grid>
                    </Box>
                </div>
            </Fragment>
        )
    }

    function DragItem(props) {
        console.log('DragItem')
        const {index} = props;
        const [hidden,setHidden] = useState(-1);
        return (
            <>
                <motion.div
                    drag={"x"}
                    dragConstraints={{
                        left: -100,
                        right: 0
                    }}
                    onDragEnd={(event,info)=>{console.log(event,info);
                        if (hidden===1){
                            setHidden(-1);
                        }else {
                            setHidden(1)
                        }
                    }}
                >
                    <Item index={index}/>
                </motion.div>
                <div className={"sc-hidden"} style={{zIndex:`${hidden}`}}>
                    <Stack direction={'column'}>
                        {/*<div className={'sc-hidden-but sc-hidden-but-restore'} onClick={()=> console.log(items[index].id)}>复原</div>*/}
                        <div className={'sc-hidden-but sc-hidden-but-del'} onClick={()=> console.log(items[index].id)}>删除</div>
                    </Stack>
                </div>
            </>
        )
    }

    return (
        <Fragment>
            <Container>
                <Stack direction={"column"} spacing={2}>
                    <div>
                        <Head/>
                    </div>
                    {items.map((item, index) => (
                        <div key={index} >
                            <DragItem index={index}/>
                        </div>
                    ))}
                </Stack>
            </Container>
        </Fragment>
    )
}