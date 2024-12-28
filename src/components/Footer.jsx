import { Images } from "./AllImages";
import { Link } from "react-router-dom";
// import { SubService } from "../data/SubService";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export const Footer = () =>{
    return(
        <footer>
            <div className="container">
                <div className="grid-flex">
                    <div className="box">
                        <Link to="/"> <figure><img src={Images.Logo} alt="" /></figure> </Link>
                        <p>ADVSOFT LLC offers a comprehensive range of services beyond just web solutions. Our offerings span Web Designing, Software Development, BPO Management, Technical Risk Management, App Development, and more. With our 24x7 customer support, we ensure swift resolution of your queries right from the first call.</p>
                    </div>
                    <div className="box">
                        <h5>Our Services</h5>
                        <ul>
                            <li><Link onClick={() => window.scrollTo({ top: 0 })} to="/">Home</Link></li>
                            <li><Link onClick={() => window.scrollTo({ top: 0 })} to="/about">About</Link></li>
                            <li><Link onClick={() => window.scrollTo({ top: 0 })} to="/contact">Contact Us</Link></li>
                            {/* {SubService.map((data) => {
                                const {name, url} = data;
                                return(
                                    <li><Link to={url} onClick={() => window.scrollTo({ top: 0 })}>{name}</Link></li>
                                )
                            })} */}
                        </ul>
                    </div>
                    <div className="box">
                        <h5>Contact Us</h5>
                        <ul className="contact-detail">
                            <li>
                                <Link><FaLocationDot /> <span>Branch Office:</span>  1318 South Woodstock Street, Philadelphia, PA 19146</Link>
                            </li>
                            <li>
                                <Link to="tel:+1-833-929-0975"><IoCall /> <span>Tollfree:</span>  +1-833-929-0975</Link>
                            </li>
                            <li>
                                <Link to="mailto:customercare@advsoft.us"><IoMdMail /> <span>Email:</span>  customercare@advsoft.us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}