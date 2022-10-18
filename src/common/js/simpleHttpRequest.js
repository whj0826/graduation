import axios from "axios";
export default function http(method,uri,data){
    if (method=='get'){
        axios({
            method:'get',
            uri:uri,
        })
            .then( res =>{
                return res
            })
            .catch(err=>{
                return err
            })
    }else if(method=='post'){
        axios({
            method:'post',
            uri:uri,
            data:data
        })
            .then( res =>{
                return res
            })
            .catch(err=>{
                return err
            })
    }else {
        return null;
    }
}