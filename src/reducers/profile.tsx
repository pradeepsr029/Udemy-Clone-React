import { REDUCERS_TYPE } from "../shared/constants";

export default (state = {}, action: any) => {
    switch (action.type) {
        case REDUCERS_TYPE.USER_PROFILE:
            return {
                ...action.payload[0].profile
            };
        default:
            return { name: "Rahul", age: "27", image: "", email: "sdfs@gmail.com", number: "sdfs" };
    }
};