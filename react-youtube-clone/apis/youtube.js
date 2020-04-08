import axios from 'axios';
const KEY = 'AIzaSyA7aaQrepjfXpT13BooEcmmP5ov1oiNS9w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});

