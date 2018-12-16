import {store} from '../store.js';

function setTitle($title) {

    store.commit('setTitle', $title);

}

export default setTitle;