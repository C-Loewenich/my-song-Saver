import React, {Component} from "react"
import SongItem from "./songItem"
import SortElement from "./sortElement"


class SongList extends Component {

    render() {

        const comparator = (a, b) => {
            const {sortBy} = this.props.data.sorting
            switch(sortBy){
                case "title":
                    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                case "artist":
                    return a.artist.toLowerCase() > b.artist.toLowerCase() ? 1 : -1
            }
        }

        let songsToDisplay = this.props.data.songs

        if(this.props.data.ratingFilter != "No filter"){
            songsToDisplay = songsToDisplay.filter((song) => song.ranking == this.props.data.ratingFilter)
        }
        if(this.props.data.genreFilter != "No filter"){
            songsToDisplay = songsToDisplay.filter((song) => song.genre == this.props.data.genreFilter)
        }
       
        this.props.data.sorting.ascending ? 
            songsToDisplay.sort(comparator) : 
            songsToDisplay.sort(comparator).reverse()

        return(
            <div>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr className="song-header">  
                            <th
                                className="song-header__item"  
                                onClick={()=>this.props.onSortClick("title")}>
                                <SortElement elementType={"Song"} data={this.props.data}/> 
                            </th>
                            <th 
                                className="song-header__item"
                                onClick={()=>this.props.onSortClick("artist")}>
                                <SortElement elementType={"Artist"} data={this.props.data}/>
                            </th>
                            <th className="song-header__item">
                                <select 
                                    className="filter-picker"
                                    name="genreFilter" 
                                    onChange={(e)=>this.props.onFilterChange(e.target)}>
                                    <option value="No filter">Genre</option>
                                    <option value="Pop">Pop</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Country">Country</option>
                                    <option value="Blues">Blues</option>
                                    <option value="Jazz">Jazz</option>
                                    <option value="Classic">Classic</option>
                                </select>
                            </th>
                            <th className="song-header__item">
                                <select
                                    className="filter-picker" 
                                    name="ratingFilter" 
                                    onChange={(e)=>this.props.onFilterChange(e.target)}>
                                    <option value="No filter">Rating</option>
                                    <option value="1">1 star</option>
                                    <option value="2">2 stars</option>
                                    <option value="3">3 stars</option>
                                    <option value="4">4 stars</option>
                                    <option value="5">5 stars</option>
                                </select>
                            </th>
                        </tr> 
                    </thead>
                    <tbody>
                        {songsToDisplay.map((item) => (
                            <SongItem 
                            key={item.id}
                            item={item}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SongList
