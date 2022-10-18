import React, {Fragment, useRef, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Box, Button, Container, Stack} from "@mui/material";

import '../../../common/css/input.css'

export default function SignIn() {

    const name = useRef(null);
    const password = useRef(null);

    function show() {
        console.log(name.current.value+ ' ' + password.current.value);
    }

    return (
        <Fragment>
            <Container maxWidth="sm" className="root-div">
                <Box component="form">
                    <Stack spacing={2}>
                        <h2>登录</h2>
                        <TextField
                            label="名字"
                            required
                            inputRef={name}
                            size="small"
                        />
                        <TextField
                            label="Password"
                            type="password"
                            size="small"
                            autoComplete="current-password"
                            required
                            inputRef={password}
                        />

                            <Button variant="outlined" onClick={show}>提交</Button>

                    </Stack>
                </Box>
            </Container>
        </Fragment>
    )
}