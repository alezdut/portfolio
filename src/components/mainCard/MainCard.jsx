import React from "react";
import Divider from '@material-ui/core/Divider';
import "./MainCard.css"
import Profile from "./Profile";

export default function MainCard() {
    return (
        <div className="main__mainCard">
            <div className="Head__maincard">
                <p className="head_title__maincard">Mi mama</p><p className="sub__head">recomienda esto</p>
            </div>
            <Divider />
            <Profile className="profile__maincard" />
            <div className="content__maincard">
                <p>Hola! bienvenido a mi Portfolio, aqui podras ver algunos de mis trabajos y proyectos personales.<br /><br />
                ESTO NO ES LINKEDIN! no te confundas! arme esta pagina desde 0 en react, los estilos son mayormente en CSS pero tambien
                use Material UI. si te interesa podes ver el codigo en mi github <a href="https://github.com/alezdut">https://github.com/alezdut</a> junto con el
                codigo de mis otros proyectos.<br /><br />
                Gracias por tu visita!
                </p>
            </div>
        </div>
    )
}