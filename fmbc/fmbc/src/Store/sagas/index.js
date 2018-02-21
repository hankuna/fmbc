import { frok } from 'redux-saga/effects'
import add from './add'

export default function* () {
    yield frok(add)
}