import { useNavigate } from "react-router-dom";
import React, { memo, useEffect, useState } from "react";
import Swal from "sweetalert2";

const FailedModal: React.FC = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false); // Zustandsvariable, um den Erfolgswert zu speichern


    useEffect(() => {
        Swal.fire({
            title: "Error",
            text: "Something went wrong :/ \n Send us your E-Mail directly to: info@sales-detective.live",
            icon: "error",
        }).then(() => setSuccess(true));
    }, []);

    const redirect = () => {
        navigate('/contact');
    }

    useEffect(() => {
        if (success) {
            redirect();
        }
    }, [success]);

    return (
        <></>
    );
}

export default memo(FailedModal);