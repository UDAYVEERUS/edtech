import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"

export const AddMockTest = (data) => {
    return (dispatch) => {
        AddMockTestHelper({ data, dispatch })
    }
}

export const AddMockTestHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }

    const body = JSON.stringify({
        course_name: data.course,
        question: data.question,
        option1: data.option1,
        option2: data.option2,
        option3: data.option3,
        option4: data.option4,
        answer: data.answer,
        subject_name:data.subject
    })

    const config = {
        headers,
        method: "POST",
        body
    }
    console.log(data, "here is sending data")
    const url = base_url + "/mocktest/addquestion"
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
            createToast("Adding", "success")
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
