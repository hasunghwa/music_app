import {React} from "react";
import {PropTypes} from "prop-types";
import ReactPlayer from "react-player";
//import "./Music.css";
function Music({ artistId, collectionName, artistName, previewUrl, artworkUrl100}) {
    return <div className="music">
        <img src={artworkUrl100} alt={collectionName} title={collectionName}></img>
        <div className="music_data">
            <h3 className="music_title">{collectionName}</h3>
            <h5 className="music_artName">{artistName}</h5>
            <ReactPlayer
                url={previewUrl}
                width="400px"
                height="50px"
                playing={false}
                controls={true}
            />
        </div>
    </div>
}

Music.propTypes = {
    artistId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired
}

export default Music;