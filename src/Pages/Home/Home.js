import { Ecosystem } from "../../components/Ecosystem/Ecosystem"
import { Footer } from "../../components/Footer/Footer"
import { Guide } from "../../components/Guide/Guide"
import { Header } from "../../components/Header/Header"
import { Improvement } from "../../components/Improvement/Improvement"
import { IraWhat } from "../../components/IraWhat/IraWhat"
import { Result } from "../../components/Result/Result"
import { Wallets } from "../../components/Wallats/Wallets"

export const Home = () => {
  return (
    <div>
      <Header/>
      <Ecosystem/>
      <IraWhat/>
      <Wallets/>
      <Guide/>
      <Improvement/>
      <Result/>
      <Footer/>
    </div>
  )
}