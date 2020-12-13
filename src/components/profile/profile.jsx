import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../../resources/images/articleocw-5d07e6b3790af.jpg";
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import "./profile.css"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className="main__profile">
            <div className="data__profile">
                <div className="images__profile">
                    <div className="portada__profile">
                        <img className="img__profile" src={portada} />
                    </div>
                    <div className="avatar__profile">
                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.large} />
                    </div>
                </div>
                <div className="text__profile">
                    <div className="title__profile">
                        <a className="nombre__profile">
                            Alejandro Eloy Zdut
                        </a>
                    </div>
                    <div className="info__profile">
                        <p classNam="subtitle__profile">
                            Fullstack developer | React |<br />
                            Javascript | SQl | MongoDB | HTML | CSS
                        </p>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="links__profile">
                <div className="link__profile">
                    <p>Proyectos personales</p>
                    <p>Visualizaciones de tu perfil</p>
                </div>
                <div>

                </div>
            </div>
            <Divider />
            <div className="icono__profile">
                <div className="bookmark__profile">
                    <BookmarkIcon />
                </div>
                <div className="contacto__profile">
                    <a>contactar</a>
                </div>
            </div>
        </div>)
}