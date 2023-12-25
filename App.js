//HMR- Hot Module Reload - it means parcel will keep track of everything changes
// File Watchers algorithm - written in C++
//Parcel
//HTTPS on dev
// why to put parcel cache in gitignore
//anything which can put on server can be put on gitignore
//port Number
//Consistent Hashing Alogrithm
//zero config bundler
import React from "react";
import ReactDOM from "react-dom/client";

//JSX
//header
         //-Logo
         //- List item (Right side)
         //Cart

        //body
        //-Search bar
        //-Restraunt List
           //image
           //Name
           //Rating
           //Cuisines

        //Footer
           //-links
           //-Copyright
const Title =()=>(
    <a href= "/">
    <img className="logo" src="https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg" alt="logo"/>
    </a>
)

// composing components
const Header  = ()=>{
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
};

const BurgerKing = {
    name:"Burger King",
    image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-731189,resizemode-75,msid-72863458/markets/stocks/news/burger-king-india-could-be-a-better-treat-than-mcdonalds-franchisee/burger-thnkstck.jpg",
    cusines: ["Burger","American"],
    rating: "4.3"
}
const RestaurantCard =()=>{
    return (
        <div className="card">]
        <img  src={BurgerKing.image}/>
            <h2>{BurgerKing.name}</h2>
            <h3>{BurgerKing.cusines.join(", ")}</h3>
            <h4>{BurgerKing.rating}</h4>
        </div>
    )
}

const Body =()=>{
    return <div class="restaurant-list">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
    </div>
}

const Footer =()=>{
    return (
        <h3>Body</h3>
    )
}
const AppLayout = ()=>{
    return (
        <>
            <Header />
            <Body />
            <Footer/>
            </>
        
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
