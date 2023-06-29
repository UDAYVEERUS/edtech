import { CHANGE_VARIABLE } from "../actions/type"
const INITIAL_STATE = {
    blogs_array:[],
    courses_array:[],
    subjects_array:[],
    mocktest_array:[],
    mocktest_answer_array:[],
    resultData:"",
    currentPage:null,
    pages:null
    
}

const reducers = (state=INITIAL_STATE,action)=>{
    switch (action.type) {

        case CHANGE_VARIABLE:
      		return {...state, [ action.payload.key]: action.payload.value }
        default:
            return state

    }
}
export default reducers