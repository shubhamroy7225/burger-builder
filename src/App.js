
import './App.css';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Layout from './coponents/Layout/Layout';

function App() {
  return (
    <div className="App">
    <Layout>
      <BurgerBuilder />
    </Layout>
    </div>
  );
}

export default App;
