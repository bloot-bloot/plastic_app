import Image from "next/image"
import Link from "next/link"
import logo from "public/icons/logo.svg"
import burger from "public/icons/burger.svg"

interface Props {

}

const Header: React.FC<Props> = () => {
    return (
        <div className="bg-[#6B6B6B] py-[25px] w-full fixed z-[100]">

            <div className="container flex justify-between items-center">
               
                <div className="sm:flex items-center block"> 
                    <Image src={logo} alt="no" />
                    <p className="cursor-pointer sm:block hidden ml-3 text-white" onClick={() => {navigator.clipboard.writeText("www,,xxx")}}>
                        plastic-order@mail.ru
                    </p>
                </div>
                <div  className="sm:flex gap-[25px] hidden">
                    <a href={"/#home"} className="text-white hover:text-purple-400"> Главная </ a>
                    <a href={"/#items"} className="text-white hover:text-purple-400"> Товары </ a>
                    <a href={"/#form"} className="text-white hover:text-purple-400"> Оставить заявку </a>
                </div>
                <Image src={burger} alt="non" className="sm:hidden w-10 h-10" />
                {/* делаем меню бургер  */}
                {/* <div className="wrapper">
                    <input type="checkbox" id="check-menu" />
                    <label htmlFor="check-menu"></label>
                        <div className="burder-line"></div>
                        <div className="burder-line"></div>
                        <div className="burder-line"></div>
                        <div className="burder-line"></div>
                        <nav className="main-menu">
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                            <a href="#"></a>
                        </nav>
                </div> */}


            </div>
        </div>

    )
}

export default Header