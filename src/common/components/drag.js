import {useState} from "react";
import styled from "styled-components";
export default function Drag(props){
    const {left,right,children} = props;
    const [direction,setDirection] = useState('');

    const DragItem = styled.div`
                  width: 100%;
                  height: 100%;
                  transition: transform 2s;
                  &.left{
                    transform: translateX(${left});
                  }
                  &.right{
                    transform: translateX(${right});
                  }
    `;

    function dragStart(e) {
        if (direction!=='left'){
            setDirection('left');
        }else {
            setDirection('right');
        }
    }
    return(
        <DragItem
            className={direction}
            draggable={true}
            onDragStart={dragStart}
        >
            {children}
        </DragItem>
    )
}