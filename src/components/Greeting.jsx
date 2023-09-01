import '../styles/Greeting.css'


function Greeting(props){
    console.log(props)
    const {name,course} = props
    return(
        <div>

            <h1 id="name-greeting">Hello {name}</h1>
            {props.children}

            <h2>Is enrolled in: {course}</h2>
            <h1>After Children</h1>
        </div>
    )
}

export default Greeting
