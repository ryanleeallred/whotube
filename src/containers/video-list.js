import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {

  renderList() {
    console.log(this.props)
    return this.props.videos.map((video) => {
      return (
        <li key={video.title} className="list-group-item">{video.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned from here will be props inside of VideoList
  return {
    videos: state.videos
  }
}

export default connect(mapStateToProps)(VideoList);
