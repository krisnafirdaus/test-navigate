import React, {useState} from "react";
import "./index.css";

const Detail = () => {
    const [input, setInput] = useState("")
   
    // const pattern2 = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const pattern3 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // validasi

    const handleChange = (e) => {
        const value = e.target.value
        // const pattern = /^[A-Z]+$/; // untuk validasi huruf besar
        // setInput(value)

        if(!pattern3.test(value)) alert("masukkan email dengan benar")
    }

    const handleClick = () => {
        if(input.includes("a")) alert("benar")
        else alert("salah")
    }


    return (
        <div className="detail-page">
            <h1>Detail</h1>
            <input placeholder="tolong dong input" onChange={handleChange} />
            <button onClick={handleClick}>Ok</button>
        </div>
    )
}

export default Detail;