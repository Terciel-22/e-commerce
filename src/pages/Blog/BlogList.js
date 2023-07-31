import { Component } from 'react'
import Post from './Post';


class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            posts: {}
        };
    }
    componentDidMount() {
        fetch("https://dummyjson.com/posts?limit=10")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    isLoaded: true,
                    posts: res.posts
                });
            });
    }

    render() {
        const { isLoaded, posts } = this.state;
        if (!isLoaded) {
            return (
                <section id="blog-container" className="container pt-5">
                    Loading...
                </section>
            );
        } else {
            return (
                <section id="blog-container" className="container pt-5">
                    <div className="row">
                        {posts.map((post, index) => {
                            return <Post key={index} post={post} />
                        })}
                    </div>
                </section>
            );
        }
    }
}

export default BlogList