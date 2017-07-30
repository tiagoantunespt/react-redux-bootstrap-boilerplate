import { 
  INCREMENT,
  FETCH_INFO
} from './types'

export const increment = (value) => ({
  type: INCREMENT,
  value
})

export const fetchInfo = (userId) => ({
  type: FETCH_INFO,
  userId
})
