import axios from 'axios';
import API_KEY from '../youtube_key';

const ROOT_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=`

export const VIDEO_SEARCH = 'VIDEO_SEARCH'

export function searchVideo(searchTerm) {

  const url = `${ROOT_URL}${searchTerm}`
  const request = axios.get(url)
  console.log(request)

  return {
    type: VIDEO_SEARCH,
    payload: request
  }
}

// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBlzhvh5OkL2eDxx6RhOfZ3s7enJ2skJzc
