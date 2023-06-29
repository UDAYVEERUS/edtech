import { CHANGE_VARIABLE } from "./type"
export const base_url = "https://edtech-server.onrender.com"
export const changeVariable = (key, value) => {
	
    return ({

      type: CHANGE_VARIABLE,
      payload: {

          key,
          value

      }

    })
    
}
