// import ImageComponet from "./components/ImageComponent"
import { FooterComponent } from "./components/FooterComponet";
import MainComponent from "./components/MainComponent";
import { NavbarComponent } from "./components/NavbarComponent"
function App() {

  return (
    <>
    <NavbarComponent/>
    <div className="my-6"> 
    <MainComponent />
    </div>
    
    <FooterComponent/>

    </>
  )
}

export default App
