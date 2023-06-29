import { CHANGE_VARIABLE } from "../type";


export const hideModal = (data) => {

    return (dispatch) => {

        hideModalHelper({ data, dispatch })

    }

}
export const hideModalHelper = async ({ data, dispatch }) => {


    dispatch({
        type: CHANGE_VARIABLE,
        payload: {
            key: data,
            value: false
        }
    })


}
