import React, { Component } from 'react';

import SearchBar from '../containers/search-bar';
import VideoList from '../containers/video-list';
import YTSearch from 'youtube-api-search';
import API_KEY from '../youtube_key';

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
      </div>
    );
  }

}
