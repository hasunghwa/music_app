import './App.css';
import React from "react";
import axios from "axios";
import Music from "./Music";
import PropTypes from "prop-types";
//import Player from "react-soundcloud-widget-player";
class App extends React.Component{
  state = {
    isLoading: true,
    musics: []
  }
 
  getMusics = async () => {
    const musics = await axios.get(
      "http://itunes.apple.com/search?term=장범준&media=music&country=kr&limit=10")
    
    this.setState({ musics, isLoading: false });
  }
  componentDidMount(){
    this.getMusics();
  }
  render(){
    const{isLoading, musics} = this.state;
    
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ) : (
        <div className="musics">
          {musics.data.results.map(music => (
            <Music
              artistId={music.artistId}
              collectionName={music.collectionName}
              artistName={music.artistName}
              artworkUrl100={music.artworkUrl100}
              previewUrl={music.previewUrl}
            />
          ))}
        </div>
      )}
    </section>
  }
}

export default App;
