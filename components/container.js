import React, {Component} from "react"
import SongList from "./songList";
import InputNewSong from "./input";

class Container extends Component {
    constructor(props){
        super(props)
        this.state ={
            songs: [
                {id: 1, title: "Casper lern to code", artist: "The great Casper", genre: "Rock", ranking: 4 },
                {id: 2, title: "Who the fuck is Casper", artist: "Mr Nobody", genre: "Pop", ranking: 5 },
                {id: 3, title: "Highway to Hell", artist: "Trump and the Bigband", genre: "Country", ranking: 1 },
                {id: 4, title: "Casper lern to code", artist: "The great Casper", genre: "Jazz", ranking: 2 },
                {id: 5, title: "Who the fuck is Casper", artist: "Mr Nobody", genre: "Classic", ranking: 2 },
                {id: 6, title: "Highway to Hell", artist: "Trump and the Bigband", genre: "Blues", ranking: 3 },
                {id: 7, title: "Casper lern to code", artist: "The great Casper", genre: "Blues", ranking: 3 },
                {id: 8, title: "Who the fuck is Casper", artist: "Mr Nobody", genre: "Pop", ranking: 1 },
                {id: 9, title: "Highway to Hell", artist: "Trump and the Bigband", genre: "Rock", ranking: 4 },
                {id: 10, title: "Amanamo", artist: "Bot the builder", genre: "Rock", ranking: 4 },
                {id: 11, title: "Amanamo Remixed", artist: "The Holey Hoes", genre: "Pop", ranking: 5 },
                {id: 12, title: "Bla Bla Bla", artist: "Blublue", genre: "Pop", ranking: 1 },
                {id: 13, title: "The coding song", artist: "Eternity Loop", genre: "Jazz", ranking: 2 },
                {id: 14, title: "The ultimate love song", artist: "Mr Love", genre: "Classic", ranking: 2 },
                {id: 15, title: "Killing me slowly", artist: "Cox2", genre: "Blues", ranking: 3 },
            ],
            ratingFilter: "No filter",
            genreFilter: "No filter",
            sorting: {sortBy: "title", ascending: true}
        };
    }

    setfilter = (filter) => {
        const {name, value} = filter
        this.setState({[name] : value})
    }

    setSorting = (sortType) => {
        if(sortType === this.state.sorting.sortBy){
            this.setState({sorting : {sortBy: sortType, ascending: !this.state.sorting.ascending}})
        }else{
            this.setState({sorting : {sortBy: sortType, ascending: true}})
        }
    }

    addSong = (song) => {
        this.setState({
            songs:[
                ...this.state.songs,
                {
                    id: this.state.songs.length + 1,
                    title: song.title,
                    artist: song.artist,
                    genre: song.genre,
                    ranking: song.ranking,
                }
            ]
        })
    }

    render() {
        return(
            <div className="container">
                <InputNewSong
                    onSubmit={this.addSong} 
                />
                <SongList 
                    data={this.state}
                    onFilterChange={this.setfilter}
                    onSortClick={this.setSorting}
                />
            </div>
        )
    }
}

export default Container