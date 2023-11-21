import { useState } from "react";

export default function Names() {
    const [name, setName] = useState("");

    async function replaceName() {
        const reponse = await fetch("https://randomuser.me/api/"); // fetch la source 
        const data = await reponse.json();

        const name = data.results[0].name;
        setName(name.first + " " + name.last);
    }

    return(
        <div className="App">
            <div>{name}</div>
            <button onClick={replaceName}>Changer nom</button>
        </div>
    );
};
 