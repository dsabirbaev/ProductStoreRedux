import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productAPI from "../../service/product";
import "./style.scss";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

import { SET_PRODUCT, SET_LOAD, SET_ERROR_PRODUCT } from "../../redux/action/actions";
const index = () => {

    const {product, load} = useSelector((data) => data);
    const dispatch = useDispatch();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productAPI.getProductItem(id).then((response) => {

            dispatch(SET_PRODUCT(response.data));
            dispatch(SET_LOAD());

        }).catch((err) => {
            dispatch(SET_ERROR_PRODUCT(err.message));
        })
    }, [])

    if (load) {
        return <div className="w-screen h-screen bg-slate-100 fixed z-50 top-0 left-0 flex items-center justify-center">
            <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    }
    return (
        <section className="py-10 min-h-[calc(100vh-80px-80px)]">
            <div className="container">
                <div className="border border-sky-500 rounded-xl p-5">
                    <Button onClick={() => navigate(-1)} className="mb-5">Back</Button>

                    <div className="flex gap-x-5">
                        <img src={product?.image} alt="image" className="w-[300px] h-[200px] object-contain object-center" />
                        <div className="flex flex-col gap-y-4 text-[18px] border-[2px] border-sky-500 rounded-2xl p-4">
                            <h2 className="font-medium text-[25px]">{product?.title}</h2>
                            <p><span className="font-bold">Category: </span> {product?.category}</p>
                            <p>{product?.description}</p>
                            <p><span className="font-bold">Price: </span>$ {product?.price}</p>
                            <p><span className="font-bold">Rate:</span> {product?.rating?.rate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;