 
import React from 'react';
import ReactDOM from 'react-dom/client'


const Header =()=>{
    return (
        <div className='res-header'>
           <div className='logo-container'>
               <img className='logo' src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg" alt="res-logo" />

           </div>

           <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
           </div>
        </div>
    )
}

const ResCards =(props) =>{
    return (
        <div className='res-card'>
            <img className='res-image' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/5f45f33f-b4c0-48b5-b8da-7309819958fe_361087.jpg" alt="image" />

            <h2>{props.resName}</h2>
            <h3>{props.cusine}</h3>
            <div className='d-flex'>
            <h4>4.4 stars</h4>
            <h4>35 mins</h4>
            </div>

            <h5>Harsh Nagar</h5>
        </div>
    )
}

const Body =()=>{
    return(
        <div className='body'>
           <div className='search'>Search</div>
           <div className='res-container'>
            {/* passing props to the component to make card dynmic  */}
            <ResCards resName="The Good Bowl" cusine="Biryani,North Indians,Panjabi"></ResCards>
            <ResCards resName="Kfc" cusine="Burger,Any one,Panjabi"></ResCards>

          

           </div>
        </div>
    )
}

const Applayout = () =>{
 return (
 <div className='app'>
    <Header></Header>
    <Body></Body>
 </div>
)
}
   

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Applayout/>)