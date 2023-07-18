import Image from "next/image"
import Link from "next/link"
import logo from "public/icons/logo.svg"
import React, {useState} from "react"



interface Props {
  
}

const Form: React.FC <Props> = () => {

    const [state , setState] = useState( {
        contact: "" ,
        phone: "", 
        email: "", 
        request: ""
    })


    const onChange = (event:any) => {
        /* Ваш код здесь */
         const target = event.target;
         const value = target.value;
         const name = target.name;
            setState({
          ...state,
              [name]: value,
              
           });
        
      };
    
      const submit = (e:any) => {
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
        <div className="flex justify-center py-[40px] form-bg"  id="form">
            <div className="max-w-[732px] w-full bg-white rounded-[10px] py-[60px] flex flex-col items-center">
                <h1 className="w-fit font-bold text-3xl pb-[10px]">Отправьте заявку</h1>
                <h1 className="w-fit font-bold text-2xl">на получение предложения</h1>
                <form className="flex flex-col gap-[10px] mt-[10px]" onChange={onChange}>
                        <input type="text" name="contact" placeholder="Контактное лицо" ></input>
                        <input type="phone" name="phone" placeholder="Телефон" ></input>
                        <input type="email" name="email" placeholder="E-mail" ></input>
                        {/* <input type="file"  placeholder="Прикрепите карточку организацции" ></input> */}
                        <textarea name="request"  placeholder="Ваш запрос" ></textarea>
                    <button onClick={submit} >Отправить запрос</button>
                </form>



            </div>    
        </div>
        
    )
}

export default Form