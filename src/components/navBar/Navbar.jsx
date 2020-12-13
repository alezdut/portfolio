import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import logo from "../../resources/images/logo.jpg"
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import "./NavBar.css";

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
    medium: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));


export default function NavBar() {
    const classes = useStyles();

    return (
        <div className="main__nav">
            <div className="box__nav">
                <div className="logo__nav">
                    <img className="img__nav" src={logo}></img>
                </div>
                <div className="search__nav">
                    <div className="iconsearch__nav">
                        <SearchIcon />
                    </div>
                    <div className="form__nav">
                        <form className="form__in__nav">
                            <input className="input__nav"></input>
                        </form>
                    </div>
                </div>
                <div className="icons__nav">
                    <div className="inicio__nav">
                        <HomeIcon />
                        <a>Inicio</a>
                    </div>
                    <div className="inicio__red">
                        <PeopleIcon />
                        <a>Mi red</a>
                    </div>
                    <div className="inicio__empleos">
                        <WorkIcon />
                        <a>Empleos</a>
                    </div>
                    <div className="inicio__mensajes">
                        <SmsIcon />
                        <a>mensajes</a>
                    </div>
                    <div className="inicio__notificaciones">
                        <NotificationsIcon />
                        <a>notificaciones</a>
                    </div>
                    <div className="inicio__yo">
                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.small} />
                        <a>yo</a>
                    </div>
                </div>
                <div className="avatar__nav">
                    <Avatar alt="Alejandro Zdut" src={perfil} className={classes.medium} />
                </div>
            </div>

        </div>
    )
}