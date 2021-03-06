import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import './Picture.css';
import { useParams } from 'react-router-dom';
import * as pictureActions from '../../store/picture';

//Will use useParams to get the pictureId.
//Needs to display
     //the image
     //who uploaded it
     //any descriptions or tags
     //comments

const Picture = () => {
    const { pictureId } = useParams();
    const dispatch = useDispatch();
    const picture = useSelector((state) => state.picture.picture);
    const thisUser = useSelector((state) => state.picture.user);
    const [username, setUsername] = useState('')
    const [userId, setUserId] = useState(0);

    const { getOnePicture } = pictureActions;

    useEffect(() => {
        dispatch(getOnePicture(pictureId))
    }, [dispatch, getOnePicture, pictureId])

    useEffect(() => {
        if (thisUser) {
            setUsername(thisUser.username || '');
            setUserId(thisUser.id || 0);
        }
    })

    // const correctPicture = pictures.find((pic) => pic.id === pictureId)

    // const loadedPictures = pictures.length > 0 ? pictures : null;
    
    return (
        <>
            {/* <h1>Pictures!!!</h1> */}
            <h1>Uploaded by <a href={`/users/${userId}`}>{username}</a></h1>
            { picture !== undefined && 
            <div className="picture-div">
                <h2 className="title">{picture.title}</h2>
                <img className="uploaded-picture" src={picture.imageLink} alt="uploaded" />
                <div className="description-area">{picture.description}</div>
            </div>
            }
            {/* { pictures !== undefined && pictures.length > 1 && pictures.map((pics) => <a href={`/pictures/${pics.id}`}><img className="uploaded-picture" src={pics.imageLink} alt="uploaded" /></a>)} */}
            {/* { pictures !== undefined && pictures.length > 1 && <img className="uploaded-picture" src={correctPicture.imageLink} alt="uploaded" /> } */}
        </>
    )
}

export default Picture;