import Category from "./CategoryClass";
import Contact from "./ContactClass";

function Content(){
    let guitars = [["Strat","Guitar 1 description","1,999","https://globalmusic.ph/wp-content/uploads/2021/12/ST-0037-RED-8.-600x600.png"], ["Les Paul","Guitar 2 description","2,999","https://d1aeri3ty3izns.cloudfront.net/media/47/472451/1200/preview_2.jpg"], ["Explorer","Guitar 3 description","6,999","https://cdn.shopify.com/s/files/1/0493/0053/7510/products/EIXPEBNH1_1_2048x.jpg?v=1641892879"]];
        
    return (
        <>
            <div className="container">
                <Category 
                    name="Guitars"
                    list={guitars}
                />

                <Contact />
            </div>
        </>
    );
    
}
export default Content;