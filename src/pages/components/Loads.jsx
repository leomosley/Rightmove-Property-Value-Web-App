import React, { useEffect, useState } from "react";
import firebase from "../utils/firebase";
import Card from "./Card";

function Loads() {

    const [loadsList, setLoadsList] = useState();

    useEffect(() => {
        const linkRef = firebase.database().ref("link");
        linkRef.on("value", (snapshot) => {
            const loads = snapshot.val();
            const loadsList = [];
            for (let index in loads) {
                loadsList.push([loads[index]])
            }
            
            setLoadsList(loadsList);
        });
    }, []);
    
    return (
        <div >
            {loadsList ? loadsList.map((load, index) => <Card load={load} key={index} />) : ""}
        </div>
    );
}

export default Loads;