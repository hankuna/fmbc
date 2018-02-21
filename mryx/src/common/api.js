import axios from 'axios'

export const post = (url,opts) => {
    return axios.post(url,opts)
    .then((res) => {
        return res
    })
    .catch((e) => {
        throw Error(e)
    })
}