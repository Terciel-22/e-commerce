import Navbar from "../../components/Navbar";
import BlogList from "./BlogList";
import Footer from "../../components/Footer";

function Blog(){
    return(
        <>
            <Navbar appName="Terciel"/>

            <section id="blog-home" className="pt-5 mt-5 container">
                <h2 className="font-weight-bold pt-5">Blogs</h2>
                <hr />
            </section>
            <BlogList />
            
            <Footer />
        </>
    );
}


export default Blog;