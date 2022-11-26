import "./MainTextSection.css"
import SingleTextSection from "./singleTextSection/SingleTextSection";

function MainTextSection(props) {
    return (
        <section className="MainTextSection">
            {props.textSection.map((singleTextSection, index) => {
                return <SingleTextSection key={index} icon={singleTextSection.icon} subtitle={singleTextSection.subtitle} furtherInfo={singleTextSection.furtherInfo} />
            })}
        </section>
    )
}

export default MainTextSection;