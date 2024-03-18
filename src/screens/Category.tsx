import React from 'react';
import { Link } from 'react-router-dom';

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
                                <img src={service.imageUrl} className="card-img-top" alt={service.title} />
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
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Revbq9e2fgNWAcDgKP-C0nEA0sV3D9Wd5A&usqp=CAU",
        link: "/product/Wimpernverlängerung"
    },
    {
        title: "Gesichtsmassage",
        imageUrl: "https://media.dm-static.com/image/upload/q_auto:eco,f_auto/content/rootpage-dm-shop-de-de/resource/image/1475790/landscape/800/562/77ae891bc97467314452953ffb955695/9052F736DD74EAE3BC8B2771AE9F3037/gesichtsmassage-aufmacher-1.jpg",
        link: "/product/Gesichtsmassage"
    },
    {
        title: "Peeling",
        imageUrl: "https://www.koruhastanesi.com/images/haber/main/what-is-chemical-peeling-3842.webp",
        link: "/product/Peeling"
    },
    {
        title: "Professionele Hautreinigung",
        imageUrl: "https://noahklinik-cosmetics.de/wp-content/uploads/2024/01/hautreinigung.jpg",
        link: "/product/Hautreinigung"
    },
    {
        title: "Kosmetikbehandlungen",
        imageUrl: "https://www.esthetic-concept-heilbronn.de/upload/large/kosmetikbehandlungen_large_KXJF9z3Nr3.jpg",
        link: "/product/Kosmetikbehandlungen"
    }
];

export default Category;
