import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import firebase from "../utils/firebase";

function Form() {

    const linksRef = firebase.database().ref("link");
    const navigate = useNavigate();
    const urls = [];
    
    linksRef.on("value", (snapshot) => {
        const values = snapshot.val();
        for (let URL in values) {
            urls.push(values[URL].URL)
        }
    })

    const [link, setLink] = useState("");

    const handleOnChange = (e) => {
        setLink(e.target.value);
    };

    const submitLink = () => {

        const template = "https://www.rightmove.co.uk/property-for-sale/find.html?";

        if (link.includes(template) == true && (link in urls) == false) {
            const data = {
                URL: link,
                title: "",
                scraped: false,
                dateAdded: "",
                data: [{
                    URL: "",
                    name: "",
                    price: "",
                    sqft: 0,
                    bedrooms: 0,
                    bathrooms: 0,
                    description: "",
                    dateAdded: "",
                    showcaseImg: "",
                }]
            };

            linksRef.push(data);

            navigate("/loaded");
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