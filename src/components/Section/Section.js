import "./Section.css";
const Section = (props) => {
    return (
        <section className="section">
            <header className="section__header">
                <i class="fa-solid fa-mug-hot"></i>
                <h2 className="section__h2">{props.sectionTitle || "Placeholder Title"}</h2>
            </header>
        
        <div class="section__wrapper">
            {props.children}
        </div>
        </section>
    )
}
export default Section;