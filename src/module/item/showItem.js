import React,{Fragment} from "react";
import './showItem.css'
export default function ShowItem(props){
    const {content} = props;
    console.log(content)
    return(
        <Fragment>
            <div>{content.id}</div>
            <div>{content.name}</div>
        </Fragment>
    )
}