
import BodyComponent from './components/BodyComponent'
import FooterComponent from './components/FooterComponent'
import NavComponent from './components/NavComponent'

const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <BodyComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;
