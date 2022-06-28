import React, { useState } from 'react';
import firebase from "../utils/firebase";

function Form() {

    const links = [];
    const linkRef = firebase.database().ref("link");
    linkRef.on("value", (snapshot) => {
        const values = snapshot.val();
        for (let URL in values) {
            links.push(values[URL].URL)
        }
    })

    const [link, setLink] = useState("");

    const handleOnChange = (e) => {
        setLink(e.target.value);
    };

    const submitLink = () => {

        const template = "https://www.rightmove.co.uk/property-for-sale/find.html?";

        if (link.includes(template) == true && (link in links) == false) {
            const content = {
                URL: link,
                data: {
                    name,
                    sold: [],
                    forSale: [],
                },
            };
            linkRef.push(content);
            document.getElementById("clear").value="";
        }
        
    };

    
    
    return (
        <div className="form">
            <h1>Scrape Values</h1>
            <p>Enter the Rightmove link to the area that you want to scrape the property values from</p>
            <input id="clear" placeholder="Enter link" type="url" onChange={handleOnChange}/>
            <button className="submit" onClick={submitLink}>Submit</button>
        </div>
    );
}

export default Form;