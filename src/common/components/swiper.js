// https://swiperjs.com/react
// https://swiperjs.com/demos#effect-fade
/*
* sliderPerView 是当前swiper可以显示的元素个数
* modules:
*   Navigation={true} 左右切换箭头
*   pagination={{ clickable: true }} 显示导航圆点
*   scrollbar={{ draggable: true }} 显示导航线条
*   EffectFade 淡入淡出
*       effect="fade"
*   Virtual 幻灯片
*       virtualIndex={number}
*   slot
*   container-start- 元素将被添加到刷卡器容器的开头
    container-end（默认值） - 元素将添加到滑动器容器的末尾
    wrapper-start- 元素将被添加到刷卡包装器的开头
    wrapper-end- 元素将被添加到刷卡包装器的末尾
* */

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation"


// import required modules
import { EffectFade, Pagination,Navigation } from "swiper";
import Modal from "@mui/joy/Modal";

export default function MySwiper() {
    // 是否放大当前轮播图
    const [open, setOpen] = React.useState(false);

    const swiperItem = (width,height,navigation) => {
      return(
          <Swiper
              effect={"fade"}
              navigation={navigation}
              pagination={{
                  clickable: true,
              }}
              modules={[EffectFade, Pagination,Navigation]}
              style={{
                  width:width,
                  height:height
              }}
              // 单击放大
              onClick={()=>setOpen(true)}
          >
              <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
          </Swiper>
      )
    }

    return (
        <>
            {swiperItem('60%','60%',false)}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <React.Suspense fallback={<div>加载中...</div>}>
                    {swiperItem('80%','80%',true)}
                </React.Suspense>
            </Modal>
        </>
    );
}


// export default function MySwiper(){
//     return(
//         <div style={{
//             width:170,
//             height:300,
//             backgroundColor:'indianred'
//         }}>
//             <Swiper
//                 modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade,Virtual]}
//                 spaceBetween={10}
//                 slidesPerView={2}
//
//                 navigation={true}
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 // effect={'fade'}
//                 virtual={true}
//
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide virtualIndex={1}>
//                     <div style={{width:80,height:80,backgroundColor:'red'}}></div>
//                 </SwiperSlide>
//                 <SwiperSlide virtualIndex={2}>
//                     <div style={{width:80,height:80,backgroundColor:'blue'}}></div><
//                     /SwiperSlide>
//                 <SwiperSlide virtualIndex={3}>
//                     <div style={{width:80,height:80,backgroundColor:'black'}}></div>
//                 </SwiperSlide>
//                 <SwiperSlide virtualIndex={4}>
//                     <div style={{width:80,height:80,backgroundColor:'gold'}}></div>
//                 </SwiperSlide>
//                 <SwiperSlide virtualIndex={5}>
//                     <div style={{width:80,height:80,backgroundColor:'gray'}}></div>
//                 </SwiperSlide>
//                 <SwiperSlide virtualIndex={6}>
//                     <div style={{width:80,height:80,backgroundColor:'green'}}></div>
//                 </SwiperSlide>
//                 {/*<span slot="container-start">Container Start</span>*/}
//                 {/*<span slot="container-end">Container End</span>*/}
//                 {/*<span slot="wrapper-start">Wrapper Start</span>*/}
//                 {/*<span slot="wrapper-end">Wrapper End</span>*/}
//             </Swiper>
//         </div>
//     )
// }