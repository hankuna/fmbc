import { CHANGE_A } from '../constants/newsTypes'

export const actiona = (a) => {
    return {
        type: 'CHANGE_A',
        a
    }
}