import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const deleteMockTestQuestion = (data) => {
    return (dispatch) => {
        deleteMockTestQuestionHelper({ data, dispatch })
    }
}

export const deleteMockTestQuestionHelper = async ({ data,dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "DELETE",
    }
    const url = base_url + `/mocktest/deletequestion/${data}`
    try {
        
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json)
        if (response_json.status === 200) {
            
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "message",
                    value: response_json.message

                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "messageStatus",
                    value: response_json.status

                }
            })
            console.log(response_json)
        
           
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


    }
    catch (err) {
        console.log(err)
    }
}
