import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Recomended } from './pages/Recomended';
// import Detail from './components/Detail';
import Jadwal from './pages/Jadwal';
// import Laptop from './pages/Laptop';
import Layout from './components/Layout';
import PulsaComponent from './components/PulsaComponent';
import InternetComponent from './components/InternetComponent';
import InternetDetail from './components/InternetDetail';
import Error from './components/Error';
import Class from './components/Class';
import Member from './components/Member'


function App() {
  return (
    <Router>
      <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/recomended' element={<Recomended />}></Route>
            <Route path='/pulsa' element={<PulsaComponent />}></Route>
            <Route path='/internet' element={<InternetComponent />}></Route>
            <Route path="/internet/:id" element={<InternetDetail />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/error" element={<Error />}></Route>
            {/* <Route path="/product/:id" element={<Detail />}></Route> */}
            <Route path="/jadwal" element={<Jadwal />}></Route>
            <Route path="/team" element={<Member />}></Route>
            <Route path="/class" element={<Class />}></Route>
            {/* <Route path="/laptop" element={<Laptop />}></Route> */}
          </Routes>
      </Layout>
    </Router>
  )
}

export default App
