import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const blogsFetch = (data) => {
    return (dispatch) => {
        blogsFetchHelper({ data, dispatch })
    }
}

export const blogsFetchHelper = async ({ data, dispatch }) => {
    console.log(base_url, "rkgmjn")
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET"
    }
    // console.log("ejrfm")
    const url = base_url + "/blogs/all?page=1"
    console.log(url,"fetch ")
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,response_json.page,"heeer")
        if (response_json.status === 200) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "blogs_array",
                    value: response_json.data
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "currentPage",
                    value: response_json.page
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "pages",
                    value: response_json.pages
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
