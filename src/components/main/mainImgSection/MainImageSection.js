import "./MainImageSection.css";
import SingleImageDiv from "./singleImageDiv/SingleImage";

function ImageDivSection(props) {
    console.log("test")
    return (
        <section className="mainImageSection">
            {props.imageArray.map((singleDiv, index) => {
                return <SingleImageDiv key={index} img={singleDiv.img} name={singleDiv.name} info={singleDiv.info} price={singleDiv.price} />
            })}
        </section>
    )
}

export default ImageDivSection;