import { Navbar } from './Navbar'
import style from './Headder.module.scss'

export const Headder = () => {
    return (
        <>
         <h1 className= {style.hej}>Headdercomponent</h1>
         <p className= {style.dav}>hej</p>
         <Navbar/>
         <Navbar/>
         <Navbar/>
        </>
    )
}