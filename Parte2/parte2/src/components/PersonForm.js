const PersonForm = (
    {eventRename, eventNewNumber, eventClick, newName, newNumber}
    ) =>{
    return(
    <form onSubmit={eventClick}>
        <div>
            name: <input type="text" value={newName} onChange={eventRename} />
        </div>
        <div>
            number: <input type="number" value={newNumber} onChange={eventNewNumber} />
        </div>
        <div>
            <button type="submit"  onClick={eventClick}>add</button>
        </div>
    </form>
    )
}
export default PersonForm;
