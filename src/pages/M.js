import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function M() {


    let a = []




    const [users, setUsers] = useState([]);
    let navigate = useNavigate();

    const { id, ido } = useParams();
    console.log("hhhhhhhhhhhhh")
    console.log(id)
    console.log(ido)
    console.log("hhhhhhhhhhhhh")

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8070/u");



        console.log(result.data)
        let k = 0;
        for (let i in result.data) {
            if (((result.data[i].noe == id) && (result.data[i].noa == ido)) || ((result.data[i].noe == ido) && (result.data[i].noa == id))) {
                a[k] = result.data[i]
                k++
            }

        }
        setUsers(a);
        console.log(a)
    };

    const [user, setUser] = useState({
        noe: "",
        noa: "",
        m: "",
    });
    const { noe, noa, m } = user;
    user.noe = id
    user.noa = ido

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8070/s", user);
        window.location.reload();



    };



    return (
        <div>
            {users.map((user, index) => (



                user.noe === id ? (<p class="message recu">{user.m}</p>) : (<p class="message env">{user.m}</p>)



            ))}
            <form class="m" onSubmit={(e) => onSubmit(e)}>
                <textarea name="m" cols="50" rows="3" placeholder="Ecrire votre message..." value={m} onChange={(e) => onInputChange(e)}></textarea>
                <button type="submit" className="btn btn-primary mx-2 s">Envoyer un message</button>
            </form>
        </div>


    );
}


export default M
