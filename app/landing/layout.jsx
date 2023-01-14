import '../globals.css'
import NavBar from '../../components/navbar'


export default function RootLayout({ children }) {
  return (  
    <div className=''>
        <NavBar />
        {children}
    </div>
  )
}