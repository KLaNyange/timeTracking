import './SideBar.css'
import jeremy from '../../assets/img/image-jeremy.png'
function SideBar(props) {
console.log(props.timing);
    return (
        <div className='cardProfile'>
            <div className="profile">
                <img src={jeremy} alt="" />
                <p>Report for</p>
                <div className="info">
                    <h1>Jeremy Robson</h1>
                </div>
            </div>
            <p onClick={props.changeTiming} className={props.timing === 'daily' ? 'active' : "pProfile"}>Daily</p>
            <p onClick={props.changeTiming} className={props.timing === 'weekly' ? 'active' : "pProfile"}>Weekly</p>
            <p onClick={props.changeTiming} className={props.timing === 'monthly' ? 'active' : "pProfile"}>Monthly</p>
        </div>
    )
}
export default SideBar