import React, {useEffect} from "react";
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

    useEffect(() => {
       Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => console.log(res.data))
    }, [])

    return (
        <div className="product-page">
            <h1 style={{
                color: "yellow",
                fontSize: "100px"
            }}>Product</h1>
            <H1>{id}</H1>
            <p>Hard</p>
        </div>
    )
}

export default Product;