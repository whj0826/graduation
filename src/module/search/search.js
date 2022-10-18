import React,{Fragment} from 'react';
import {IconButton, Stack, TextField ,Button} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {motion} from "framer-motion"

import './search.css'
export default function Search(){
    return(
        <Fragment>
            <Stack direction={"row"} className="search-main">
                <TextField
                    id="outlined-number"
                    label="search"
                    type="text"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="outlined" >
                    <span>搜索</span>
                </Button>
            </Stack>
        </Fragment>
    )
}