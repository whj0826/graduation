import 'bootstrap/dist/css/bootstrap.css'
export default function Center({children}){
    return(
        <div style={{
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center'
        }}>
            <div
                style={{
                    width:'100%',
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    textAlign:'center'
                }}
            >{children}</div>
        </div>
    )
}