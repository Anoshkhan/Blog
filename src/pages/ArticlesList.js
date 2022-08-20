import React from "react";
import articleContent from "./article-content";
//articles component
import Articles from "../components/Articles";

const ArticlesList = () => {
    return(
        <>  
            <div className="px-2 w-1/1">
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900 px-3 '>
            Articles
            </h1>
            <div className='container py-4 mx-auto'>
                <div className="flex flex-wrap -m-4">
                <Articles articles={articleContent}/>
                </div>
            </div>
            </div>
        </>
    )
};
export default ArticlesList;