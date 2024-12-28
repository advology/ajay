import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hidePopup, submitForm } from "./Action";

const LeadFormPopup = () => {
    const dispatch = useDispatch();
    const isPopupVisible = useSelector((state) => state.isPopupVisible);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitForm(formData));
        dispatch(hidePopup());
        alert("Form submitted successfully!");
    };

    if (!isPopupVisible) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <h2 style={styles.heading}>Lead Form</h2>
                <form onSubmit={handleSubmit}>
                    <div style={styles.gap}>
                        <label style={styles.label}>Name:</label>
                        <input style={styles.formControl}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={styles.gap}>
                        <label style={styles.label}>Email:</label>
                        <input style={styles.formControl}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={styles.gap}>
                        <label style={styles.label}>Phone:</label>
                        <input style={styles.formControl}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div style={styles.flex}>
                        <button style={styles.btn} type="submit">Submit</button>
                        <button style={styles.btn} type="button" onClick={() => dispatch(hidePopup())}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    popup: {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "400px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading:{
        fontSize: "30px",
        fontWeight: "600",
    },
    label: {
        display: "block",
        textAlign: "left",
        fontSize: "14px"
    },
    formControl: {
        width: "100%",
        border: "none",
        borderBottom: "1px solid #00000080",
        color: "#000",
    },
    gap: {
        margin: "20px 0"
    },
    flex: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px"
    },
    btn: {
        padding: "5px 20px",
        borderRadius: "5px",
        border: "1px solid black",
        outline: "none",
        color: "black",
        cursor: "pointer"
    },
};

export default LeadFormPopup;
