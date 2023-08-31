
import { useEffect, useState, useReducer } from "react";

import "./style.scss";

import productAPI from "../../service/product";
import CardProduct from "../../components/UI/Card/CardProduct";

import { useDispatch, useSelector } from "react-redux";
import { SET_PRODUCTS, SET_LOADER, SET_ERROR } from "../../redux/action/actions";
const index = () => {

    const {products, loading} = useSelector((data) => data);
    const dispatch = useDispatch();

    const fetchingProduct = async () => {
        try {
            const response = await productAPI.getProduct();
            if (response.status === 200) {
                dispatch(SET_PRODUCTS(response.data));
                dispatch(SET_LOADER())
            }
        } catch (err) {
            dispatch(SET_ERROR(err.message));
        }
    }

    useEffect(() => {
        fetchingProduct();
    }, [])

    if (loading) {
        return <div className="flex items-center justify-center h-screen w-screen fixed z-50 top-0 left-0 bg-slate-100">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
                    </svg>
                </div>
            </div>
        </div>
    }

    return (
        <section>
            <div className="container">
                <div className="py-5">
                    <h2 className="font-semibold text-center text-xl mb-5">Our Products</h2>
                    <div className="grid grid-cols-4 gap-y-5">
                        {
                            products?.map((item) => {
                                return <CardProduct key={item.id} case={item} />
                            })
                        }

                    </div>
                </div>
            </div>

        </section>
    );
};

export default index;