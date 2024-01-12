import './Cards.css'
import Card from '../Card/Card'
function Cards(props) {
    return (
        <div className='cards'>
            {
                props.data.map((item, index)=>(
                <Card key={index} title = {item.title} current = {item.timeframes[props.timing].current} previous = {item.timeframes[props.timing].previous} timing = {props.timing}/>
                ))
            }
        </div>
    )
}
export default Cards