import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Bienvenido a mi sitio!"/>
      </main>
    </div>
  );
}

export default App;
