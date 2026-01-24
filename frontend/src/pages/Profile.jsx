import { useState, useEffect } from "react";
import api from "../services/api.js";

function Profile() {
    const [email, setEmail] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        api.get("/users/getUser")
            .then((response) => {

                setTimeout(() => {
                    const user = response.data.data;
                    if (user) {
                        setEmail(user.email ?? "");
                        setFirst_name(user.first_name ?? "");
                        setLast_name(user.last_name ?? "");
                        setId(user.id ?? "");
                    } 
                    
                    setLoading(false);
                }, 2000);
            })
            .catch((err) => {
                console.error(err);
            })
    }, []);

    if (loading) {
        return (
            <div className="bg-gray-900 min-h-screen font-sans w-screen text-white text-3xl flex justify-center items-center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-900 min-h-screen font-sans w-screen text-white text-3xl flex flex-col justify-center items-center gap-4 p-8">
            <h1 className="text-4xl font-bold mb-4">Profile</h1>
            <div className="flex flex-col gap-2 text-left w-full max-w-md">
                <p><span className="text-gray-400">ID:</span> {id}</p>
                <p><span className="text-gray-400">First name:</span> {first_name}</p>
                <p><span className="text-gray-400">Last name:</span> {last_name}</p>
                <p><span className="text-gray-400">Email:</span> {email}</p>
            </div>
        </div>
    );
}

export default Profile;

