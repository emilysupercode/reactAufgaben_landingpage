import "./Header.css"
import ShowOff from "./showoffsection/ShowOff";

let showOffArray = [
    {
        number: 127,
        units: "Awards Received"
    },
    {
        number: 1505,
        units: "Cups of Coffee (approx.)"
    },
    {
        number: 109,
        units: "Projects Completed"
    },
    {
        number: 102,
        units: "Happy Clients"
    },
]

function Header() {
    return (
        <header>
            <p className="headerMediumP">Hello There</p>
            <h1 className="headerH1">We Are Glint</h1>
            <hr />
            <p className="headerNormalP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo recusandae laborum tempore itaque animi! Dolorum placeat adipisci, consequatur recusandae, sunt cumque veritatis at accusantium quas aliquam, asperiores amet suscipit esse cupiditate laborum quod incidunt tempora molestiae! Aut sed quis dolorem corrupti quas similique, esse ratione. Eius nemo sequi officia</p>
            <article className="headerArticle1">
                {showOffArray.map((showOffPoint, index) => {
                    return <ShowOff key={index} number={showOffPoint.number} units={showOffPoint.units} />
                })
                }

            </article>
        </header>
    )
}

export default Header;