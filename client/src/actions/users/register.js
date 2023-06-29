import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"
export const registerUser = (data) => {
    console.log(data,5)
    return (dispatch) => {
        registerUserHelper({ data, dispatch })
    }
}

export const registerUserHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const body = JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        image: data.image
    })

    const config = {
        headers,
        body,
        method: "POST"
    }
    // console.log("ejrfm")
    const url = base_url + `/user/adduser`
    console.log(data,"here reg user")
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(data,"here reg user",response_json)
        if (response_json.status === 201) {

            await localStorage.setItem("user_id", response_json.data._id)
            createToast("Successfully Register", "success")
            window.location.replace("/")

        }
        else{

            createToast("Unable to register","error")
        }
        // window.location.replace("/signup")

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
