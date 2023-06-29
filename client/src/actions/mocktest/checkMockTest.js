import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const checkMockTest = (array) => {
    return (dispatch) => {
        checkMockTestHelper({array,dispatch })
    }
}

export const checkMockTestHelper = async ({array,dispatch }) => {
    console.log(array,"checkmock")
    const headers = {
        "Content-type": "application/json"
    }

    const body = JSON.stringify({
        answers:array
    })

    const config = {
        headers,
        body,
        method: "POST"
    }
    // console.log("ejrfm")
    const url = base_url + `/mocktest/checkanswer`
    console.log(url,"fetch ",body)
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,"herhehr24")
        // console.log(response_json,response_json.page,"heeer")
        if (response_json.status === 200) {
           
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "resultData",
                    value: response_json
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
