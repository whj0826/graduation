import React, {Fragment,  useState} from 'react';
import {Box, Button, Container, Grid, TextField} from "@mui/material";

import '../../../common/css/input.css'

export default function ForgotPassword(){
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [phone,setPhone] = useState('');
    const [phoneCode,setPhoneCode] = useState('');

    const handleChangePassword1 = (event) => {
        setPassword1(event.target.value);
    };
    const handleChangePassword2 = (event) => {
        setPassword2(event.target.value);
    };
    const handleChangePhone = (event) =>{
        setPhone(event.target.value);
    };
    const handleChangePhoneCode = (event) => {
        setPhoneCode(event.target.value);
    };

    function show() {
        console.log( password1 + ' '+ password2);
    }
    return(
        <Fragment>
            <Container maxWidth="sm" className="root-div">
                <Box component="form">
                    <h2>找回密码</h2>
                    <Grid container rowSpacing={1} alignItems="center">
                        <Grid item xs={12}>
                            <TextField
                                label="设置新密码"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                                required
                                size="small"
                                value={password1}
                                onChange={handleChangePassword1}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="再次输入新密码"
                                type="password"
                                fullWidth
                                autoComplete="current-password"
                                required
                                size="small"
                                value={password2}
                                onChange={handleChangePassword2}
                            />
                        </Grid>
                        <Grid item  xs={12}>
                            <TextField
                                label="手机号码"
                                required
                                fullWidth
                                size="small"
                                value={phone}
                                onChange={handleChangePhone}
                            />
                        </Grid>

                        <Grid item  xs={6}>
                            <TextField
                                label="手机验证码"
                                required
                                size="small"
                                value={phoneCode}
                                onChange={handleChangePhoneCode}
                            />
                        </Grid>
                        <Grid item  xs={6}>
                                <Button variant="outlined" className="but-code">获取验证码</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={show}>提交</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}