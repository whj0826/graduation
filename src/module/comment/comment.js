import React, {Fragment, useRef, useEffect, useState} from "react";
import {
    Button,
    Container,
    Stack,
    TextField
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

import './comment.css';
import CommentContent from "./commentContent";


const imageUrl = 'http://localhost:9090/';  // 访问图片的根路径

/*
* bug
* 1.无法上传同一个文件
* 2.上传超过5个文件时，上传组件会溢出
* */

export default function Comment() {
    const text = useRef(null); // 评论文字内容
    /*
    格式json
        [ {
            url: imageUrl + '1663749340491-376129531.jpg',
            text: '1663749340491-376129531.jpg'
        } ]
    * */
    const [showFile, setShowFile] = useState([]); // 文件链接数组

    let fileList = []; // 对已经上传的文件放在数组中

    // 发布
    function release() {
        console.log(text.current.value) // 评论文字内容
        for (let i = 0; i < showFile.length; i++) {
            fileList[i] = showFile[i].url;  // 获取showFile的ulr存放到新的数组中
        }
        console.log(fileList);
    }

    // 上传文件
    function upload() {
        const fileNode = document.getElementById('upload').files[0]; // 获取进行上传文件的节点的节点信息
        console.log(fileNode);
        const formData = new FormData();
        formData.append("file", fileNode);
        axios.post('http://localhost:3000/upload', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(res => {
            if (res.data!='error'){
                showFile.push({url: imageUrl + res.data, text: res.data}) //res.data是后台返回过来的文件名
                setShowFile([...showFile]); // 更新showFile的state
            }
        }).catch(err => {
            console.error(err)
        })
    }

    // 删除文件
    function del(e) {
        const delFile = e.target.title;
        axios.get('http://localhost:3000/del?filename=' + delFile)
            .then(res => {
                // 如果后台成功删除了指定文件名的文件，则返回ok，否则返回error
                if (res.data=='ok'){
                    // 找到数组中指定文件名的下标，然后删除
                    for (let i = 0 ; i<showFile.length ; i++){
                        if (showFile[i].text == delFile){
                            showFile.splice(i,1);  // arrayName.splice(index,deleteCount)
                            break;
                        }
                    }
                    setShowFile([...showFile]);  // 更新state
                    console.log('删除成功');
                }else{
                    console.log('删除失败');
                }
            }).catch(err => {
                console.error(err);
            })
    }

    return (
        <Fragment>
            <Container maxWidth="sm">
                <div>
                    <Stack spacing={2}>
                        {/* 输入评论内容 */}
                        <div className="one">
                            <Stack direction="column">
                                <TextField
                                    label="评论"
                                    fullWidth={true}
                                    multiline={true}
                                    inputRef={text}
                                />
                                {/* 上传图片 */}
                                <div className="upload">
                                    <Stack direction="row">
                                        {showFile.map((item, index) =>
                                            <div key={index} className="img-list">
                                                <img alt={item.text} src={item.url} className="img"/>
                                                <Button variant="outlined" title={item.text}
                                                        className="but-del" component="div" onClick={del}
                                                >删除</Button>
                                            </div>
                                        )}
                                        <Button variant="outlined" startIcon={<AddIcon/>} component="label">上传
                                            <input id="upload" hidden type="file" name="file" onChange={upload}/>
                                        </Button>
                                    </Stack>
                                </div>
                                {/* 提交按键 */}
                                <Button variant="outlined" onClick={release}>发布</Button>
                            </Stack>
                        </div>
                        {/*输出（展示）评论内容*/}
                        <div className="two">
                            <Container maxWidth="sm">
                                <CommentContent/>
                            </Container>
                        </div>
                    </Stack>
                </div>
            </Container>
        </Fragment>
    );
}