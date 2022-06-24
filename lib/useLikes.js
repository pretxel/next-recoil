import { useRecoilValue, useSetRecoilState } from 'recoil'
import { likesState } from './recoil-atoms'

const useLikes = () => ({
    likes: useRecoilValue(likesState),
    setLikes: useSetRecoilState(likesState)
})

export default useLikes;