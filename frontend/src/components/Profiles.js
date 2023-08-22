import React, {useState, useEffect} from "react";
import ProfileServices from "../services/ProfileServices";

const Profiles = () => {

    const [profile, setProfile] = useState('')

    useEffect(()=>{
        ProfileServices.getProfile().then(response=>setProfile(response))
    })

    return (
        <div>
        <h1>{profile}</h1>
        </div>
    );
}

export default Profiles;