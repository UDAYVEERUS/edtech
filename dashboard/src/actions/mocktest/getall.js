import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getMockTest = (data) => {
    return (dispatch) => {
        getMockTestHelper({ data, dispatch })
    }
}

export const getMockTestHelper = async ({ dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + "/mocktest/getallquestion"
    try {
        dispatch({
            type: CHANGE_VARIABLE,
            payload: {

                key: "loading",
                value: true

            }
        })
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 200) {
            
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "mocktest_array",
                    value: response_json.data

                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
    
                    key: "loading",
                    value: false
    
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


    }
    catch (err) {
        console.log(err)
    }
}
