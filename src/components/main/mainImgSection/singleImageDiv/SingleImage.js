import "./SingleImage.css"

function SingleImageDiv(props) {
    return (
        <section className="mainImageDiv">
            <img src={props.img} alt="random" />
            <p className="boldBlueP">{props.name}</p>
            <p className="infoP">{props.info}</p>
            <p className="priceP">{props.price}</p>
        </section >
    )
}

export default SingleImageDiv;