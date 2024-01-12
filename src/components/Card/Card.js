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