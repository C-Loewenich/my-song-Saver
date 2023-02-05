import {useState} from "react"

function InputNewSong({onSubmit}){
    const [details, setDetails] = useState({
        title: "",
        artist: "",
        genre: "",
        ranking: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDetails((prev) => {
            return {...prev, [name]: value};
        })
    };

    function onButtonPress(e) {
        const {title, artist, genre, ranking} = details
        if(title == "" || artist == "" || genre == "" || ranking == ""){
            alert("Please fill in all parameters in the table") 
        }else{
            e.preventDefault();
            onSubmit(details)        
            setDetails({
                title: "",
                artist: "",
                genre: "",
                ranking: "",
            })            
        }
                  
    }

    return(
        <form>
            <input
                className="song-input"
                placeholder="Title"
                value={details.title}
                type="text"
                name="title"
                onChange={handleChange}
            />
            <input
                className="song-input"
                placeholder="Artist"
                value={details.artist}
                type="text"
                name="artist"
                onChange={handleChange}
            />
            <select 
                className="song-input"
                placeholder="Genre"
                value={details.genre}
                type="text"
                name="genre"
                onChange={handleChange}
                >
                <option value="">Genre</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Country">Country</option>
                <option value="Blues">Blues</option>
                <option value="Jazz">Jazz</option>
                <option value="Classic">Classic</option>
            </select>
            <select 
                className="song-input"
                placeholder="Rating (1-5)"
                value={details.ranking}
                type="text"
                name="ranking"
                onChange={handleChange}
                >
                <option value="">Rating</option>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
            </select>
            <button onClick={onButtonPress}>Save Song</button>
        </form>
    )
}

export default InputNewSong;