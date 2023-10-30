import { DELETE_CONTACT, FIND_CONTACT, GET_CONTACT_LIST, POST_CONTACT } from "../../services/Contact";

const setFindContact = (dispatch: Dispatch<ContactAction>) => async (
    text: string
    ) => {
    try {
        dispatch({ type: FIND_CONTACT, payload: text });
    } catch (error) {
        console.log(error);
    }
}

const setAddContact = (dispatch: Dispatch<ContactAction>) => async (
    text: string
    ) => {
    try {
        dispatch({ type: POST_CONTACT, payload: text });
    } catch (error) {
        console.log(error);
    }
}

const setDeleteContact = (dispatch: Dispatch<ContactAction>) => async (
    text: string
    ) => {
    try {
        dispatch({ type: DELETE_CONTACT, payload: text });
    } catch (error) {
        console.log(error);
    }
}

const getContact = (dispatch: Dispatch<ContactAction>) => async (
    text: string
    ) => {
    try {
        dispatch({ type: GET_CONTACT_LIST, payload: text });
    } catch (error) {
        console.log(error);
    }
}