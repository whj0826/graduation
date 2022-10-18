import React, {useEffect, useState} from "react";
import Center from "../../common/components/center";

const BMapGL = window.BMapGL;
export default function BaiduMap() {
    // 116.404, 39.915 北京天安门经纬度 纬度：latitude 经度：经度是longitude
    const [point, setPoint] = useState({lat: 39.915, lng: 116.404});

    useEffect(() => {
        let map = new BMapGL.Map('bmap'); // 创建Map实例
        map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放

        let geolocation = new BMapGL.Geolocation(); // 获取当前位置
        geolocation.getCurrentPosition(function (result) {
            console.log('当前位置', result.address); // 获取当前位置的地址
            console.log('当前位置', result.point.lat, result.point.lng); // 获取当前位置的经纬度
            setPoint({lat: result.point.lat, lng: result.point.lng});
            let point = new BMapGL.Point(result.point.lng, result.point.lat); // 设置当前位置的经纬度
            map.centerAndZoom(point, 15); // 初始化地图,设置中心点坐标和地图级别
        })

        // 获取当前所点击的地点的位置
        map.addEventListener('click', function (e) {
            console.log(e)
            alert('点击的经纬度：' + e.latlng.lng + ', ' + e.latlng.lat);
        });
    }, []);

    return (
        <>
            <div>
                <div id="bmap" style={{
                    overflow: 'hidden',
                    width: 600,
                    height: 600,
                    margin: 0,
                    fontFamily: "微软雅黑"
                }}></div>
            </div>
        </>

        )
}
