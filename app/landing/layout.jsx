import '../globals.css'
import NavBar from '../../components/navbar'


export default function RootLayout() {
  return (  
    <div>
        <NavBar />
        {children}
    </div>
  )
}