import Axios from 'axios';
import template from './template.html';

export default {
  template,
  data() {
    return {
      items: [],
    };
  },
  created() {
    Axios.get('/items/api/items')
      .then((response) => {
        this.items = response.data.result;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
