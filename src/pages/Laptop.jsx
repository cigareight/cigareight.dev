import Layout from "../components/Layout";
import {useState, useEffect} from 'react';

const Laptop = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/laptop');
                const data = await response.json();
                setData(data);
            } catch(error) {
                console.log(error)
            }
        }

        fetchData();
    }, [])
    return(
        <Layout>
            <div className="p-3">
                {data.map((product, key) => (
                    <div key={key}>
                    <p>{product.merk}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Laptop