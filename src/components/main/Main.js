import "./Main.css";
import ImageDivSection from "./mainImgSection/MainImageSection";
import MainTextSection from "./mainTextSection/MainTextSection";
import Frikadellen from "../../assets/img/frikadellen.jpeg";
import Glass from "../../assets/img/glass.jpeg";
import Pizza from "../../assets/img/pizza.jpeg";
import Pizza2 from "../../assets/img/pizza2.jpeg";
import Salat from "../../assets/img/salat.jpeg";
import Scampi from "../../assets/img/scampi.jpeg";
import Spaghetti from "../../assets/img/spaghetti.jpeg";
import Teller from "../../assets/img/teller.jpeg";
import Brush from "../../assets/img/brush.svg";
import Globe from "../../assets/img/globe-line.svg";
import Megaphone from "../../assets/img/megaphone.svg";
import ObjectSelect from "../../assets/img/object-select.svg";

let imageArray = [
    {
        img: Salat,
        name: "Fusce dictum finibus",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 45 / $ 55"
    },
    {
        img: Pizza,
        name: "Aliquam sagittis",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 55 / $ 70"
    },
    {
        img: Frikadellen,
        name: "Sed varius turpis",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 30.50"
    },
    {
        img: Glass,
        name: "Aliquam sagittis",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 25.50"
    },
    {
        img: Pizza2,
        name: "Maliaöeiruelrj ydslfkysleoru",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 25.60"
    },
    {
        img: Scampi,
        name: "Aliquam sagittis",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 55 / $ 70"
    },
    {
        img: Spaghetti,
        name: "Sed varius turpis",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 55 / $ 70"
    },
    {
        img: Teller,
        name: "Aliquam sagittis",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur, quod possimus dignissimos doloribus est.",
        price: "$ 55 / $ 70"
    }
]

let textSection = [
    {
        icon: Brush,
        subtitle: "Brand Identity",
        furtherInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima a doloribus nam quis dignissimos corporis debitis deleniti modi, dolorum sapiente tempora magni. Maxime ea iste distinctio voluptatibus necessitatibus nobis vitae sit, aliquam ducimus cum incidunt veritatis doloribus optio. Nisi blanditiis quaerat quos perspiciatis ipsa, sequi cum doloribus dignissimos eligendi molestias."
    },
    {
        icon: Megaphone,
        subtitle: "Marketing",
        furtherInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima a doloribus nam quis dignissimos corporis debitis deleniti modi, dolorum sapiente tempora magni. Maxime ea iste distinctio voluptatibus necessitatibus nobis vitae sit, aliquam ducimus cum incidunt veritatis doloribus optio. Nisi blanditiis quaerat quos perspiciatis ipsa, sequi cum doloribus dignissimos eligendi molestias."
    },
    {
        icon: ObjectSelect,
        subtitle: "Illustration",
        furtherInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima a doloribus nam quis dignissimos corporis debitis deleniti modi, dolorum sapiente tempora magni. Maxime ea iste distinctio voluptatibus necessitatibus nobis vitae sit, aliquam ducimus cum incidunt veritatis doloribus optio. Nisi blanditiis quaerat quos perspiciatis ipsa, sequi cum doloribus dignissimos eligendi molestias."
    },
    {
        icon: Globe,
        subtitle: "Web Design",
        furtherInfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima a doloribus nam quis dignissimos corporis debitis deleniti modi, dolorum sapiente tempora magni. Maxime ea iste distinctio voluptatibus necessitatibus nobis vitae sit, aliquam ducimus cum incidunt veritatis doloribus optio. Nisi blanditiis quaerat quos perspiciatis ipsa, sequi cum doloribus dignissimos eligendi molestias."
    },
];

function Main() {
    return (
        <main>
            <section className="mainSection1">
                <p className="mainMediumP">What We Do</p>
                <h2 className="mainH2">We've got everything you need to launch and grow your business</h2>
            </section>
            <MainTextSection textSection={textSection} />
            <ImageDivSection imageArray={imageArray} />
        </main>
    )
}

export default Main;