
type Character = {
    name: string,
    gender: string,
    status: boolean,
    img: string,
    species: string
}

export const CardCharacter = (props: Character) => {
    const {name, gender, status, img, species} = props;
    return(
        <div className="card m-3 p-3" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text text-white bg-dark">{name}</p>
                <p className="card-text text-white bg-dark">{gender}</p>
                <p className="card-text text-white bg-dark">{status}</p>
                <p className="card-text text-white bg-dark">{species}</p>
            </div>
        </div>
    );
}