import { fetch } from './csrf';

const UPLOAD = 'picture/UPLOAD';

export const addAPicture = (picture) => {
    return {
        type: UPLOAD,
        picture,
    }
}


//change code
export const uploadPicture = (picture) => async (dispatch) => {
    const  { image, title, description, userId } = picture;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("userId", userId);
    if (image) formData.append("image", image);

    let entryObj = {};

    for (let entry of formData.entries()) {
        let key = entry[0];
        let value = entry[1];
    }


    // const response = await fetch(`/api/pictures`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         image,
    //         title,
    //         description,
    //         userId,
    //     }),
    // });


    const response = await fetch(`/api/pictures/`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
    debugger;
    dispatch(addAPicture(response.data.picture));
};

// if (response.ok) {
//     const picture = await response.json();
//     dispatch(addAPicture(picture));
//     return picture;
// }

//------

const intiialState = {}

const pictureReducer = (state = intiialState, action) => {
    let newState;
    switch(action.type) {
        case UPLOAD: {
            newState = Object.assign({}, state);
            debugger
            newState[action.picture.id] = action.picture
            return newState;
        }
        default:
            return state;
    }
}

export default pictureReducer;