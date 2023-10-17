import {useParams} from 'react-router-dom';
import Layout from './Layout';


const Detail = () => {
    const {_id} = useParams();
  return (
    <div>
        <Layout>
            <div className="p-3 flex justify-center">
                <div className="w-[400px]">
                    <img src="/hero.png" className="w-full h-[200px] object-contain" />
                    <div className="w-[70%] mx-auto">
                        <p className="mb-2 text-lg">Laptop Asus ROG STRIX 14 INTEL i7 13100k RAM 32GB SSD 3TB</p>
                        <p className="font-semibold text-2xl">Rp.20.000.000</p>
                             <div className="flex items-center mb-1">
                                <p className="text-sm p-1 bg-red-300 rounded-md">20%</p>
                                <p className="text-sm">Rp.10.000.000</p>
                            </div>
                            <p className="text-slate-600">Rizuki Store</p>
                            <div className="flex">
                                <span>
                                  *
                                </span>
                                <p>5.0</p>
                                <span className="text-slate-400 mx-1">|</span>
                                <p>terjual 5</p>
                            </div>
                            <div className="mt-3">
                                <p className="font-semibold text-lg">Description:</p>
                                <span className="">Spesifikasi:
                                    -intel core 17 13100k<br></br>
                                    -RAM 32GB<br></br>
                                    -SSD 3TB<br></br>
                                    -Layar OLED 2.8K<br></br>
                                    -intel core 17 13100k<br></br>
                                    -RAM 32GB<br></br>
                                    -SSD 3TB<br></br>
                                    -Layar OLED 2.8K<br></br>
                                </span>
                            </div>
                    </div>
                </div>

            </div>
        </Layout>
    </div>
  )
}

export default Detail
