import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom';
import axios from 'axios';

const ProductTypeDetail = () => {
    const {id} = useParams();
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`http://52.237.194.35:2022/api/product/GetCarByID?IdType=${id}`).then(res => setData(res.data))
    }, [])

    return (
        <div>
            <h1>{data.type_name}</h1>
            <h2>{data.description}</h2>
        </div>
    )
}

export default ProductTypeDetail;