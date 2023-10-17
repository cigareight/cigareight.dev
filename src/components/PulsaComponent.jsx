

const PulsaComponent = () => {
    return(
        <div>
            <header className="flex justify-center">
                <p className="font-semibold text-xl">Isi Ulang</p>
            </header>

            <div className="mt-3 px-4">
                <p>Pilih nomor</p>
                <div className="w-full my-4">
                <input type="text" className="border w-96 h-12 rounded-md px-3" placeholder="+62" />
                </div>

                <div className="grid grid-cols-2 justify-items-center gap-6 mx-10">
                    <div className="p-8 bg-[#ffffff] rounded-xl shadow">
                        <p className="font-semibold text-3xl">5.000</p>
                    </div>

                    <div className="p-8 bg-[#ffffff] rounded-xl shadow">
                        <p className="font-semibold text-3xl">5.000</p>
                    </div>

                    <div className="p-8 bg-[#ffffff] rounded-xl shadow">
                        <p className="font-semibold text-3xl">5.000</p>
                    </div>

                    <div className="p-8 bg-[#ffffff] rounded-xl shadow">
                        <p className="font-semibold text-3xl">5.000</p>
                    </div>
                </div>

                <div className="mt-4 items-end flex justify-between p-3">
                    <div className="">
                    <p className="font-medium">Harga</p>
                    <p className="font-semibold text-3xl">5.000</p>
                    </div>

                    <button className="font-semibold p-4 bg-red-500 rounded-3xl">Lanjutkan</button>
                </div>
            </div>
        </div>
    )
}

export default PulsaComponent