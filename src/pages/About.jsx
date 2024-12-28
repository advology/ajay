import react from "react";
import { Images } from "../components/AllImages";

export const About = () =>{
    return (
        <main className="headerheight">
            <section className="Herovideo">
                <figure><img src={Images.AboutBan} alt="" /></figure>
                <div className="content">                   
                    <h2>About Us</h2>                               
                </div>
            </section>
        </main>
        )
}