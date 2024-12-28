import react from "react";
import { Images } from "../components/AllImages";

export const Contact = () =>{
    return (
        <main className="headerheight">
            <section className="Herovideo">
                <figure><img src={Images.AboutBan} alt="" /></figure>
                <div className="content">                   
                    <h2>Contact Us Content</h2>                               
                </div>
            </section>
        </main>
        )
}