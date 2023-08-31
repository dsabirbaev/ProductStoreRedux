

import "./style.scss";
import { Card } from 'flowbite-react';
import { Link } from "react-router-dom"
const CardProduct = ({ case: { image, title, description, id} }) => {

    return (
        <Link to={`/products/${id}`}>

            <Card className="w-[280px] h-[380px] cursor-pointer hover:shadow-xl">
                <img src={image} className=" h-[150px] object-contain object-center" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title.slice(0, 10)} ...
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description.slice(0, 100)} ...
                </p>
            </Card>

        </Link>

    );
};

export default CardProduct;