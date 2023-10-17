
import Layout from '../components/Layout';
import  Detail  from '../components/Detail';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';


// const data = [

// {
//     id : "1",
//     name: "Thinkpad 13 gen 2",
//     price: "10.000.000",
//     diskon: "20%",
//     store: "rizuki Store",
//     rating: "5.0",
//     terjual : "20",
// },

// {
//     id : "2",
//     name: "asus",
//     price: "10.000.000",
//     diskon: "20%",
//     store: "rizuki Store",
//     rating: "5.0",
//     terjual : "20",
// },

// {
//     id : "3",
//     name: "asus intel n300",
//     price: "8.000.000",
//     diskon: "20%",
//     store: "davinci Store",
//     rating: "4.5",
//     terjual : "60",
// },

// {
//     id : "4",
//     name: "asus",
//     price: "10.000.000",
//     diskon: "10%",
//     store: "Lincoln Store",
//     rating: "2.0",
//     terjual : "9",
// },

// {
//     id : "5",
//     name: "asus",
//     price: "10.000.000",
//     diskon: "50%",
//     store: "abraham Store",
//     rating: "3.0",
//     terjual : "10",
// }

// ]


export const Recomended = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/product');

                const data = await response.json();
                setData(data);
            } catch(error) {
                console.log(error)
            }
        };
        console.log(data)

        fetchData();
    }, [])
  return (
    <div>
            <div className="p-3">
                <div>
                    <header>
                        Laptop
                    </header>

                    <div className="grid grid-cols-4 justify-items-center gap-3">
                        {data.map((product, key) => (
                        <div className="w-44 p-2" key={key}>
                            <img src="/hero.png" className="w-full h-40 object-fit" />
                            <div>
                                <p className="mb-2 font-medium">{product.merk}</p>
                                <p className="font-semibold text-xl">{product.price}</p>
                                <div className="flex items-center mb-1">
                                    <p className="text-sm p-1 bg-red-300 rounded-md">{product.diskon}%</p>
                                    <p className="text-sm">{product.prev}</p>
                                </div>
                                <p className="text-slate-600">{product.store}</p>
                                <div className="flex">
                                    <span>
                                        *
                                    </span>
                                    <p>{product.rating}</p>
                                    <span className="text-slate-400 mx-1">|</span>
                                    <p>terjual {product.sold}</p>
                                </div>
                                <Link to={`/product/${product._id}`}>disini bang</Link>
                            </div>
                        </div>
                        ))}

                        {/* <div className="w-44 p-2">
                            <img src="/hero.png" className="w-full h-40 object-fit" />
                            <div>
                                <p className="mb-2">Laptop ACER SWIFT X 14 GTX1650 AMD Ryzen 7 5500H</p>
                                <p className="font-semibold text-xl">Rp.9.000.000</p>
                                <div className="flex items-center mb-1">
                                    <p className="text-sm p-1 bg-red-300 rounded-md">20%</p>
                                    <p className="text-sm">Rp.10.000.000</p>
                                </div>
                                <p className="text-slate-600">Rizuki Shop</p>
                                <div className="flex">
                                    <span>
                                        *
                                    </span>
                                    <p>5.0</p>
                                    <span className="text-slate-400 mx-1">|</span>
                                    <p>terjual 5</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-44 p-2">
                            <img src="/hero.png" className="w-full h-40 object-fit" />
                            <div>
                                <p className="mb-2">Laptop ACER SWIFT X 14 GTX1650 AMD Ryzen 7 5500H</p>
                                <p className="font-semibold text-xl">Rp.9.000.000</p>
                                <div className="flex items-center mb-1">
                                    <p className="text-sm p-1 bg-red-300 rounded-md">20%</p>
                                    <p className="text-sm">Rp.10.000.000</p>
                                </div>
                                <p className="text-slate-600">Rizuki Shop</p>
                                <div className="flex">
                                    <span>
                                        *
                                    </span>
                                    <p>5.0</p>
                                    <span className="text-slate-400 mx-1">|</span>
                                    <p>terjual 5</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-44 p-2">
                            <img src="/hero.png" className="w-full h-40 object-fit" />
                            <div>
                                <p className="mb-2">Laptop ACER SWIFT X 14 GTX1650 AMD Ryzen 7 5500H</p>
                                <p className="font-semibold text-xl">Rp.9.000.000</p>
                                <div className="flex items-center mb-1">
                                    <p className="text-sm p-1 bg-red-300 rounded-md">20%</p>
                                    <p className="text-sm">Rp.10.000.000</p>
                                </div>
                                <p className="text-slate-600">Rizuki Shop</p>
                                <div className="flex">
                                    <span>
                                        *
                                    </span>
                                    <p>5.0</p>
                                    <span className="text-slate-400 mx-1">|</span>
                                    <p>terjual 5</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-44 p-2">
                            <img src="/hero.png" className="w-full h-40 object-fit" />
                            <div>
                                <p className="mb-2">Laptop ACER SWIFT X 14 GTX1650 AMD Ryzen 7 5500H</p>
                                <p className="font-semibold text-xl">Rp.9.000.000</p>
                                <div className="flex items-center mb-1">
                                    <p className="text-sm p-1 bg-red-300 rounded-md">20%</p>
                                    <p className="text-sm">Rp.10.000.000</p>
                                </div>
                                <p className="text-slate-600">Rizuki Shop</p>
                                <div className="flex">
                                    <span>
                                        *
                                    </span>
                                    <p>5.0</p>
                                    <span className="text-slate-400 mx-1">|</span>
                                    <p>terjual 5</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-44 p-2">
                            <img src="/hero.png" className="w-full h-40 object-fit" />
                            <div>
                                <p className="mb-2">Laptop ACER SWIFT X 14 GTX1650 AMD Ryzen 7 5500H</p>
                                <p className="font-semibold text-xl">Rp.9.000.000</p>
                                <div className="flex items-center mb-1">
                                    <p className="text-sm p-1 bg-red-300 rounded-md">20%</p>
                                    <p className="text-sm">Rp.10.000.000</p>
                                </div>
                                <p className="text-slate-600">Rizuki Shop</p>
                                <div className="flex">
                                    <span>
                                        *
                                    </span>
                                    <p>5.0</p>
                                    <span className="text-slate-400 mx-1">|</span>
                                    <p>terjual 5</p>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>

                <div>
                    <header>
                        Keyboard
                    </header>
                </div>
            </div>
    </div>
  )
}
