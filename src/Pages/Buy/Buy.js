import { Avlod } from "../../components/Avlod/Avlod"
import { Ethereum } from "../../components/Ethereum/Ethereum"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export const Buy = () => {
  return (
    <div>
      <Header/>
      <Ethereum/>
      <Avlod/>
      <Footer/>
    </div>
  )
}