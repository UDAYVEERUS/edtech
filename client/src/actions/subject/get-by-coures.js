import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const subjectsFetchByCourse = (data) => {
    return (dispatch) => {
        subjectsFetchByCourseHelper({ data,dispatch })
    }
}

export const subjectsFetchByCourseHelper = async ({data,dispatch }) => {
    // console.log(base_url, "rkgmjn")
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET"
    }
    // console.log("ejrfm")
    const url = base_url + `/subject/getsubjectsbyid/${data}`
    console.log(url,"fetch ")
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        // console.log(response_json,"herhehr24")
        // console.log(response_json,response_json.page,"heeer")
        if (response_json.status === 200) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "subjects_array",
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


