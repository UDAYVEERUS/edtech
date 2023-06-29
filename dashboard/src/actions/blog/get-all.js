import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getAllBlogs = (data) => {
    return (dispatch) => {
        getAllBlogsHelper({ data, dispatch })
    }
}

export const getAllBlogsHelper = async ({ dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + "/blogs/all/dashboard"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 200) {
            console.log(response_json.data,"jhere")    
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "blogs_array",
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
