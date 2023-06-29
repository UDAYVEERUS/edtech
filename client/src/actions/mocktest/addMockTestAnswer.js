import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const addMockTestAnswer = (data, array) => {
    return (dispatch) => {
        addMockTestAnswerHelper({ data, array, dispatch })
    }
}

export const addMockTestAnswerHelper = async ({ data, array, dispatch }) => {
    console.log(data,array,"funcredux",typeof data);
    
    try {

        dispatch({
            type: CHANGE_VARIABLE,
            payload: {
                key: "mocktest_answer_array",
                value: array.concat(data)
            }
        })
    }
        // fetch(url,config).then(response=>response.json()).then(responseJson=>{
        //     console.log(responseJson)
        //     if(responseJson){
        //         dispatch({
        //             type:CHANGE_VARIABLE,
        //             payload:{
        //                 key:"products_array",
        //                 value:responseJson.data
        //             }
        //         })
        //     }



        // })
    catch(err){
        console.log(err)
    }

    }


