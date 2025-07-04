import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { ProductDTO } from '../../../models/product';
import axios from 'axios';


export default function ProductDetails () {

    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${params.productId}`)
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            });
    }, []);

    return (
        <main>
            <section id="product-details-section" className="dsc-container">
            {
                product &&
                <ProductDetailsCard product={product}/>
            }           
            <div className="dsc-btn-page-container">
                <ButtonPrimary text="Comprar"/>
                <Link to="/">
                    <ButtonInverse text="Início"/>
                </Link>
            </div>
            </section>
        </main>
    );
}