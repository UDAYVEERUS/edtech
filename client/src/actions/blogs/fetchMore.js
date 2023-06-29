import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const blogsFetchMore = (page,array) => {
    return (dispatch) => {
        blogsFetchMoreHelper({ page,array, dispatch })
    }
}

export const blogsFetchMoreHelper = async ({ page,array, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const config = {
        headers,
        method: "GET",
       
    }

    const url = base_url + `/blogs/all?page=${page}`
    console.log(url,"fetch more check ",page)
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,response_json.page,url,"more")
        console.log(response_json.status === 200)
        if (response_json) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "blogs_array",
                    value: array.concat( response_json.data)
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
