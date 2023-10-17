import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import img from '../assets/fotobersama.jpg';
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';


export const FlashSale = () => {
  return (
    <section className="md:mt-10 md:p-10 text-white">
    <div className="lg:flex justify-between relative">
        <div className="px-4">
            <h1 className="font-semibold text-xl lg:text-4xl">We Are</h1>
            <h1 className="font-semibold text-3xl lg:text-8xl">Cigar-Eight<span className="text-lg lg:text-2xl font-bold absolute">&#8482;</span></h1>
            <h1 className='font-semibold text-4xl lg:text-5xl w-full lg:w-2/3 mt-3'>Tempat Dimana Kode Bukan Hanya Angka dan Huruf, Tapi juga Bahasa kami yang baru 💻</h1>

            <div className="w-1/2 lg:w-1/4 flex justify-between mt-4">
                <AiFillInstagram size={40} />
                <AiFillYoutube size={40} />
                <AiFillGithub size={40} />

            </div>
        </div>

        <img src={img} className="h-[400px] p-4" />

    </div>

    <div className="mt-6">
                <h1 className="font-semibold text-2xl lg:text-3xl italic">Apa itu Teknologi informasi(D3)?</h1>
                <p className="font-medium text-lg lg:text-2sxl">Merupakan salah satu Program Studi di UNIMMA yang berfokus pada penerapan penyampaian informasi di bidang digital. Tidak hanya di bidang IT, namun juga pada bidang Desain, Networking, Cyber Security, Data Analyst, dan Hacking!</p>
    </div>

    <div className="md:flex mt-6 justify-between lg:justify-around">

            <div className="font-semibold text-lg my-2">
                <h1 className="font-bold text-2xl">VISI : </h1>
                <p>Menghasilkan Profesional di Bidangnya</p>
                <p>Inovasi dan Pengembangan Teknologi</p>
                <p>Pusat Pembelajaran Digital</p>
                <p>Membantu Peningkatan Kualitas Hidup</p>
                <p>Beroientasi Pada Skala Global</p>
            </div>

            <div className="font-semibold text-lg my-2">
                <h1 className="font-bold text-2xl">MISI : </h1>
                <p>Mendorong Inovasi Teknologi</p>
                <p>Memberikan Pendidikan Berkualitas</p>
                <p>Mengintegrasikan Etika Digital</p>
                <p>Kemitraan Industri</p>
                <p>Pemberdayaan Mahasiswa di Lingkungan Masyarakat</p>
            </div>
    </div>



    </section>
    // <div className="w-full">
    //     <div className="p-4 flex justify-around">
    //     <h1 className="text-3xl font-semibold">
    //         Pendalaman Materi di Kampus UNIMMA
    //     </h1>

    //     <img src="./src/assets/images.jpeg" className="w-96 h-72" />

    //     </div>


    // </div>
  )
}


{/* <div>
<header className="mt-4">
    <p className="font-medium text-lg">FLASH SALE</p>
</header>
<div className="mt-3 flex p-2 overflow-y-scroll">

    <div className="bg-[#fff] p-6 rounded-t-xl rounded-b-3xl min-w-max h-fit">
        <p className="p-1 bg-red-700 rounded-2xl text-center text-white font-medium text-sm">Penawaran Terbaik</p>
        <p className="p-1 bg-[#fff] font-semibold text-xl">Internet 100GB / 30 Hari</p>
        
        <div className="flex justify-between mt-2">
            <p className="font-medium">Rp.125.000</p>
            <button>
                <MdKeyboardDoubleArrowRight size={20} />
            </button>
        </div>
    </div>

    <div className="bg-[#fff] p-6 rounded-t-xl rounded-b-3xl min-w-max h-fit">
        <p className="p-1 bg-red-700 rounded-2xl text-center text-white font-medium text-sm">Penawaran Terbaik</p>
        <p className="p-1 bg-[#fff] font-semibold text-xl">Internet 100GB / 30 Hari</p>
        
        <div className="flex justify-between mt-2">
            <p className="font-medium">Rp.125.000</p>
            <button>
                <MdKeyboardDoubleArrowRight size={20} />
            </button>
        </div>
    </div>

    <div className="bg-[#fff] p-6 rounded-t-xl rounded-b-3xl min-w-max h-fit">
        <p className="p-1 bg-red-700 rounded-2xl text-center text-white font-medium text-sm">Penawaran Terbaik</p>
        <p className="p-1 bg-[#fff] font-semibold text-xl">Internet 100GB / 30 Hari</p>
        
        <div className="flex justify-between mt-2">
            <p className="font-medium">Rp.125.000</p>
            <button>
                <MdKeyboardDoubleArrowRight size={20} />
            </button>
        </div>
    </div>

</div>
</div> */}
