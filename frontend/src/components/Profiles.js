import React, {useState, useEffect} from "react";
import ProfileServices from "../services/ProfileServices";

const Profiles = () => {

    const [profile, setProfile] = useState([])

    useEffect(()=>{
        ProfileServices.getProfile().then(response=>{
            setProfile(response)
            console.log(response)})
    },[])

    return (
        <div>
        {profile.map(user => (
            <div key={user.id}>
                <h1>{user.username}</h1>
                <img src = {`http://localhost:8000/${user.picture}`}/>
                </div>
        ))}
        </div>
    );
}

export default Profiles;