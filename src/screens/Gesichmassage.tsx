import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiServices } from '../services/api.services';

interface Item {
    name: string;
    price: string | JSX.Element;
}

interface Section {
    imageUrl: string;
    title: string;
    items: Item[];
}

const Gesichmassage: React.FC = () => {
    const navigate = useNavigate();
    const { productName } = useParams();

    const [productDetail, setProductDetail] = useState<null | any>(null);

    useEffect(() => {
        if (productName) {
            getProductDetails();
        }
    }, [productName]);

    const getProductDetails = async () => {
        try {
            let response = await apiServices.getProduct({ data: productName?.toString() });
            // console.log("API RESPONSE ===> ", response);
            // setProductDetail(response?.message);
        } catch (error) {
            console.log("Error ===> ", error);
        }
    }

    const handleBookNow = async () => {
        const apiUrl = 'https://beautypavlovic.pythonanywhere.com/beauty-api/product-request/';
        const payload = {
            data: "Peeling"
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            } else {
                console.error('Failed to fetch data:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }

        navigate('/termin');
    };

    const data: { sections: Section[] } = {
        sections: [
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Klassisch 1:1 Technik",
                items: [
                    { name: "Hydropeptide Massage ", price: <span className="text-danger"> 35$ </span> },
                    { name: "Is Clinical Massage ", price: <span className="text-danger"> 35$ </span> },
                    { name: "Manuelle Lymphdrainage Gesichtsmassage ", price: <span className="text-danger">  45$ </span> },
                    { name: "Kalt Massage mit CryoGlobes Hydropeptide", price: <span className="text-danger">  35$ </span> },
                    { name: "Warm Massage Gua Sha Hydropeptide", price: <span className="text-danger">  35$ </span> }
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

                                alt="Gesichtsmassage"
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    maxHeight: "400px",
                                }}
                            />
                        </div>
                    )}
                    <div className='col-md-6 p-4' style={{ backgroundColor: section.title === "wimpernverlängerung" ? "#F4C2C2" : "" }}>
                        <div className='d-flex flex-column'>
                            <h1 className="font-weight-bold">Gesichtsmassage (Gesicht, Hals, Dekolleté)</h1>
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
        </div >
    );
};

export default Gesichmassage;
