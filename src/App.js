import './App.css';
import Hero from './components/Hero';
import Herodata from './components/Herodata';
import Nav from './components/Nav';

function App() {
  const AllHeroData = Herodata.map( item => {
    return (
    <Hero 
    key={item.id}
    {...item}
    />)
  })
    
return (
  <div className="main_body">
    <Nav />
    {AllHeroData}
  </div>
)

}
export default App;
