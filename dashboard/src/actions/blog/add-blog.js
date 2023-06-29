import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"

export const AddBlog = (data) => {
    return (dispatch) => {
        AddBlogHelper({ data, dispatch })
    }
}

export const AddBlogHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const body = JSON.stringify({
        title: data.title,
        description: data.description,
        descriptionShort:data.descriptionShort,
        // image:data.image
    })

    
    const config = {
        headers,
        method: "POST",
        body
    }
    console.log(data, "here is sending data")
    const url = base_url + "/blogs/addblog"
    try {
        dispatch({
            type: CHANGE_VARIABLE,
            payload: {

                key: "loading",
                value: true

            }
        })
        createToast("Adding", "info")
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,"ehjrherh")
        if (response_json.status === 201) {
            console.log(response_json, "checkadd")
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "loading",
                    value: false

                }
            })
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
            createToast("Added", "success")
            setTimeout(() => {
                window.location.reload()
            }, 1500);

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
