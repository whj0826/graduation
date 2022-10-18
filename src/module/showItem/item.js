import {Paper} from "@mui/material";
import React from "react";
import MySwiper from "../../common/components/swiper";

export default function Item(){
    return(
        <Paper elevation={3} sx={{width:'80%',height:'80%'}}>
            <MySwiper/>
        </Paper>
    );
}