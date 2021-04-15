const Filter = ({filterSearch}) =>{
    return(
        <div>
            filter shown with: <input type="text" onChange={filterSearch}/>
        </div>
    );
}
export default Filter;
