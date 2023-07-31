import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

const Post = ({ post }) => {
    return (
        <div className="post col-lg-6 col-md-6 col-sm-12 pb-5" onClick={() => window.open(post.url)}>
            <div className="post-img">
                <img src={'https://picsum.photos/id/' + (post.id + 9) + '/200/300'} alt={post.title} className="img-fluid w-100" />
            </div>
            <h3 className="text-center font-weight-normal pt-3">{post.title}</h3>
            <p className="text-center">{post.publishedAt}</p>
            <div className="d-flex justify-content-center">
                <div>
                    <FontAwesomeIcon icon={faTags} />
                    <span className="ms-2">
                        {
                            post.tags.map((tag, index) => <span key={index} className="badge rounded-pill bg-info text-dark">{tag}</span>)
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post