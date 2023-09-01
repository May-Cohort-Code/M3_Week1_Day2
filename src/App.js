import logo from './logo.svg';
import './App.css';
import ExampleClassComp from './components/ExampleClassComp';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Greeting name="Omar" course="Web Dev Teacher">
      <StudentCard name="Nermeen" location={{city:"Berlin", country:"Germany"}} bootcamp="Web Dev"></StudentCard>
      <h1>IN children</h1>
      <Navbar></Navbar>
      </Greeting>
      <Greeting name="Agustin" course="Web Dev"></Greeting>
      {/* <StudentCard name="Joseph" city="Ghana" bootcamp="Web Dev"></StudentCard> */}
      <StudentCard name="Nermeen" location={{city:"Berlin", country:"Germany"}} bootcamp="Web Dev"></StudentCard>

    </div>
  );
}





export default App;

