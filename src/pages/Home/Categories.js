import WomensDresses from "./Categories/WomensDressesClass";
import MensShirts from "./Categories/MensShirtsClass";
import HomeDecorations from "./Categories/HomeDecorationsClass";
import Furnitures from "./Categories/FurnituresClass";

export default function Categories(){
    return (
        <>
            <WomensDresses />
            <MensShirts />
            <HomeDecorations />
            <Furnitures />
        </>
    );
}