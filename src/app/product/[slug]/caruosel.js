import React from "react"
import Carousel from "react-multi-carousel"
import Item from "./Item"
import slider from "@/components/home/slider.json"
function Carousel () {
    return (
        <Carousel>
            {
                slider.map( item => <item key ={item.id} item={item}></item> )
            }

        </Carousel>
    )
}
 
export default Carousel



