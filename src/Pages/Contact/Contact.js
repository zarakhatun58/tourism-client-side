import React from 'react';
import { FaPhoneSquare,FaMapMarkerAlt,FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div class="container py4">
            <hr/>
            <h5 className="text-danger">Contact Us</h5>
            <h1>If You Have Any Question Drop A Message</h1>
            <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-4 pt-3">
                <div class="col">
                    <form className="mb-3">
                        <input className="w-100 py-2 mt-1" type="text" placeholder="Name"/>
                        <input className="w-100 py-2 mt-1" type="email" placeholder="Name"/>
                        <input className="w-100 py-2 mt-1" type="text" placeholder="Subect"/>
                        <textarea className="w-100 py-2 mt-1" type="text" placeholder="Your Message"/>
                        <button className=" btn btn-primary w-100 py-2 mt-1" type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="col">
                    <h5 className="d-flex">
                        <span className="fs-2 me-3 text-danger">
                            <FaMapMarkerAlt/>
                        </span>
                        <span>India, Kolkata</span>
                    </h5>
                    <h5 className="d-flex">
                        <span className="fs-2 me-3 text-danger">
                            <FaPhoneSquare/>
                        </span>
                        <span>
                            <p>(+1) 740-395-3829</p>
                            <p>(+1) 740-982-9821</p>
                        </span>
                    </h5>
                    <h5 className="d-flex">
                        <span className="fs-2 me-3 text-danger">
                            <FaEnvelope/>
                        </span>
                        <span>
                            <p>help@turista.com</p>
                            <p>info@turista.com</p>
                        </span>
                    </h5>
              
                </div>
            </div>
        </div>
    );
};

export default Contact;