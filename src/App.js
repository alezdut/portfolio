import './App.css';
import { useEffect, useState } from "react"
import Profile from './components/profile/profile';
import Resume from "./components/Resume/Resume"
import NavBar from "./components/navBar/Navbar"
import Head from "./components/head/Head"
import MainCard from "./components/mainCard/MainCard";
import RightPanel from './components/rightpanel/RightPanel';
import Data from "./components/Resume/Data";
import About from './components/Resume/About';


var arr = [{
  nombre: "Mi mama",
  sub: "recomienda esto",
  text: `Hola! bienvenido a mi Portfolio, aqui puedes ver mis proyectos y mi Curriculum haciendo click en la pestaña "yo".`,
  subtext: `ESTO NO ES LINKEDIN! no te confundas! arme esta pagina desde 0 en react, los estilos son mayormente en CSS pero tambien use Material UI.`,
  saludo: `Si te interesa podes ver el codigo en mi github "https://github.com/alezdut/" junto con el codigo de mis otros proyectos. Gracias por tu visita!`,
  reactions: "11·5 comentarios 885 Visualizaciones"
}, {
  nombre: "A Marcos",
  sub: "le interesa esto",
  text: `Este proyecto lo realize como challenge para una plataforma, es una aplicacion para llevar control de gastos personales,
  permite que el usuario se registre y almacena las transacciones tanto entrantes como salientes, asi como un balance. Ademas permite filtrar
  las operaciones por categorias. Se utilizaron
  las siguientes tecnologias: React, PostgreSQL, Sequelize, Material UI, NodeJS y ExpressJS.`,
  subtext: "Un proyecto muy entretenido, realizado en solo 48hs.",
  saludo: "Si quieres ver el codigo puedes ingresar al link",
  img: "https://raw.githubusercontent.com/alezdut/finance-app/master/images/2.jpg",
  link: "https://github.com/alezdut/finance-app",
  reactions: "10·8 comentarios 569 Visualizaciones"
}, {
  nombre: "A Eren",
  sub: "le interesa esto",
  text: `Esta plataforma de e-learning la realizamos junto a mis compañeros como proyecto final, se utilizaron
  las siguientes tecnologias: React, Redux, MongoDB, mongoose, Material UI, NodeJS y ExpressJS.`,
  subtext: "Realmente fue un proyecto desafiante dado el poco tiempo (20 dias) pero nos sentimos conformes con el resultado, ademas que nos permitio afianzar conocimientos.",
  saludo: "Si te interesa saber mas puedes ingresar al link para ver el proyecto completo",
  img: "https://raw.githubusercontent.com/alezdut/HenryApp/master/Readme_images/module.jpg",
  link: "https://github.com/alezdut/HenryApp",
  reactions: "5·2 comentarios 650 Visualizaciones"
}, {
  nombre: "A Jeff",
  sub: "le gusto esto",
  text: `Este e-commerce lo realizamos junto a mis compañeros como parte de la etapa de Henry Labs.`,
  subtext: "Fue un gran desafio aplicar los conocimientos adquiridos durante el bootcamp en un proyecto real, utilizamos React, Redux, PostgreSQL, NodeJS y ExpressJS",
  saludo: "Si te interesa saber mas puedes ingresar al link para ver el proyecto completo",
  img: "https://raw.githubusercontent.com/alezdut/Nasdrovia/master/Readme_images/home.png",
  link: "https://github.com/alezdut/Nasdrovia",
  reactions: "10·20 comentarios 1092 Visualizaciones"
}, {
  nombre: "A Ale",
  sub: "le encanta esto",
  text: `Después de empezar este año lleno de dudas, teniendo que cerrar mi local de computación, apareció esta oportunidad en mi camino y decidí aprovecharla, hoy estoy muy feliz de haber completado el bootcamp, contar con conocimientos y amigos nuevos, y sentirme listo para encarar una nueva etapa de mi vida.`,
  img: "https://media-exp1.licdn.com/dms/image/C4E22AQHb1WTVRchF5w/feedshare-shrink_800/0/1606856614811?e=1614816000&v=beta&t=bHKLuCB8BZJpWWliUaPjMLUSMk4skqXRLPztdiVLrQg",
  reactions: "20·2 comentarios 456 Visualizaciones"
}, {
  nombre: "A Ale",
  sub: "le gusta",
  text: `Si llegaste hasta aca te cuento un poco mas sobre mi. Tengo 28 años, me gusta cocinar,
  tengo una perra salchicha y una gata (foto), me encanta nadar y andar en bici. Desde chico me apasiona la tecnologia, y
  encontre en el desarrollo web una herramienta muy poderosa para lograr plasmar mis ideas. `,
  subtext: `Este año decidi dar un giro en cuanto a lo profesional, tenia un emprendimiento local de computacion que tuve que cerrar a causa de la pandemia, 
  y decidi que era un buen momento de formarme y salir con mejores herramientas a un mundo que creo que ya no sera el mismo nunca mas.
  Ahi aparece Henry que me da la posibilidad de aprender algo que me apasiona apostando a nosotros y de manera remota, y aqui me encuentro despues
  de unos meses duros trabajando con nuevas tecnologias, con nuevos amigos y seguro de que fue una buena eleccion.`,
  saludo: "gracias por pasar por mi perfil!",
  img: "https://i.imgur.com/spxAV9l.jpeg",
  reactions: "10·2 comentarios 254 Visualizaciones"
}]

function App() {
  const [cv, setCv] = useState(false);

  useEffect(() => {

  }, [cv])

  const handleCv = () => {
    setCv(true)
  }
  const handleClose = () => {
    setCv(false)
  }

  return (
    <div className="App">
      <NavBar yo={handleCv} close={handleClose} />
      {!cv ? <div className="main__app">
        <div className="container__app">
          <Profile yo={handleCv} />
          <div className="container2__app">
            <Head />
            {arr.map(e => {
              return <MainCard props={e} />
            })}

          </div>
          <RightPanel />
        </div>
      </div> : <div className="main__app">
          <div className="container__app"><div className="container2__app"><Resume /><About /><Data /></div><RightPanel /></div></div>}
    </div>
  );
}

export default App;
