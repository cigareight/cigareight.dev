import foto1 from '../assets/foto1.jpg';


export const members = [
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },
    {
        img: foto1,
        nama: 'Akhmad',
        role: 'Ketua',
        status: 'Single'
    },

]

const Member = () => {
    return(
        <>
        <section className="md:mt-10 md:p-10 text-white">
            <h1 className="text-4xl font-bold text-center">Our Awesome<br></br>Cigar8 Team</h1>

            <div className="flex gap-12 flex-wrap justify-center mx-auto max-w-5xl mt-24">
                {members.map((mem, i) => (
                <div className="w-72 py-5 bg-slate-700/60 flex justify-center flex-col items-center rounded-3xl shadow-md shadow-slate-700" style={{ backdropFilter: 'blur(50px)'}}>
                    <img src={mem.img} className="w-32 h-32 rounded-full" />
                    <span className="font-semibold text-md text-center">
                    <p>{mem.nama}</p>
                    <p>{mem.role}</p>
                    <p>{mem.status}</p>
                    </span>
                    <a className='block bg-purple-700 w-1/2 text-center mt-2 py-3 rounded-lg' href=''>Let's connect</a>
                </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Member;