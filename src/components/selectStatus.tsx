
type SelectStatusType = {
    setStatus: Function
}

export const SelectStatus = (props: SelectStatusType) => {
    const changeSelect = (event: any) => setStatus(event.target.value);
    const { setStatus } = props;
    return(
      <select className="form-select mt-3 mx-2" style={{height: "50%", width: "80%"}} aria-label="Default select example" onChange={changeSelect}>
        <option value="All">All status</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>
    );
}