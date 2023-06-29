import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { createToast } from "../toast"

export const deleteCourse = (data) => {
    return (dispatch) => {
        deleteCourseHelper({ data, dispatch })
    }
}

export const deleteCourseHelper = async ({ data, dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }


    const config = {
        headers,
        method: "DELETE",
    }
    const url = base_url + `/course/deletecourse/${data}`
    try {
        dispatch({
            type: CHANGE_VARIABLE,
            payload: {

                key: "loading",
                value: true

            }
        })
        createToast("deleting", "info")
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 200) {
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
            createToast("deleted", "success")
            setTimeout(() => {
                window.location.reload()
            }, 1500);

        }

    }
    catch (err) {
        console.log(err)
    }
}
