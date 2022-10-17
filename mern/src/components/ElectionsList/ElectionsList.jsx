
import Election from '../Election/Election';

export default function ElectionsList({elections}) {


    const myelections = elections.map((value, index) => 
        <Election election={value} key={value._id} index={index}/> )

    return (
        <>
            <div className="elections-container">
                {myelections}
            </div>
            
        </>
    )
}