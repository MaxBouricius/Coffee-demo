import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
const HomePage = () => {
    return(
        <>
            <Navigation />
            <Header bigTitle="Coffeez" smallTitle="Coffee that will make you smile" buttonText="Order now"/>
            <Section sectionTitle="Titel">
                <Card text="De verste bonen die je gaat vinden in de hele tri-staat regio" image="bonen.jpg" />
                <Card text="Geweldige barista's die de lekkerste coffee maken voor uw gemak" image="barista.jpg"/>
                <Card text="Een goeie atmosfeer die iedereen blij maakt!" />
                <Card text="Een plek waar iedere coffee liefhebber zijn passie kan delen met zijn mede liefhebbers" image="i-love-coffee.jpg"/>
            </Section>
        </>
    )
}
export default HomePage