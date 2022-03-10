import { useEffect, useState } from "react";

function FoodFetch(){
    
    let [food, updateFood]= useState()
    // let arrayFood=[
    //         {
    //             name:"",
    //             description:"",
    //             ingredie
    //         }

    // ]

    useEffect(() => {
        fetch('https://yummly2.p.rapidapi.com/feeds/list',
        {
            method: 'GET',
            url: 'https://yummly2.p.rapidapi.com/feeds/list',
            params: {limit: '24', start: '0'},
            headers: {
              'x-rapidapi-host': 'yummly2.p.rapidapi.com',
              'x-rapidapi-key': ''
            }
        })
            .then(j => j.json())
            .then(data => {
                const mapForFood = data.feed.map((e,i)=>{
                    const comida = {
                        name:e.display.displayName
                        // description: e.seo.web.meta-tags.description 
                    }
                 

                })
                updateFood(data)
                console.log(data)

                

            })

    }, [])
    console.log(food)
    return(
        <p>{food}</p>
    )




}
export default FoodFetch;