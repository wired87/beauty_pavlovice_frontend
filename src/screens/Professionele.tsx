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

const Professionele: React.FC = () => {
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
                title: "Klassisch 1:1 Technik",
                items: [
                    { name: "Hydropeptide Hautreinigung", price: <span className="text-danger">  89$ </span> },
                    { name: "Is Clinical Hautreinigung", price: <span className="text-danger">  89$ </span> }
                ]
            }
        ]
    };

    return (
        <div className='container mt-5 pb-5'>
            {/* Render each section dynamically */}
            {data.sections.map((section, index) => (
                <div key={index} className={`row justify-content-evenly mt-5 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {section.imageUrl && (
                        <div className='col-md-6 col-sm-12'>
                            <img
                                src={section.imageUrl}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: "400px",
                                }}
                                alt="Professionele Hautreinigung"
                            />
                        </div>
                    )}
                    <div className='col-md-6 p-4' style={{ backgroundColor: section.title === "wimpernverlängerung" ? "#F4C2C2" : "" }}>
                        <div className='d-flex flex-column'>
                            <h1 className="font-weight-bold">Professionele Hautreinigung</h1>
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

export default Professionele;
