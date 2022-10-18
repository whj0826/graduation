import React, {Fragment} from "react";
import {Box, Button, Grid, Stack} from "@mui/material";
import Modal from '@mui/joy/Modal';
const ShowItem = React.lazy(()=>import('./showItem'));
// 单个物品的组件
export default function Item(props) {
    // 是否开启蒙版
    const [open, setOpen] = React.useState(false);

    // 接收的格式为 {id:'',image:'',price:'',number:'',name:''},
    const {content,gs} = props;

    function addToCart(id) {
        console.log('加入购物车', id);
    }

    return (
        <Fragment>
            <Grid item xs={gs}>
                <Box
                    onDoubleClick={() => setOpen(true)}
                >
                    <Stack direction="column" className={"item-content"}>
                        {/* 图片 */}
                        <div>
                            <img className="item-img" src={content.image}/>
                        </div>
                        {/* 商品名字 */}
                        {/* class:text-muted是bootstrap中的字体样式 */}
                        <div className="item-title text-muted">{content.name}</div>
                        {/* 价格 + 操作 */}
                        <div className="item-other">
                            {/* 价格 */}
                            <div className="item-price">￥{content.price}</div>
                            {/* 加入购物车 */}
                            <Button className="item-but" variant="contained" size="small"
                                    onClick={() => addToCart(content.id)}  // 单击可加入购物车
                            >加入购物车</Button>
                        </div>
                    </Stack>
                </Box>
            </Grid>
            {/* 蒙版 */}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <React.Suspense fallback={<div>加载中...</div>}>
                    <ShowItem content={content}/>
                </React.Suspense>
            </Modal>
        </Fragment>
    );
}