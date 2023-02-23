import React from "react"

function SortElement (props) {
    const {sortBy, ascending} = props.data.sorting
    
    let sortDirection = ""
    if(props.elementType === "Song" && sortBy === "title"){
        ascending ? sortDirection = "(A-Z)" : sortDirection = "(Z-A)"
    }
    if(props.elementType === "Artist" && sortBy === "artist"){
        ascending ? sortDirection = "(A-Z)" : sortDirection = "(Z-A)"
    }

    return(
        <div>
            <span className="sortHeader">{props.elementType}</span>
            <span className="sortDirection">{sortDirection}</span> 
        </div>
    )

}

export default SortElement