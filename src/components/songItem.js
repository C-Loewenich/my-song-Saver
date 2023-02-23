import React from "react"

function SongItem ({item}) {
    return(
        <tr key={item.id}>  
            <th className="song-row__item">{item.title}</th>
            <th className="song-row__item">{item.artist}</th>
            <th className="song-row__item">{item.genre}</th>
            <th className="song-row__item">{item.ranking}</th>
        </tr>
    )
}

export default SongItem;