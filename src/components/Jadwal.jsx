

export const jwl = [
    {
        hari: 'Senin',
        sks: '2',
        jam: '07.00 - 08.40',
        matkul: 'Digital Mathematics',
        dosen: 'Ibu Maimunah',
        wa: '0815-7945-559'
    },
        {
            hari: 'Senin',
            sks: '4',
            jam: '09.00 - 11.30',
            matkul: 'Program Building',
            dosen: 'Bpk Arry Widyanto',
            wa: '-'
        },
            {
                hari: 'Senin',
                sks: '0',
                jam: '13.10 - selesai',
                matkul: 'BTQ',
                dosen: 'Bpk Ayib',
                wa: '0812-2579-969',
                line : '_______________________________________________',
                
            },


    {
        hari: 'Selasa',
        sks: '2',
        jam: '09.30 - 11.10',
        matkul: 'Computer and Device',
        dosen: 'Bpk Meidar',
        wa: '0896-7189-4550',
    },
        {
            hari: 'Selasa',
            sks: '4',
            jam: '13.10 - 17.00',
            matkul: 'Graphic Design',
            dosen: 'Bpk Meidar',
            wa: '0896-7189-4550',
            line : '_______________________________________________',

        },


    {
        hari: 'Rabu',
        sks: '3',
        jam: '07.00 - 09.30',
        matkul: 'Networking',
        dosen: 'Bpk Agung',
        wa:  '0812-2638-331',
    },
        {
            hari: 'Rabu',
            sks: '2',
            jam: '09.30 - 11.10',
            matkul: 'Multimedia Concept',
            dosen: 'Bpk Rofi',
            wa: '0857-4324-6371',
            line : '_______________________________________________',

        },


    {
        hari: 'Kamis',
        sks: '3',
        jam: '07.50 - 10.20',
        matkul: 'Algorithn',
        dosen: 'Bpk Andy',
        wa: '0815-6753-019'
    },
        {
            hari: 'Kamis',
            sks: '2',
            jam: '10.2 - 12.00',
            matkul: 'Digital Media',
            dosen: 'Bpk Meidar',
            wa: '0896-7189-4550',
            line : '_______________________________________________',

        },

]

const JadwalKuliah = () => {
    return(
        <>
        <section className="text-white md:mt-10 md:p-10">
            <h1 className="font-bold text-4xl">Jadwal Perkuliahan</h1>

                <table className="justify-items-center w-4/5 lg:w-1/2">
                    <thead>
                        <tr className="bg-teal-500">
                            <th className="w-10 px-4 py-3 text-left rounded-tl-md rounded-bl-md">Hari/Tanggal</th>
                            <th className="w-4 px-4 py-3 text-left">SKS</th>
                            <th className="w-32 px-4 py-3 text-center">JAM</th>
                            <th className="px-10 py-3 text-center">Mata Kuliah</th>
                            <th className="px-2 py-3 text-center">Dosen</th>
                            <th className="px-2 py-3 text-center rounded-br-md rounded-tr-md">WhatsApp</th>



                        </tr>
                    </thead>
                    <tbody>
            {jwl.map((jwl, i) => (
                        <tr key={i}>
                            <td className="px-4 py-4">{jwl.hari}</td>
                            <td className="px-4 py-4">{jwl.sks}</td>
                            <td className="px-4 py-4">{jwl.jam}</td>
                            <td className="px-4 py-4 text-center">{jwl.matkul}</td>
                            <td className="px-4 py-4 text-center">{jwl.dosen}</td>
                            <td className="px-4 py-4 text-center">{jwl.wa}</td>
                        </tr>      
            ))}
                    </tbody>
                </table>

        </section>
        </>
    )
}

export default JadwalKuliah;


