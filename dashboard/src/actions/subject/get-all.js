import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getSubjects = (data) => {
    return (dispatch) => {
        getSubjectsHelper({ data, dispatch })
    }
}

export const getSubjectsHelper = async ({data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + `/subject/getsubjectsbyid/${data}`
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 200) {
            console.log(response_json.data,"jhere")    
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
