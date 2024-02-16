import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import {useParams} from 'react-router-dom'

function CardDis() {
    const {id} = useParams(); 
  return (
    <div>
        <Navbar />
        <h1 style={{textAlign: 'center',margin: '130px',fontSize: '70px'}}> hello {id}</h1>
        <Footer />
    </div>
  )
}

export default CardDis