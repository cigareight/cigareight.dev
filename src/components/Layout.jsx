import {BiSearchAlt} from 'react-icons/bi';
import Tes from './Tes';
import Navbar from './Navbar'
const Layout = ({children}) => {
    return(
        <>
            <div className="flex bg-gradient-to-r from-zinc-800 to-cyan-900 min-h-screen">
                <Navbar />
             
                <div className="flex-grow">
                  {children}
                </div>
                
            </div>
        </>
    )
}

export default Layout