import './test.css'
import SwiperBox from "../common/components/swiperBox";
import {Link, Outlet} from "react-router-dom";
export default function TransformTest(props){
    return(
        <div>
            <SwiperBox showNum={4} width={'100px'} hight={'120px'} butClassName={'a'}

            >
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>1</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>2</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>3</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>4</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>5</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>6</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>7</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>8</div>
                <div style={{border:'1px solid red',height:50,boxSizing:'border-box'}}>9</div>
            </SwiperBox>
            <Link to={'abc'} state={'abcdef'}>abc</Link>
            <Outlet/>
        </div>

    )
    // const {showSize} = props;
    // const [hidden,setHidden] = useState(['block','block','block','none','none','none','none','none'])
    // const [index,setIndex] = useState(0);
    //
    // function up() {
    //     let hide = hidden;
    //     for (let i = 0 ; i<hide.length ; i++){
    //         if (i===index){
    //             hide[i-1] = 'block';
    //             for (let j = i+1 ; j<=i-showSize ; j--){
    //                 hide[j] = 'none';
    //             }
    //             break;
    //         }
    //     }
    //     if (index-1!==-1){
    //         setIndex(index-1);
    //     }
    //     setHidden([...hide]);
    // }
    // function next(){
    //     let hide = hidden;
    //     for (let i = 0 ; i<hide.length ; i++){
    //         if (i === index){
    //             hide[i] = 'none'
    //             for (let j = i+1 ; j<=i+showSize ; j++){
    //                 hide[j] = 'block'
    //             }
    //             break;
    //         }
    //     }
    //     if (index+1<hide.length-showSize){
    //         setIndex(index+1);
    //         console.log(index,hide.length);
    //     }
    //     setHidden([...hide]);
    // }
    //
    // return(
    //     <div style={{
    //         width:200,
    //         height:400,
    //         backgroundColor:'beige',
    //         position:'fixed'
    //     }}>
    //         <button onClick={up}>上</button>
    //         <div
    //             style={{
    //             width:200,
    //             height:303,
    //             overflow:'hidden',
    //         }}>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[0]}`}}>1</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[1]}`}}>2</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[2]}`}}>3</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[3]}`}}>4</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[4]}`}}>5</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[5]}`}}>6</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[6]}`}}>7</div>
    //             <div
    //                  style={{width:150,height:100,margin:3,border:'1px solid red',display:`${hidden[7]}`}}>8</div>
    //         </div>
    //         <button onClick={next}>下</button>
    //     </div>
    //)
}