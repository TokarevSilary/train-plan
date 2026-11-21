    function OurInformation ({states, setStates}){

        const removeButton = (el) =>setStates(states.filter(elem => elem.date !== el));
        return(
            <div className="table-body" id="tableBody">
            {states.map((el)=>{
                return(
                <div className="table-row" data-date={el.date} key={el.date}>
                    <div className="col-date">{el.date}</div>
                    <div className="col-distance">{el.distance}</div>
                    <div className="col-actions">
                        <button className="action-btn edit-btn" title="Редактировать">✎</button>
                        <button className="action-btn delete-btn" title="Удалить" onClick={()=> removeButton(el.date)}>✕</button>
                    </div>
                </div>
                )
            })}
            </div>
        )
    }

export default OurInformation;