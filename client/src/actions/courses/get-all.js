import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const courseFetch = (data) => {
    return (dispatch) => {
        courseFetchHelper({ dispatch })
    }
}

export const courseFetchHelper = async ({dispatch }) => {
    console.log(base_url, "rkgmjn")
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET"
    }
    // console.log("ejrfm")
    const url = base_url + "/course/getcourses"
    console.log(url,"fetch ")
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,"herhehr24")
        // console.log(response_json,response_json.page,"heeer")
        if (response_json.status === 200) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "courses_array",
                    value: response_json.data
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
