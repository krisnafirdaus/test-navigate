import React, {useEffect, useState} from "react";
import Axios from "axios"
import { useParams } from 'react-router-dom';
import styled from "styled-components"
import "./index.css"

const H1 = styled.h1`
    color: red;
    font-size: 100px;    
`

const Product = () => {
    const { id } = useParams();
    const [condition, setCondition] = useState(false)
    const [btnFalse, setBtnFalse] = useState(false)
    const [typeProduct, setTypeProduct] = useState([])


    useEffect(() => {
        Axios.get("http://52.237.194.35:2022/api/product/GetTypeProduct").then(res => setTypeProduct(res.data) )
    }, [])

    console.log(typeProduct);

    useEffect(() => {
       setCondition(!condition)
    }, [!btnFalse])

    const handleClick = () => {
        setBtnFalse(!btnFalse)
        // Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => console.log("ini dari api",res.data))
        // Axios.post("https://jsonplaceholder.typicode.com/posts", {
        //     userId: 1,
        //     title: 'foo',
        //     body: 'bar',
        // })
        // Axios.put("https://jsonplaceholder.typicode.com/posts", {
        //     userId: 1,
        //     title: 'foo',
        //     body: 'bar',
        // })
        // Axios.patch("https://jsonplaceholder.typicode.com/posts", {
        //     userId: 1,
        //     title: 'foo',
        //     body: 'bar',
        // })
        // Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => console.log("ini dari api",res.data))
    }
   

    return (
        <div className="product-page">
            <h1 style={{
                color: "yellow",
                fontSize: "100px"
            }}>Product</h1>
            <H1>{id}</H1>
            {/* <p>Hard</p>
            <button onClick={handleClick}>Make it false</button> */}

            {typeProduct?.map((item) => {
                return (
                    <a href={`/type/${item.id}`} key={item.id}>
                        <p>{item.type_name}</p>
                    </a>
                )
            })}
        </div>
    )
}

export default Product;