import React from 'react'

const Post = ({post}) => {
    let imageTag = "";
    if(post.urlToImage===null)
    {
        imageTag = <img src="https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png" alt={post.title} className="img-fluid w-100"/>;
    } else {
        imageTag = <img src={post.urlToImage} alt={post.title} className="img-fluid w-100"/>
    }
    return (
        <div className="post col-lg-6 col-md-6 col-sm-12 pb-5" onClick={()=>window.open(post.url)}>
            <div className="post-img">
                {imageTag}
            </div>
            <h3 className="text-center font-weight-normal pt-3">{post.title}</h3>
            <p className="text-center">{post.publishedAt}</p>
        </div>
    )
}

export default Post