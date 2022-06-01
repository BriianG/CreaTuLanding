import './App.css';
import Cuerpo from './components/Cuerpo/cuerpo'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario'
import ComponentContainer from './components/Component/ComponentContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



//me crea un parametro y el valor
//mENU(parametro:valor, parametro2,.....)

//Se inyecta como una props llamada children el ComponentContainer una vez dentro de titulo, aparece en forma de objeto.
//Si inyectamos dos componentContainer se transforman en ARRAY
function App() {
   let contenido = 'Esto es conenido de app' // estado
   let tituloApp = 'Esto es titulo de app' // estado

   return (
   <>
   <CartWidget/>
   <NavBar param1= {contenido} parametro2 ='parametro2'/>
   
   
   <Titulo titulo ="SCA Alimentando tu conciencia" subTitulo ="Aqui podras encontrar informacion">
   <ComponentContainer/>
   </Titulo>
   {/* en los tutoriales se le pone otro nombre COMO page */}


<ItemListContainer greeting={"Hola Coder"}/>
   </>
)
}

export default App;
