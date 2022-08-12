import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
    const {name} = useParams();
    return(
        <>
            <h1>This is an {name} article</h1>
        </>
    )
};
export default Article;