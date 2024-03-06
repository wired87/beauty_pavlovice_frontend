import React from 'react';
import { Link } from 'react-router-dom';

const Category: React.FC = () => {
    return (
        <div className='container mt-5 pb-5'>
            <h1 style={{ fontFamily: "Montserrat, sans-serif", fontStyle: "normal", fontWeight: "400", color: "#c29a44" }}>
                Entdecke Unsere Services:
            </h1>
            <div className="row justify-content-around mt-4">
                {services.map((service, index) => (
                    <div key={index} className="col-md-4 mt-2 d-flex justify-content-center align-items-center">
                        <div className="ui-card d-flex justify-content-center align-items-center rounded">
                            <img src={service.imageUrl} className="card-img-top" alt={service.title} />
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
        title: "wimpernverlängerung",
        imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
        link: "/product/Wimpernverlängerung"
    },
    {
        title: "Gesichtsmassage",
        imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
        link: "/product/Gesichtsmassage"
    },
    {
        title: "Peeling",
        imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
        link: "/product/Peeling"
    },
    {
        title: "Professionele Hautreinigung",
        imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
        link: "/product/Hautreinigung"
    },
    {
        title: "Kosmetikbehandlungen",
        imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
        link: "/product/Kosmetikbehandlungen"
    }
];

export default Category;
