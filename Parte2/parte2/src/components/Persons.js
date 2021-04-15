const Persons = (props)=> {
    return(
        <div>
            <li>{props.person.name} whit number: {props.person.number}</li>
        </div>
    );
}
export default Persons;
