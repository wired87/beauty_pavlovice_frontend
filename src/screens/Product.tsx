import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiServices } from '../services/api.services';
import { loadavg } from 'os';

interface Item {
    name: string;
    price: string | JSX.Element;
}

interface Section {
    imageUrl: string;
    title: string;
    items: Item[];
}

// Define interface for the item structure
interface ServiceItem {
    id: string;
    title: string;
    price: string;
}

let allCategories = [
    {
        id: 1,
        isMulti: true,
        name: 'Wimpernverlängerung',
        description: "A lash extension treatment involves applying individual synthetic lashes onto each natural eyelash to add extra length and volume. They're perfect for holidays, a big event, or just perfect lashes every day.",
        categories: ["Klassisch 1:1 Technik", "2D-3D Volumen", "4D-5D Volumen"],
        sections: [
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Klassisch (1:1 Technik)",
                sectionColor: 'white',
                index: [0, 1, 2, 3, 4]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "2D-3D Volumen",
                index: [5, 6, 7, 8, 9]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "4D-5D Volumen",
                index: [10, 11, 12, 13, 14, 15, 16, 17, 18]
            }
        ],
    },
    {
        id: 2,
        isMulti: true,
        name: 'Kosmetikbehandlungen',
        sections: [
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Kosmetikbehandlungen",
                sectionColor: 'white',
                index: []
                // index: [0, 2, 3, 4]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Is Clinical Behandlungen",
                index: [0, 1, 2, 3]
            },
            {
                imageUrl: "https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg",
                title: "Apparative Kosmetik Behandlungen",
                index: [4, 5, 6, 7, 8]
            }
        ],
    },
    {
        id: 3,
        name: 'Gesichtsmassage',
        tile: 'Gesichtsmassage (Gesicht,Hals,Dekolleté)',
        image: 'https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg',
    },
    {
        id: 4,
        name: 'Peeling',
        tile: 'Peeling',
        image: 'https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg',
    },
    {
        id: 4,
        name: 'Hautreinigung',
        tile: 'Professionele Hautreinigung',
        image: 'https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg',
    }
]

const Product: React.FC = () => {
    const navigate = useNavigate();
    const { productName } = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [services, setServices] = useState<ServiceItem[]>([])

    let find = allCategories?.find(e => e.name == productName)

    useEffect(() => {
        if (productName) {
            getProductDetails();
        }
    }, [productName]);

    const getProductDetails = async () => {
        try {
            setIsLoading(true)
            let response = await apiServices.getProduct({ data: productName?.toString() });
            console.log("API RESPONSE ===> ", response.data);
            if (Array.isArray(response.data?.message)) {
                setServices(response.data?.message);
            } else {
                // navigate to 404 or home
            }
        } catch (error) {
            setIsLoading(false)
            console.log("Error ===> ", error);
        } finally {
            setIsLoading(false)
        }
    }

    const handleBookNow = async () => {
        navigate('/termin');
    };

    if (isLoading) return (<></>)

    return (
        <div className='container mt-5 pb-5'>
            {!find?.isMulti ? (
                <div className='row align-items-center justify-content-evenly mt-5'>
                    <div className='col-md-6 col-sm-12'>
                        <img
                            src={find?.image}
                            alt={productName?.toString()}
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                                maxHeight: "400px",
                            }}
                        />
                    </div>
                    <div className='col-md-6 p-4'>
                        <div className='d-flex flex-column'>
                            <h1 className="font-weight-bold">{find?.tile || ""}</h1>
                            {services.length ? (
                                <>
                                    {services.map((item, index) => (
                                        <p key={index} className='fs-5'>{item.title} <span className='mx-3 text-danger fw-bold'>{item.price}</span></p>
                                    ))}
                                    <button style={{ backgroundColor: "#F4C2C2", color: "black", border: "none" }} className="btn w-50" onClick={handleBookNow}>Book Now</button>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {
                        find.description ? <>
                            <div className={`row align-items-center justify-content-evenly mt-5`}>
                                <div className='col-md-6 col-sm-12'>
                                    <img
                                        src='https://media.glamour.com/photos/65512d4c24522f9dbd630bb5/4:3/w_2035,h_1526,c_limit/Lux-Makeup-Beauty-Awards.jpg'
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            maxHeight: "400px",
                                        }}
                                        alt={'image'}
                                    />
                                </div>
                                <div className={`col-md-6 p-4`} style={{ backgroundColor: '#F4C2C2' }}>
                                    <h1 className="font-weight-light">WIMPERNVERLÄNGERUNG</h1>
                                    {find.description && <p className='fs-5'>{find.description}</p>}
                                    {find.categories && (
                                        <>
                                            <p className='font-weight-bold fs-5'>We have all these:</p>
                                            {find.categories.map((category, index) => (
                                                <p key={index} className='fs-5'>{category}</p>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </div>
                        </> : null
                    }

                    {find?.sections?.map((section, index) => (
                        <div key={index} className={`row align-items-center justify-content-evenly mt-5 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className='col-md-6 col-sm-12'>
                                <img
                                    src={section.imageUrl}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        maxHeight: "400px",
                                    }}
                                    alt={section.title}
                                />
                            </div>

                            <div className={`col-md-6 p-4`}>
                                <div className='d-flex flex-column'>
                                    <h1 className="font-weight-light">{section.title}</h1>
                                    {services.length ? (
                                        <>
                                            {section.index.map((index) => (
                                                <p key={services[index].id} className='fs-5'>
                                                    {services[index].title}
                                                    <span className='mx-3 text-danger fw-bold'>{services[index].price}</span>
                                                </p>
                                            ))}
                                            <button style={{ backgroundColor: "#F4C2C2", color: "black", border: "none" }} className="text-bold btn w-50" onClick={handleBookNow}>Book Now</button>
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div >
    );
};

export default Product;
