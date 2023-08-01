import Image from "next/image"
import Link from "next/link"
import logo from "public/icons/logo.svg"
import burger from "public/icons/burger.svg"
import { useState } from "react"
import { twMerge } from 'tailwind-merge'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import stack from "public/icons/stack.svg"
import bricks from "public/icons/bricks.png"



interface Props {

}

const burger_items = [
    {
        title: "Главная",
        link: "/#home"
    },
    {
        title: "Товары",
        link: "/#items"
    },
    {
        title: "Оставить заявку",
        link: "/#form"
    }
]

const Header: React.FC<Props> = () => {


    const [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }




    return (
        <>
            <div className="bg-[#6B6B6B] py-[25px] w-full fixed z-[100]">

                <div className="container flex justify-between items-center">

                    <div className="md:flex items-center block">
                        <Image src={bricks} alt="no" className="w-[60px] h-[60px]" />
                        <p className="cursor-pointer md:block hidden ml-3 text-white" onClick={() => { navigator.clipboard.writeText("www,,xxx") }}>
                            plastic-order@mail.ru
                            <hr></hr>
                            тел. +7(919) 690-99-35
                        </p>
                        <a href="#!"></a>
                    </div>
                    <div className="text-white text-[20px] fontTitle font-extrabold">Синтопласт</div>
                    <div className="md:flex gap-[25px] hidden">
                        <a href={"/#home"} className="text-white hover:text-purple-400">Главная</ a>
                        <a href={"/#items"} className="text-white hover:text-purple-400">Товары</ a>
                        <a href={"/#form"} className="text-white hover:text-purple-400">Оставить заявку</a>
                    </div>

             


                    <button className="md:hidden block w-6 h-5" onClick={() => {
                        setOpen(!open)
                    }}>
                        <div className={twMerge("burger", open && "active")} >
                            <span></span>
                        </div>

                    </button>

                </div>




                <div className= {twMerge("fixed opacity-0 pointer-events-none inset-0 top-[110px] max-h-full ", open && "opacity-100 pointer-events-auto")}>
                    <div className="py-[25px] h-full w-full transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">

                        {burger_items.map((item, index) => (
                            <a href={item.link} className="block border-b text-gray-700 p-5 text-center text-xl m-2" key={index} onClick={() => setOpen(!open)}>{item.title}</a>
                        ))}
                        <div className="block border-b text-gray-700 p-5 text-center text-xl m-2">
                            <div>
                                <a className="p-6" href="#!">plastic-order@mail.ru</a>
                            </div>
                            <div>
                                <a href="#!">тел. +7(919) 690-99-35</a>
                            </div>

                        </div>
                    </div>

                </div>




            </div>

        </>
    )
}

export default Header