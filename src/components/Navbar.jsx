import ExampleClassComp from "./ExampleClassComp"

function Navbar(props) {
    console.log(props)
    return (
        <>
            <ul>
                <li id="my-first">Home</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            <ExampleClassComp></ExampleClassComp>
       
        </>
    )
}
export default Navbar

