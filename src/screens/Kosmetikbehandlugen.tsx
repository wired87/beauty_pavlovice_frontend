import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
    name: string;
    price: JSX.Element;
}

interface Section {
    imageUrl: string;
    title: string;
    items: Item[];
}

const Kosmetikbehandlugen: React.FC = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        // Navigate to the "termin" page
        navigate('/termin');
    };

    // Data object containing all the information
    const data: { sections: Section[] } = {
        sections: [
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Kosmetikbehandlungen",
                items: [
                    { name: "Hydropeptide Behandlungen Ice&Fire(fur unreine Haut)", price: <span className="text-danger">  79$ </span> },
                    { name: "New Skin (fur Haut mit Pigmentflecken)", price: <span className="text-danger">   79$  </span> },
                    { name: "Glowing Skin (tur Trockene Haut)", price: <span className="text-danger">   79$ </span> },
                    { name: "Heidelbeer Limonade (tur empfindliche Haut)", price: <span className="text-danger">  79$ </span > },
                    { name: "Anti Stress (tur strahlende Haut)", price: <span className="text-danger">  79$ </span > }
                ]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Is Clinical Behandlungen",
                items: [
                    { name: "Fire&Ice Facial", price: <span className="text-danger">89$ </span> },
                    { name: "Honey Enzyme Facial", price: <span className="text-danger"> 89$ </span> },
                    { name: "Foaming Enzyme Facial", price: <span className="text-danger"> 65$ </span> },
                    { name: "carboxy Therapie (mit Kpsmetik)", price: <span className="text-danger"> 60$ </span> }
                ]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Apparative Kosmetik Behandlungen",
                items: [
                    { name: "Carboxytherapie (gerat)", price: <span className="text-danger">  90$ </span> },
                    { name: "Aqua Facial", price: <span className="text-danger">  80$ </span> },
                    { name: "Mikrostromtherapie", price: <span className="text-danger">  50$ </span> },
                    { name: "Microneedling passende Cocktail", price: <span className="text-danger">  119$ </span> },
                    { name: "Microneedling BioRePeel", price: <span className="text-danger"> 139$ </span> }
                ]
            }
        ]
    };

    return (
        <div className='eyelashes container mt-5 pb-5'>
            {/* Render each section dynamically */}
            {data.sections.map((section, index) => (
                <div key={index} className={`row align-items-center justify-content-evenly mt-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {section.imageUrl && (
                        <div className='col-md-6 col-sm-12'>
                            <img
                                src={section.imageUrl}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: "400px",
                                }}
                                alt="Wimpernverlängerung"
                            />
                        </div>
                    )}
                    <div className={`col-md-6 p-4 ${section.title === "wimpernverlängerung" ? "bg-danger" : ""}`}>
                        <div className='d-flex flex-column'>
                            <h1 className="font-weight-light">{section.title}</h1>
                            {section.items && (
                                <>
                                    {section.items.map((item, index) => (
                                        <p key={index} className='font-weight-light fs-5'>{item.name} {item.price}</p>
                                    ))}
                                       <button style={{ backgroundColor: "#F4C2C2", color: "black", border: "none" }} className="btn w-50" onClick={handleBookNow}>Book Now</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Kosmetikbehandlugen;
