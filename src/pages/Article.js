import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Articles from "../components/Articles";
import NotFound from "./NotFound";
const Article = () => {
    const {name} = useParams();
    const article = articleContent.find((aritcle) =>aritcle.name === name);
    if(!article) return <NotFound />
    const otherArticles = articleContent.filter(article => article.name !== name)
    return(
        <>  
            <div className="w-1/1 px-3">
            <h1 className="sm:text-4xl text-2xl font-bold my-6 text-indigo-900 ">{article.title}</h1>
            {article.content.map((paragraph, index)=>(
                <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
                    {paragraph}
                </p>

            ))}
            <h2 className='sm:text-4xl text-2xl font-bold my-4 text-gray-900 '>
                Other Articles
            </h2>
            <div className="flex flex-wrap -m-4">
                <Articles articles={otherArticles}/>
            </div>
            </div>
        </>
    );
};
export default Article;