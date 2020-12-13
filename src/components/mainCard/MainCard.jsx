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
            <Profile />
        </div>
    )
}