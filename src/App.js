import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import MyBookSection from "./components/MyBookSection"

function App() {
  return (
    <div className="App">
     <Header/>
     <CategorySection/>
     <Banner/>
     <MyBookSection section="Currently Reading"/>
     <MyBookSection section="My Books"/>
    </div>
  );
}

export default App;
