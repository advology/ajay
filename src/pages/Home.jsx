import react from "react";
import { Images } from "../components/AllImages";
import { Link } from "react-router-dom";
import { showPopup } from "../components/Action";
import { useDispatch } from "react-redux";

export const Home = () =>{
    const dispatch = useDispatch();
    return (
        <main className="headerheight">
            <section className="Herovideo">
                <figure><img src={Images.AboutBan} alt="" /></figure>
                <div className="content">                   
                    <h2>Home Page</h2>  
                    <Link onClick={() => dispatch(showPopup())}>Connect Now</Link>                             
                </div>
            </section>
        </main>
        )
}