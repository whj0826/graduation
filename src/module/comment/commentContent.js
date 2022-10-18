import {Avatar, Stack} from "@mui/material";
import React, {Fragment} from "react";
const data2 = {
    id: '123456',
    name: '小红',
    icon: '',
    date: new Date(),
    images: [],
    text: '123456花园路世界历史',
    children: []
}
const data3 = {
    id: '001122',
    name: '小萨',
    icon: '',
    date: '时间',
    images: [],
    text: '雷克萨饭店经理',
    children: []
}
const content = [{
    id: 'abc123',
    name: '小明',
    icon: '',
    date: '时间',
    images: ['http://localhost:9090/1663833088230-12819617.jpg','http://localhost:9090/1663833119785-87430105.jpg'],
    text: '哈哈哈哈啦啦啦啦',
    children: [data2, data3]
},
    {
        id: '123456',
        name: '小红',
        icon: '',
        date: '时间',
        images: [],
        text: '123456花园路世界历史',
        children: []
    }
]
// 头像 + 用户名
function Content1(props) {
    const icon = props.icon;
    const name = props.name;
    return(
        <Fragment>
            <Stack direction="row" sx={{margin:1}}>
                {/*头像 <Avatat/> 默认大小为40px*/}
                { icon=='' ? <Avatar>o</Avatar> : <Avatar src={icon}/> }
                {/*用户名*/}
                <div style={{margin:10}}>{name}</div>
            </Stack>
        </Fragment>
    )
}
// 评论内容 + 评论图片
function Content2(props) {
    const text = props.text;
    const images = props.images;
    return(
        <Fragment>
            <div style={{margin:5}}>
            {/*评论内容*/}
            <span>{text}</span>
            {/*图片*/}
            {images.length != 0 &&
                <Fragment>
                    <Stack direction="row">
                        {images.map((item,index)=>(
                            <div key={index} style={{margin:5}}>
                                <img alt={item} src={item} style=
                                    {{ width:80,height:80 }}/>
                            </div>
                        ))}
                    </Stack>
                </Fragment>
            }
            </div>
        </Fragment>
    )
}
export default function CommentContent() {
    return (
        <Fragment>
            <Stack>
                {content.map((item) => (
                        <div key={item.id}>
                            {/*头像+用户名*/}
                            <div className="content-1">
                               <Content1 name={item.name} icon={item.icon}/>
                            </div>
                            {/*评论内容：文字+图片*/}
                            <div className="content-2">
                                <Content2 text={item.text} images={item.images}/>
                            </div>
                            {/*底部信息*/}
                            <div className="content-3">
                                <span>{item.date}</span>
                            </div>
                        </div>
                    )
                )}
            </Stack>
        </Fragment>
    )
}