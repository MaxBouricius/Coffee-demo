import "./Header.css"
const Header = (props) => {
    return(
        <header className="header">
            <h1 className="header__1">{props.bigTitle || "Missing text"} </h1>
            <h2 className="header__2">{props.smallTitle || "Missing text"}</h2>
            <button className="header__button">{props.buttonText || "Missing text"}</button>
        </header>
    )
}
export default Header;