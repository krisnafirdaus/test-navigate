import React, {useEffect} from "react";
import Axios from "axios"
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const nilai = 

    useEffect(() => {
       Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => console.log(res.data))
    }, [])

    return (
        <div>
            <h1>Product</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default Product;