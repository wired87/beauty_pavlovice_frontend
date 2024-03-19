import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiServices } from '../services/api.services';
import wimper from "../assets/images/Wi.webp"
import Wimpe1 from "../assets/images/Wimpern1.jpg"
import wimper2 from "../assets/images/Wimpern2.jpg"
import wimper3 from "../assets/images/Wimpern3.jpg"
import wimper4 from "../assets/images/Wimpernverlängerung.jpg"
import massage from "../assets/images/massage.webp"
import peeling from "../assets/images/peeling.webp"
import Hautering from "../assets/images/Hautreinigung2.webp"
import Kosmetikbehandlungen from "../assets/images/Kosmetikbehandlungen1.webp"
import Kosmetikbehandlungen4 from "../assets/images/Kosmetikbehandlungen4.webp"
import Kosmetikbehandlungen2 from "../assets/images/Kosmetik Behandlungen 3.webp"
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
                imageUrl: wimper4,
                title: "Klassisch (1:1 Technik)",
                sectionColor: 'rgb(224,213,175)',
                index: [0, 1, 2, 3, 4],
            },
            {
                imageUrl: Wimpe1,
                title: "2D-3D Volumen",
                index: [5, 6, 7, 8, 9],
                sectionColor: '#F6F5F5',
            },
            {
                imageUrl: wimper2,
                title: "4D-5D Volumen",
                index: [10, 11, 12, 13, 14, 15, 16, 17, 18],
                sectionColor: 'rgb(224,213,175)',
            }
        ],
    },
    {
        id: 2,
        isMulti: true,
        name: 'Kosmetikbehandlungen',
        sections: [
            {
                imageUrl: Kosmetikbehandlungen,
                title: "Kosmetikbehandlungen",
                sectionColor: '#F6F5F5',
                index: []
                // index: [0, 2, 3, 4]
            },
            {
                imageUrl: Kosmetikbehandlungen4,
                title: "Is Clinical Behandlungen",
                sectionColor: 'rgb(224,213,175)',
                index: [0, 1, 2, 3]
            },
            {
                imageUrl: Kosmetikbehandlungen2,
                title: "Apparative Kosmetik Behandlungen",
                sectionColor: '#F6F5F5',
                index: [4, 5, 6, 7, 8]
            }
        ],
    },
    {
        id: 3,
        name: 'Gesichtsmassage',
        tile: 'Gesichtsmassage (Gesicht,Hals,Dekolleté)',
        image: massage,
    },
    {
        id: 4,
        name: 'Peeling',
        tile: 'Peeling',
        image: peeling,
    },
    {
        id: 4,
        name: 'Hautreinigung',
        tile: 'Professionele Hautreinigung',
        image: Hautering,
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
                <div style={{ backgroundColor: "#F6F5F5" }} className='row align-items-center  p-4 justify-content-evenly mt-5'>
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
                        <div className='d-flex flex-column '>
                            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }} className="">{find?.tile || ""}</h3>
                            {services.length ? (
                                <>
                                    {services.map((item, index) => (
                                        <div className='d-flex text-grey align-items-center justify-content-between mb-1'>
                                            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "black" }} key={services[index].id} className='category_items m-0 fs-5'>
                                                {item.title}
                                            </p>
                                            <span style={{ fontFamily: "roboto,sanserif" }} className='  mx-3 text-dark  '>{item.price} &euro; </span>
                                        </div>
                                    ))}
                                    <button style={{ backgroundColor: "black", color: "white", border: "none" }} className="fw-bold mt-5 btn w-50" onClick={handleBookNow}>Termin vereinbaren</button>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {find.description ? <>
                        <div style={{ backgroundColor: "#F6F5F5" }} className={`row align-items-center justify-content-evenly p-4 mt-5`}>
                            <div className='col-md-6 col-sm-12'>
                                <img
                                    src={wimper}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        maxHeight: "400px",
                                    }}
                                    alt={'image'}
                                />
                            </div>
                            <div className={`col-md-6 p-4`} style={{ backgroundColor: '' }}>
                                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }} >WIMPERNVERLÄNGERUNG</h3>
                                {find.description && <p style={{ fontFamily: "Cormorant Garamond, serif", color: "black" }} className='fs-5'>{find.description}</p>}
                                {find.categories && (
                                    <>
                                        <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontWeight: "bold" }} className='fs-5'>Unser Angebot umfasst folgende Services:</p>
                                        {find.categories.map((category, index) => (
                                            <p style={{ fontFamily: "Cormorant Garamond, serif", color: "black" }} key={index} className='mb-2 fs-5'>{category}</p>
                                        ))}
                                        <button style={{ backgroundColor: "black", color: "white", border: "none" }} className="fw-bold mt-5 btn w-50" onClick={handleBookNow}>Termin vereinbaren</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </> : null}

                    {find?.sections?.map((section, index) => {
                        return (
                            <div style={{ backgroundColor: section?.sectionColor }} key={index} className={`row align-items-center justify-content-evenly p-5 mt-5 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
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
                                        <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}>{section.title}</h3>
                                        {services.length ? (
                                            <>
                                                {section.index.map((index) => (
                                                    <div className='d-flex align-items-center justify-content-between mb-1'>
                                                        <p style={{ fontFamily: "Cormorant Garamond, serif", color: "black", fontStyle: "italic" }} key={services[index].id}  className='category_items m-0 '>
                                                            {services[index].title}
                                                        </p>
                                                        <span style={{ display: "flex", flexWrap: "wrap", overflow: "hidden", fontFamily: "roboto,sanserif" }} className=' text-dark '>{services[index].price} &euro;</span>
                                                    </div>
                                                ))}
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div >
    );
};

export default Product;
