import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import PanoramaIcon from '@material-ui/icons/Panorama';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';
import PublicIcon from '@material-ui/icons/Public';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import "./Head.css"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "600px",
        borderRadius: "15px",
        border: '2px solid #e4e4e4',
    },
    paper: {
        backgroundColor: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
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
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


export default function Head() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="main__head">
            <div className="open__head" onClick={handleOpen}>
                <div className="iconx__head">
                    <CreateIcon />
                </div>
                <div className="textx__head">
                    <p>Escribir a Alejandro</p>
                </div>
            </div>
            <div className="icons__head">
                <div className="foto__head">
                    <div className="icon1__head">
                        <PanoramaIcon />
                    </div>
                    <div className="text__head">
                        <p>Foto</p>
                    </div>
                </div>
                <div className="foto__head">
                    <div className="icon2__head">
                        <YouTubeIcon />
                    </div>
                    <div className="text__head">
                        <p>video</p>
                    </div>
                </div>
                <div className="foto__head">
                    <div className="icon3__head">
                        <EventIcon />
                    </div>
                    <div className="text__head">
                        <p>Evento</p>
                    </div>
                </div>
                <div className="foto__head">
                    <div className="icon4__head">
                        <DescriptionIcon />
                    </div>
                    <div className="text__head">
                        <p>Articulo</p>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <div className="cuerpo__Head">
                                <div className="title__head">
                                    <p>Enviar un mensaje a Alejandro</p>
                                </div>
                                <Divider />
                                <div className="body__head">
                                    <div className="avatar__head">
                                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.large} />
                                    </div>
                                    <div className="texto__m__head">
                                        <p>Alejandro Eloy Zdut</p>
                                        <div className="public__head">
                                            <div className="icono__modal__head">
                                                <PublicIcon />
                                            </div>
                                            <p className="cualquiera__head">cualquiera</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="tit__head">¿Sobre que quieres hablar?</p>
                                    <TextField
                                        id="filled-full-width"
                                        style={{ margin: 8 }}
                                        placeholder="Enviar mensaje"
                                        helperText="su mensaje sera enviado a mi casilla de correo alejandrozdut@gmail.com"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        variant="outlined"
                                    />
                                </div>
                                <div className="button__head">
                                    <Button variant="contained" color="primary">
                                        Enviar
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>

        </div>
    )
}