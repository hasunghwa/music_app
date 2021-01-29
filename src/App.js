import './App.css';
import React from "react";
import axios from "axios";
import Music from "./Music";
import PropTypes from "prop-types";
//import Player from "react-soundcloud-widget-player";
class App extends React.Component{
  
  state = {
    isLoading: true,
    term: '',
    musics: [],
    
  }
 
  getMusics = async () => {
    console.log(this.setState.term)
    const musics = await axios.get(
      `http://itunes.apple.com/search?term=${this.state.term}&media=music&country=kr&limit=10`)   
    this.setState({ musics });
  }

  handleClick(isLoading) {
    isLoading? 
      this.setState({ isLoading: false, term:'' }) : this.setState({ isLoading: true })
    this.getMusics();
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }

  componentDidMount(){
    this.handleChange = this.handleChange.bind(this);
    this.getMusics();
  }
  render(){
    const{isLoading, musics} = this.state;
    
    return <section className="container">
      {isLoading ? (
        <div className="loader">
          <form id="content">
            <label>
              <input type="text" name="input" class="input" value={this.state.term} onChange={this.handleChange} />
            </label>
            <button class="search" onClick={() => this.handleClick(isLoading)}></button>
          </form>
        </div>
      ) : (
        <div className="main">
          <div className="prev_button">
            <button class="prev" onClick={() => this.handleClick()}></button>
          </div>
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
        </div>
      )}
    </section>
  }
}

export default App;
