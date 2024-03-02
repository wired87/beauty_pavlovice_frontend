import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
    name: string;
    price: string | JSX.Element;
}

interface Section {
    imageUrl: string;
    title: string;
    description?: string;
    categories?: string[];
    items?: Item[];
}

const Eyelashes: React.FC = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        // Navigate to the "termin" page
        navigate('/termin');
    };

    const data: { sections: Section[] } = {
        sections: [
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "wimpernverlängerung",
                description: "A lash extension treatment involves applying individual synthetic lashes onto each natural eyelash to add extra length and volume. They're perfect for holidays, a big event, or just perfect lashes every day.",
                categories: ["Klassisch 1:1 Technik", "2D-3D Volumen", "4D-5D Volumen"]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Klassisch 1:1 Technik",
                items: [
                    { name: "Neuanlage", price: <span className="text-danger">  80$ </span> },
                    { name: "Auffullen bis 2 wochen", price: <span className="text-danger">  35$ </span> },
                    { name: "Auffullen bis 3 wochen", price: <span className="text-danger">  40$ </span> },
                    { name: "Auffullen bis 4 wochen", price: <span className="text-danger"> 45$ </span> },
                    { name: "Auffullen uber 5 wochen", price: <span className="text-danger">  80$ </span> }
                ]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "2D-3D Volumen",
                items: [
                    { name: "Neuanlage", price: <span className="text-danger">  100$ </span> },
                    { name: "Auffullen bis 2 wochen", price: <span className="text-danger">  40$ </span> },
                    { name: "Auffullen bis 3 wochen", price: <span className="text-danger">  45$ </span> },
                    { name: "Auffullen bis 4 wochen", price: <span className="text-danger">  50$ </span> },
                    { name: "Auffullen bis 5 wochen", price: <span className="text-danger">  100$ </span> }
                ]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "4D-5D Volumen",
                items: [
                    { name: "Neuanlage", price: <span className="text-danger">  120$ </span> },
                    { name: "Auffullen bis 2 wochen", price: <span className="text-danger">  45$ </span> },
                    { name: "Auffullen bis 3 wochen", price: <span className="text-danger">  50$ </span> },
                    { name: "Auffullen bis 4 wochen", price: <span className="text-danger">  55$ </span> },
                    { name: "Auffullen bis 5 wochen", price: <span className="text-danger">  120$ </span> }
                ]
            }
        ]
    };

    return (
        <div className='container mt-5 pb-5'>
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
                    <div className='col-md-6 p-4' style={{ backgroundColor: section.title === "wimpernverlängerung" ? "#F4C2C2" : "" }}>
                        <div className='d-flex flex-column'>
                            <h1 className="font-weight-bold">{section.title}</h1>
                            {section.description && <p className='fs-5'>{section.description}</p>}
                            {section.categories && (
                                <>
                                    <p className='font-weight-bold fs-5'>We have all these:</p>
                                    {section.categories.map((category, index) => (
                                        <p key={index} className='fs-5'>{category}</p>
                                    ))}
                                </>
                            )}
                            {section.items && (
                                <>
                                    {section.items.map((item, index) => (
                                        <p key={index} className='fs-5'>{item.name} {item.price}</p>
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

export default Eyelashes;
