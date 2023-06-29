import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getMockTestBycourse = (data) => {
    return (dispatch) => {
        getMockTestBycourseHelper({ data, dispatch })
    }
}

export const getMockTestBycourseHelper = async ({ data,dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + `/mocktest/getquestionbycourse/${data}`
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
        console.log(response_json)
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
