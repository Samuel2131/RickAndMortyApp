import { Character } from "../models/character";
import {useNavigate} from "react-router-dom"

export const CardCharacter = (props: Character) => {
    const navigate = useNavigate();
    const {id, name, gender, status, image, species} = props;

    const clickCard = () => navigate("/"+id);

    return(
        <div className="card m-3 p-3" style={{width: "18rem"}} onClick={() => clickCard()}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text text-white bg-dark">{name}</p>
                <p className="card-text text-white bg-dark">{gender}</p>
                <p className="card-text text-white bg-dark">{status}</p>
                <p className="card-text text-white bg-dark">{species}</p>
            </div>
        </div>
    );
}