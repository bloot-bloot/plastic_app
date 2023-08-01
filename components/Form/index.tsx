import Image from "next/image"
import Link from "next/link"
import logo from "public/icons/logo.svg"
import React, { useState } from "react"



interface Props {

}

const Form: React.FC<Props> = () => {

    const [state, setState] = useState({
        contact: "",
        phone: "",
        email: "",
        request: ""
    })


    const onChange = (event: any) => {
        /* Ваш код здесь */
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value,

        });

    };

    const submit = (e: any) => {
        e.preventDefault();
        console.log(state)
        setState({
            contact: "",
            phone: "",
            email: "",
            request: ""
        });

    }; 




    return (
        <div className="flex justify-center px-10 py-[40px] mt-[50px] form-bg" id="form">
            <div className="max-w-[732px] w-full bg-white rounded-[10px] px-2 py-[60px] flex flex-col items-center">
                <h1 className="w-fit font-bold text-center sm:text-3xl text-2xl pb-[10px]">Отправьте заявку</h1>
                <h1 className="w-fit text-center font-bold sm:text-2xl text-xl">на получение предложения</h1>
                <form className="flex flex-col gap-[10px] mt-[10px]" onChange={onChange}>
                    <input type="text" name="contact" placeholder="Контактное лицо" ></input>
                    <input type="phone" name="phone" placeholder="Телефон" ></input>
                    <input type="email" name="email" placeholder="E-mail" ></input>
                    {/* <input type="file"  placeholder="Прикрепите карточку организацции" ></input> */}
                    <textarea name="request" placeholder="Ваш запрос" ></textarea>
                    <button onClick={submit}
                        className="px-5 py-2 border-2 rounded-full border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400">
                        Отправить запрос</button>
                </form>



            </div>
        </div>

    )
}

export default Form