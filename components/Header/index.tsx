import Image from "next/image"
import Link from "next/link"
import logo from "public/icons/logo.svg"

interface Props {
  
}

const Header: React.FC <Props> = () => {
    return (
        <div className="bg-[#6B6B6B] py-[25px] w-full fixed z-[100]">

            <div className="container flex justify-between">
                    <Image src={logo} alt="no"/>
                    <div className="flex gap-[25px] ">
                <a href={"/#home"} className="text-white hover:text-purple-400"> Главная </ a>
                <a href={"/#items"} className="text-white hover:text-purple-400" > Товары </ a>
                <a href={"/#form"} className="text-white hover:text-purple-400"> Контакты </a>

                    
            </div>
               
        </div>
        </div>
        
    )
}

export default Header