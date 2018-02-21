import request from '../utils/request'
export const getNav = () => {
    return request('http://localhost:3000/api/jd')
    .then(data => data)
    .catch(e => {
        throw Error(e)
    })
}