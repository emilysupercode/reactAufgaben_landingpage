import "./SingleTextSection.css"

function SingleTextSection(props) {
    return (
        <div className="SingleTextSectionDiv">
            <img src={props.icon} alt="random" className="textSectionIcon" />
            <div className="textSectionText">
                <p className="subtitleTextSection">{props.subtitle}</p>
                <p className="pTextSection">{props.furtherInfo}</p>
            </div>
        </div>
    )
}

export default SingleTextSection;