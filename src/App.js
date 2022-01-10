import Baner from './Componenta/Banner/Baner'
import Navbar from './Componenta/Navbar/Navabr'
import DashboardNavbar from './Componenta/DashboardNavbar/DashbaordNavbar'
import '../src/Componenta/index.css'
import Body from './Componenta/Body/Body';
import Reklama from './Reklama/Reklama';
import Showes from './Componenta/Showes/Showes';
import Trendeng from './Componenta/Trendeng/Trendeng';
import Speker from './Componenta/Speker/Speker';
import Products from './Componenta/Products/Products';
import Customer from './Componenta/Customer/Customer';
import Articles from './Componenta/Articles/Articles';
import Footer from './Componenta/Footer/Footer';
import FooterBottom from './Componenta/FooterBottom/FooterBottom';

function App() {
  return (
    <div >
        <Baner/>
         <div  className='container'>
                <Navbar/>
         </div>
         <div  className='wraper'>
            <div  className='container'>
                 <DashboardNavbar/>
            </div>
         </div>
         <div  className='container'>
                 <Body/>
         </div>
         <div  className='container'>
              <Reklama/>
         </div>
         <div  className='container' >
               <Showes/>
         </div>
         <div  className='container' >
           <Trendeng/>
        </div>
        <div  className='container' >
           <Speker/>
        </div>
        <div  className='container' >
           <Products/>
        </div>
        <div  className='container' >
           <Customer/>
        </div>
         <div  className='container' >
           <Articles/>
        </div>
        <div  className='container' >
           <Footer/>
        </div>
        <div  className='line'></div>
        <div  className='container' >
           <FooterBottom/>
        </div>
    </div>
  );
}

export default App;
