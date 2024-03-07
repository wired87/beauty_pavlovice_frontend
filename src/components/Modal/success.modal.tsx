import React, { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SuccessModal: React.FC = () => {

    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        Swal.fire({
            title: "Success",
            text: "Message send!",
            icon: "success",
        }).then(() => setSuccess(true));
    }, []);

    const redirect = () => {
        navigate('/');
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
export default memo(SuccessModal);