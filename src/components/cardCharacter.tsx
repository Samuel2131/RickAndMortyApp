import { useContext } from "react";
import { Character } from "../models/character";
import {useNavigate} from "react-router-dom"
import { CommonContext } from "../App";

export const CardCharacter = (props: Character) => {
    const {theme, fontSize} = useContext(CommonContext);
    const navigate = useNavigate();
    const {id, name, gender, status, image, species} = props;

    const clickCard = () => navigate("/"+id);

    return(
        <div className="card m-3 p-3" style={{width: "18rem", backgroundColor: theme === "light" ? "white" : "darkblue"}} onClick={() => clickCard()}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text text-white bg-dark" style={{fontSize: fontSize}}>{name}</p>
                <p className="card-text text-white bg-dark" style={{fontSize: fontSize}}>{gender}</p>
                <p className="card-text text-white bg-dark" style={{fontSize: fontSize}}>{status}</p>
                <p className="card-text text-white bg-dark" style={{fontSize: fontSize}}>{species}</p>
            </div>
        </div>
    );
}