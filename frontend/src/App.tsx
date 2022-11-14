import Header from "./components/Header"
import NotificationButton from "./components/Notificationbutton"
import SalesCard from "./components/SalesCard"


function App() {
 
  return (
 <>
     <Header />
  <main>
    <section id="sales">

      <div className="dsmeta-container">
<SalesCard />
      
      </div>

    </section>
  </main>
     
 </>
  )
}

export default App
