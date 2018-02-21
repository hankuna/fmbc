import Vue from 'vue'
import axios from 'axios'

const tools = {
    install () {
        Object.defineProperty(Vue.prototype, '$http',{
            value: axios
        })
    }
}

export default tools
