import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const InternetDetail = () => {
    return(
        <div>
             <div className="rounded-t-xl mx-2 rounded-b-3xl min-w-[200px] h-fit">
                <p className="font-semibold text-xl p-4 bg-[#222121] rounded-2xl text-white">Internet 100GB / 30 Hari</p>
                <div className="flex justify-between -mt-3 bg-[#555252] rounded-b-2xl">
                    <p className="font-medium p-3 text-red-700">Rp.125.000</p>
                 </div>
            </div>

            <div className="flex items-center justify-center h-56 w-56 mx-auto bg-black text-white rounded-md mt-8">
                <div>
                <p>Kuota Utama</p>
                <p>100.000</p>
                <p>30 Hari</p>
                </div>

            </div>

            <div className="flex items-center justify-center h-56 w-56 mx-auto bg-black text-white rounded-md mt-4">

                <div className="mt-6">
                <p>Deskripsi Paket</p>
                <p>100% kuota utama</p>
                <p>24 semua aplikasii</p>
                <p>pket sebelumnya akan hangus</p>
                </div>

            </div>

            <div className="mt-10 items-end flex justify-between mx-3">
                    <div className="">
                    <p className="font-medium">Harga</p>
                    <p className="font-semibold text-3xl">5.000</p>
                    </div>

                    <button className="font-semibold p-4 bg-red-500 rounded-3xl">Lanjutkan</button>
                </div>

        </div>
    )
}

export default InternetDetail