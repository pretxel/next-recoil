import { atom, selector } from 'recoil'
import { ADD_LIKE } from './actions'


export const likesState = atom({
    key: 'likes',
    default: []
})

export const addLike = selector({
    key: ADD_LIKE,
    get: ({ get }) => {
        const likes = get(likesState);

    }
})
