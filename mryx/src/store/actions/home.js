import { CHANGE_B, CHANGE_A_SUCESS, CHANGE_A_REQUEST } from '../constants/homeType'
 

export const actionC = () => {//清缓存
    return {
        type: CHANGE_A_REQUEST
    }
}
export const actionB = (content) => {//内容
    return {
        type: CHANGE_B,
        content
    }
}
export const actionA = (content, mryxList) => {//列表
    return {
        type: CHANGE_A_SUCESS,
        content,
        mryxList
    }
}