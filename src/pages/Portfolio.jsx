import react from "react";
import { Images } from "../components/AllImages";

export const Portfolio = () =>{
    return (
        <main className="headerheight">
            <section className="Herovideo">
                <figure><img src={Images.AboutBan} alt="" /></figure>
                <div className="content">                   
                    <h2>Portfolio</h2>                               
                </div>
            </section>
        </main>
        )
}