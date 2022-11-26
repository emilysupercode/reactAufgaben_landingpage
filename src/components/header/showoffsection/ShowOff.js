import "./ShowOff.css"

function ShowOff(props) {
    return (
        <div>
            <p className="ShowOffLargeP">{props.number}</p>
            <p className="ShowOffSmallP">{props.units}</p>
        </div>
    )
}

export default ShowOff;