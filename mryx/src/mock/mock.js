import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import mryxList from './datas/mryxList.json'
import huoguo from './datas/huoguo.json'
import fruit from './datas/fruit.json'
import sc from './datas/sc.json'
import milk from './datas/milk.json'
import detail from './datas/detail/detail.json'


const mock = new AxiosMockAdapter(axios)

const information = () => {
    mock.onGet('/api/list').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, mryxList])
        })
    })
    mock.onGet('/jsd-hb-newsy').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, mryxList])
        })
    })
    mock.onGet('/hbjsd-huoguo').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, huoguo])
        })
    })
    mock.onGet('/jsd-hb-fruit').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, fruit])
        })
    })
    mock.onGet('/jsd-hb-sc').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, sc])
        })
    })
    mock.onGet('/jsd-hb-milk').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, milk])
        })
    })
    mock.onGet('/detail').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, detail])
        })
    })
    mock.onPost('/autn').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200,{message: 'ok'}])
        })
    })
    mock.onPost('/login').reply((config) => {
        return new Promise((resolve, reject) => {
            resolve([200, { message: 'ok' }])
        })
    })
}

export default information