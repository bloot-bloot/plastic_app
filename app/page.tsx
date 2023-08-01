"use client"
import Image from 'next/image'
import Header from "../components/Header"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Form from "../components/Form"
import ItemList from "../components/ItemList"


//https://plastic-app.vercel.app/ [хост]

const SliderInfo = [
  {
    title: "Огнестойкий полипропилен",
    description: "Огнестойкий полипропилен (PPs) - это полипропилен изготовленный по специальной технологии, обладает высокой стойкостью к температурам иустойчив открытому огню. Товар имеет росийский сертификат классификации пластмасс по огнестойкости. Этот стандарт определяет способность материала гореть или угасать после обработки пламенем.",
    button: "Подобрать листы из каталога",
    image: "/images/items/itemPPs.png"

  }, {
    title: "Полипропиленовые листы",
    description: "Полипропилен (PP) – это полукристаллический, термопластичный пластик,  отличающийся повышенной жесткостью. Ему также присуща высокая химическая и корозионная стойкость. Максимальная температура использования полипропилена составляет 95 °C. Однако ниже точки замерзания полипропилен очень чувствителен к удару (следует избегать использования при температуре ниже -5 °C).",
    button: "Подобрать листы из каталога",
    image: "/images/items/itemPP.png"

  }, {
    title: "Вспененный полипропилен",
    description: "Вспененный полипропилен – особый вид прочного пластика, который производится практически так же, как и монолитный аналог. Главное отличие в том, что во время его изготовления вводятся специальные добавки, за счет которых слой вспенивается, приобретая нужную форму. Благодаря своей пористой структуре полимер хорошо удерживает тепло, поглощает звук, гасит вибрации и, при этом, имеет малый удельный вес.",
    button: "Подобрать листы из каталога",
    image: "/images/items/itemPPfm.png"

  }, {
    title: "Листовой гомогенный полипропилен",
    description: "Гомогенный полипропиленовый лист характерен высокой молекулярной массой. Данный материал обладает хорошей химической стойкостью, высокой термостойкостью и хорошей устойчивостью к ползучести. Коррозионная стойкость выше, чем у обычных полипропиленовых листов. Преимущество - высокая резистентность к коррозии и износостойкость. Рабочая температура: лист PPH: -10 ℃ ~ + 90 ℃ поддерживается и температура перехода + 100 ℃",
    button: "Подобрать листы из каталога",
    image: "/images/items/itemHm.png"

  }

]

export default function Home() {
  return (
    <main >
      <Header />
      <div className='container lg:pt-[50px] sm:pt-[150px] pt-[150px]' id="home" >
        <Splide
         aria-label="My Favorite Images"
          options={
            {
              breakpoints: {
                1024:{
                  pagination:false
                },
                640:{
                  arrows:false
                }
              }
            }
          }
        >
        {SliderInfo.map((elem, index) => (
           <SplideSlide key={index}>
              <div  className='flex gap-5 lg:flex-row flex-col sm:h-[500px] lg:pb-0 pb-8 items-center justify-between'>
                <div className='max-w-[504px] lg:pl-[50px] ' >
                  <h1 className='lg:mt-[10px] lg:mb-[20px] text-gray-700 font-bolt text-2xl'> {elem.title} </h1>
                  <p className='lg:block hidden py-[15px]'>
                    {elem.description}
                    
                  </p>

                  <button className='lg:block hidden px-3 py-2 mt-5 border-2 rounded-full border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400'><a href='#items'>{elem.button}</a></button>
                </div>

                <div className='min-w-[334px] max-w-[334px] h-[394px] object-cover lg:mt-[80px] mt-5  lg:mr-[150px]'>

                  <Image  src={elem.image} width={334} height={394} alt="non" />
                  
                </div>
                  <button className='lg:hidden block px-3 py-2 mt-5 border-2 rounded-full border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400'><a href='#items'>{elem.button}</a></button>

              </div>
              </SplideSlide>
            ))}

        </Splide>

      </div>

      <Form></Form>
      <ItemList></ItemList>    
            <footer className='border-t mt-10 px-2 py-10'>
        <div>
          <div>
            <h6 className='text-gray-700 mb-4'></h6>
            <ul >
              <li className='button-footer'><a href="#">О нас</a></li>
              <li className='button-footer'><a href="#">Наши работы</a></li>
            </ul>
          </div>
        </div>
      </footer>
          
    </main>
  )
}
