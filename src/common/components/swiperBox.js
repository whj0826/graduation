import {useState} from "react";
import {useEffect} from "react";

/*
* props: showNum,children,width,height,butClassName,showScroll
* 注意：子元素一定要设置宽度和高度
* */
export default function SwiperBox(props){
    const {showNum,children,width,height,butClassName,showScroll} = props;
    const childrenSize = children.length; //获取子元素的个数
    // display:none;可以隐藏元素 display:block;是div的默认属性
    const [hidden,setHidden] = useState([]) // 只保存none和block
    // const boxWidth = width-12;
    // console.log(boxWidth)

    useEffect(()=>{
        // 初始化hidden
        let hide = []
        for (let i = 0 ; i<childrenSize ; i++){
            if (i<showNum){
                hide.push('block');
            }else {
                hide.push('none');
            }
        }
        setHidden(hide);
        // widthHandle('100rpx');
    },[])

    function up() {
        // console.log('上')
        let hide = hidden;
        if (hide[0]!=='block'){
            for (let i = 0 ; i<hide.length ; i++){
                if (hide[i]==='block'){
                    hide[i-1]='block';
                    hide[i+showNum-1]='none';
                    break;
                }
            }
            setHidden([...hide]);
            // console.log(hide)
        }
    }
    function next(){
        // console.log('下')
        let hide = hidden;
        if (hide[hide.length-1]!=='block'){
            for (let i = 0 ; i<hide.length ; i++){
                if (hide[i]==='block'){
                    hide[i]='none';
                    hide[i+showNum] = 'block';
                    break;
                }
            }
            setHidden([...hide]);
            // console.log(hide)
        }
    }
    function scroll(e) {
        // console.log(e.target)
        let scrollSize = e.target.scrollTop;
        let scroollBottom = children[0].props.style.height*showNum-e.target.clientHeight;

        if (scrollSize===0){
            console.log('up');
            console.log(scrollSize,scroollBottom)
            // up()
            antiShake(up(),500);
        }else if (scroollBottom-1===scrollSize||scroollBottom+1===scrollSize){
            console.log('next')
            console.log(scrollSize,scroollBottom)
            // next()
            antiShake(next(),500);
        }
    }
    function widthHandle(width){
        let j = 0; // 首个字符出现的索引
        let newWidth = 0; // 记录新的宽度
        // console.log(width.length)
        for (let i = 0 ;i< width.length; i++){
            if (width.charCodeAt(i)>=48&&width.charCodeAt(i)<=57){
            }else {
               j++;
            }
        }
        if (showScroll!=true){
            return width;
        }
        // 显示部分滑动条
        newWidth = Number(width.slice(0,width.length-j))-12;
        let temp = width.slice(width.length-j,width.length); //px
        return  newWidth+temp;
    }
    function hightHandle() {
        // console.log(children[0].props.style.height);
        if (showScroll!=true){
            return children[0].props.style.height*showNum;;
        }
        // 有滑动条时children[0].props.style.height*showNum - children[0].props.style.height/2 + 'px';
        return children[0].props.style.height*showNum - children[0].props.style.height/2 + 'px';;
    }
    // Anti shake 防抖
    function antiShake(func,waitTime) {
        let myTime = null;
        return function () {
            if (myTime !== null){
                clearTimeout(myTime);
            }
            myTime = setTimeout(func,waitTime);
        }
    }
    return(
        <div style={{width:`${widthHandle(width)}`,overflow:"hidden"}}>
            <div style={{width:`${width}`,height:`${height}`,margin:0,padding:0
            }}>
                <button onClick={up}
                        className={butClassName}
                        style={{
                            width:`${showScroll!=true?'100%':'80%'}`,
                            backgroundColor:'white',
                        }}>
                    <svg t="1665756106912" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         width="100%" height="30">
                        <path
                            d="M966.4 668.8l-435.2-432c-9.6-9.6-25.6-9.6-35.2 0l-441.6 432c-9.6 9.6-9.6 25.6 0 35.2 9.6 9.6 25.6 9.6 35.2 0l425.6-416 416 416c9.6 9.6 25.6 9.6 35.2 0S976 678.4 966.4 668.8z"
                            p-id="2522" fill="#707070"></path>
                    </svg>
                </button>
                <div className={'scroll'}
                     style={{overflowY:`${showScroll!=true?'visible':'scroll'}`,height:`${hightHandle()}`,
                         padding:5}}
                     onScroll={scroll}>
                    {
                        hidden.map((item,index)=>(
                            <div key={index} style={{display:`${hidden[index]}`}} >
                                {children[index]}
                            </div>
                        ))
                    }
                </div>
                <button onClick={next}
                        className={butClassName}
                        style={{
                            width:`${showScroll!=true?'100%':'80%'}`,
                            backgroundColor:'white',
                        }}>
                    <svg t="1665756214730" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         width="100%" height="30">
                        <path
                            d="M966.4 323.2c-9.6-9.6-25.6-9.6-35.2 0l-416 416-425.6-416c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l441.6 432c9.6 9.6 25.6 9.6 35.2 0l435.2-432C976 345.6 976 332.8 966.4 323.2z"
                            p-id="2770" fill="#707070"></path>
                    </svg>
                </button>
            </div>
        </div>

    )
}