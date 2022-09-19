import { useState } from "react";


const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("likeButton");
    const [buttonClass2, setButtonClass2] = useState("dislikeButton");
    
    function handleClick(event){
        if(event.target.id==='like'){
            if (buttonClass === "likeButton"){
                setButtonClass("likeButtonActive");
                setButtonClass2("dislikeButton");
            }
            else {
                setButtonClass("likeButton");
            }
        }
        else if(event.target.id==='dislike'){
            if(buttonClass2 === "dislikeButton"){
               setButtonClass2("dislikeButtonActive");
               setButtonClass("likeButton");
            }
            else { 
                setButtonClass2("dislikeButton");
             }
        }
    }
    return (
        <div>
            
            <button  className={buttonClass} onClick={handleClick}><i id="like" className="fa fa-thumbs-up"></i></button> 
            <button  className={buttonClass2} onClick={handleClick}><i id="dislike" className="fa fa-thumbs-down"></i></button>   
        </div>  
    )

}

export default CustomButton;