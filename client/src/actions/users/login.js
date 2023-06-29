import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"
export const loginUser = (data) => {
    return (dispatch) => {
        loginUserHelper({ data, dispatch })
    }
}

export const loginUserHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const body = JSON.stringify({
        name: data.name,
        email: data.email
    })

    const config = {
        headers,
        body,
        method: "POST"
    }
    // console.log("ejrfm")
    const url = base_url + `/user/login`
    console.log(data, "here reg user")
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json, 31, "her")
        if (response_json.status === 200) {

            await localStorage.setItem("user_id", response_json.data._id)
            createToast("Successfully login", "success")
            window.location.replace("/")

        }
        else {
            createToast("Unable to login try again", "error")
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
