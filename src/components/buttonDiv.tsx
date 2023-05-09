
type ButtonDivType = {
    prevPage: Function,
    nextPage: Function
}

export const ButtonDiv = (props: ButtonDivType) => {
    const {prevPage, nextPage} = props;
    return (
    <div className='d-flex flex-direction-row align-items-center'>
        <button type="button" className="btn btn-danger mx-3 mt-3" onClick={() => prevPage()}>Prev</button>
        <button type="button" className="btn btn-primary mx-3 mt-3" onClick={() => nextPage()}>Next</button>
    </div>
    );
}