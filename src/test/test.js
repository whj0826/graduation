import {useLocation, useParams} from "react-router-dom";

export default function Test(){
    let { id } = useParams();
    let value = useLocation();
    console.log(value.state)
    return(
        <div>{id}</div>
    )
}