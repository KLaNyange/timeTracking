import './Card.css'
import dots from '../../assets/img/icon-ellipsis.svg'
function Card(props) {
    let period
    if (props.timing === 'daily') {
        period = 'Yesterday'
    }else if(props.timing === 'weekly'){
        period = ' Last week'
    }else{
        period = 'Last month'
    }

    function hover(e){
        // e.target.style.cursor = 'pointer'
        // e.target.style.filter = 'invert(8%) sepia(100%) saturate(6481%) hue-rotate(246deg) brightness(102%) contrast(143%)'
        // e.target.style.filter = 'brightness(0) invert(1)'
    }

    return (
        <div className={`fullCard ${props.title.toLowerCase()}`}>
            <div className="card">
                <div>
                    <div className="titleAndDots">
                        <p>{props.title}</p>
                        <img src={dots} alt="" />
                    </div>
                    <h1>{props.current} {props.current > 1 ? 'Hours' : 'Hour' }</h1>
                    <p>{period} -{props.previous} {props.previous > 1 ? 'Hours' : 'Hour' }</p>
                </div>
            </div>
        </div>
    )
}
export default Card