import React from 'react';
import { Link } from 'react-router-dom';
import Wimper from '../assets/images/Wi.webp'
import Massage from "../assets/images/massage.webp"
import Peeling from "../assets/images/peeling.webp"
import Hautreinigung from "../assets/images/Hautreinigung3.webp"
import Kosmetikbehandlung from "../assets/images/Kosmetikbehandlungen1.webp"


const Category: React.FC = () => {
    return (
        <div style={{ marginTop: "80px" }} className='container pb-6' >
            <h1 className='d-flex justify-content-center align-items-center' style={{ fontFamily: "Montserrat, sans-serif", fontStyle: "normal", fontWeight: "400", color: "#c29a44", textAlign: "center" }}>
                Entdecke Unsere Services
            </h1>
            <div className="row justify-content-around mt-5" data-aos="fade">
                {services.map((service, index) => (
                    <div key={index} className="col-md-4 mt-2 d-flex justify-content-center align-items-center">
                        <div style={{ marginBottom: "20%" }} className="ui-card d-flex justify-content-center align-items-center rounded">
                            <Link to={service.link}>
                                <img src={service.imageUrl} style={{}} className="card-img-top" alt={service.title} />
                            </Link>
                            <div className="description card-body">
                                <h4 className="card-title">{service.title}</h4>
                                <Link to={service.link} className="ReadMore " style={{ backgroundColor: "pink", color: "black" }}>Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const services = [
    {
        title: "Wimpernverlängerung",
        imageUrl: Wimper,
        link: "/product/Wimpernverlängerung"
    },
    {
        title: "Gesichtsmassage",
        imageUrl: Massage,
        link: "/product/Gesichtsmassage"
    },
    {
        title: "Peeling",
        imageUrl: Peeling,
        link: "/product/Peeling"
    },
    {
        title: "Professionele Hautreinigung",
        imageUrl: Hautreinigung,
        link: "/product/Hautreinigung"
    },
    {
        title: "Kosmetikbehandlungen",
        imageUrl: Kosmetikbehandlung,
        link: "/product/Kosmetikbehandlungen"
    }
];

export default Category;
