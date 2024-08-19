import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Gallery() {

    const [models, setModels] = useState([]);

    useEffect(() => {
        axios.get("/api/models")
          .then(response => setItems(response.data))
          .catch(error => console.error("Failed to fetch models:", error));
      }, []);

    return (
        <div className="show gallery">
            <h1>Gallery</h1>
            <ul>
                {models.map(model => {
                    <li key={model._id}>
                        <h3>
                            {model.filename}
                        </h3>
                    </li>
                })}
            </ul>
        </div>
    );
}