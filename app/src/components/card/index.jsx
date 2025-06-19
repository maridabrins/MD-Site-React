import './style.css'

const Card = ({ title, description}) => { //props   
    return(
        <div className="card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>

    )
}
export default Card