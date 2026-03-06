import "./App.css";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";
import Nabvar from "./components/Nabvar/Nabvar";


const loadTicket = ()=>{
  const data = fetch("ticket.json").then(data=>data.json())

  return data
}



const ticket = loadTicket()

function App() {
  return (
   <div className="max-w-7xl mx-auto bg-gray-200">
    <Nabvar></Nabvar>
    <MainSection ticket={ticket}></MainSection>
    <Footer></Footer>
   </div>
  );
}

export default App;
