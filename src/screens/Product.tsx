import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiServices } from '../services/api.services';

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
                imageUrl: "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/sb824aac12c92fde5/image/i0c2b2cd44a023eb9/version/1630505161/image.jpg",
                title: "Klassisch (1:1 Technik)",
                sectionColor: '#F3E1E1',
                index: [0, 1, 2, 3, 4],
            },
            {
                imageUrl: "https://www.wimpern-traum.de/wp-content/uploads/2017/08/Fotolia_123548392_Subscription_Monthly_M_1-1.jpg",
                title: "2D-3D Volumen",
                index: [5, 6, 7, 8, 9],
                sectionColor: '#F6F5F5',
            },
            {
                imageUrl: "https://blinklashclub.com/wp-content/uploads/2021/03/5D-Extension.jpg",
                title: "4D-5D Volumen",
                index: [10, 11, 12, 13, 14, 15, 16, 17, 18],
                sectionColor: '#F3E1E1',
            }
        ],
    },
    {
        id: 2,
        isMulti: true,
        name: 'Kosmetikbehandlungen',
        sections: [
            {
                imageUrl: "https://png.pngtree.com/thumb_back/fw800/background/20230425/pngtree-various-cosmetics-and-makeup-products-lay-out-on-a-table-image_2512968.jpg",
                title: "Kosmetikbehandlungen",
                sectionColor: '#F6F5F5',
                index: []
                // index: [0, 2, 3, 4]
            },
            {
                imageUrl: "https://media.istockphoto.com/id/1453524892/photo/female-scientist-looking-under-microscope-and-using-laptop-in-a-laboratory.webp?b=1&s=170667a&w=0&k=20&c=f6ITpViA6q4W56XB0X2whl3LTxIHf6f1EF-c3FQRRas=",
                title: "Is Clinical Behandlungen",
                sectionColor: '#F3E1E1',
                index: [0, 1, 2, 3]
            },
            {
                imageUrl: "https://kosmetik-driller.de/wp-content/uploads/2020/01/Kosmetik_Driller_Kosmetikstudio_Bruchsal-167.jpg",
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
        image: 'https://www.fisioterapiaamilano.it/wp-content/uploads/2019/10/massaggio-anti-age.jpg',
    },
    {
        id: 4,
        name: 'Peeling',
        tile: 'Peeling',
        image: 'https://media.istockphoto.com/id/1399469980/photo/close-up-portrait-of-anorganic-facial-mask-application-at-spa-salon-facial-treatment-skin.webp?b=1&s=170667a&w=0&k=20&c=509pRCOT3S415mfR9XZz9wm7J0Nt9IdndYgd2YZ0mHQ=',
    },
    {
        id: 4,
        name: 'Hautreinigung',
        tile: 'Professionele Hautreinigung',
        image: 'https://www.top-beauty-center.de/img/hydro%20facial.jpeg',
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
                            <h3 className="font-weight-bold">{find?.tile || ""}</h3>
                            {services.length ? (
                                <>
                                    {services.map((item, index) => (
                                        <div className='d-flex text-grey align-items-center justify-content-between mb-1'>
                                            <p key={services[index].id} className='m-0 fs-5'>
                                                {item.title}
                                            </p>
                                            <span className='mx-3 text-dark fw-bold'>{item.price} &euro; </span>
                                        </div>
                                    ))}
                                    <button style={{ backgroundColor: "black", color: "white", border: "none" }} className="fw-bold mt-5 btn w-50" onClick={handleBookNow}>Book Now</button>
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
                                    src='https://www.beautiful-pearl.de/images/Wimpern_gr.jpg'
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        maxHeight: "400px",
                                    }}
                                    alt={'image'}
                                />
                            </div>
                            <div className={`col-md-6 p-4`} style={{ backgroundColor: '' }}>
                                <h3 className="font-weight-light">WIMPERNVERLÄNGERUNG</h3>
                                {find.description && <p className='fs-5'>{find.description}</p>}
                                {find.categories && (
                                    <>
                                        <p className='fw-bold fs-5'>We have all these:</p>
                                        {find.categories.map((category, index) => (
                                            <p key={index} className='mb-2 fs-5'>{category}</p>
                                        ))}
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
                                        <h3 className="font-weight-light">{section.title}</h3>
                                        {services.length ? (
                                            <>
                                                {section.index.map((index) => (
                                                    <div className='d-flex align-items-center justify-content-between mb-1'>
                                                        <p key={services[index].id} className='category_items m-0 '>
                                                            {services[index].title}
                                                        </p>
                                                        <span style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }} className='category_items mx-3 text-dark fw-bold'>{services[index].price} &euro;</span>
                                                    </div>
                                                ))}
                                                <button style={{ backgroundColor: "black", color: "white", border: "none" }} className="fw-bold mt-5 btn w-50" onClick={handleBookNow}>Book Now</button>
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
