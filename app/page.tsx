"use client"
import Image from 'next/image'
import Header from "../components/Header"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Form from "../components/Form"
import ItemList from "../components/ItemList"

const SliderInfo = [
  {
    title: "Огнестойкий полипропилен",
    description: "Огнестойкий полипропилен (PPs) - это полипропилен изготовленный по специальной технологии, обладает высокой стойкостью к температурам иустойчив открытому огню. Товар имеет росийский сертификат классификации пластмасс по огнестойкости. Этот стандарт определяет способность материала гореть или угасать после обработки пламенем.",
    button: "Подобрать листы из каталога",
    image: "/images/home/ppSamp.png"

  }, {
    title: "Огнестойкий полипропилен",
    description: "Огнестойкий полипропилен (PPs) - это полипропилен изготовленный по специальной технологии, обладает высокой стойкостью к температурам иустойчив открытому огню. Товар имеет росийский сертификат классификации пластмасс по огнестойкости. Этот стандарт определяет способность материала гореть или угасать после обработки пламенем.",
    button: "Подобрать листы из каталога",
    image: "/images/home/ppSamp.png"

  }, {
    title: "Огнестойкий полипропилен",
    description: "Огнестойкий полипропилен (PPs) - это полипропилен изготовленный по специальной технологии, обладает высокой стойкостью к температурам иустойчив открытому огню. Товар имеет росийский сертификат классификации пластмасс по огнестойкости. Этот стандарт определяет способность материала гореть или угасать после обработки пламенем.",
    button: "Подобрать листы из каталога",
    image: "/images/home/ppSamp.png"

  }, {
    title: "Огнестойкий полипропилен",
    description: "Огнестойкий полипропилен (PPs) - это полипропилен изготовленный по специальной технологии, обладает высокой стойкостью к температурам иустойчив открытому огню. Товар имеет росийский сертификат классификации пластмасс по огнестойкости. Этот стандарт определяет способность материала гореть или угасать после обработки пламенем.",
    button: "Подобрать листы из каталога",
    image: "/images/home/ppSamp.png"

  }

]

export default function Home() {
  return (
    <main >
      <Header />
      <div className='container pt-[50px] ' id="home" >
        <Splide aria-label="My Favorite Images">
        {SliderInfo.map((elem, index) => (
           <SplideSlide key={index}>
              <div  className='flex h-[500px] items-center justify-between'>
                <div className='max-w-[504px] pl-[50px]' >
                  <h1 className='mt-[10px] mb-[20px] text-gray-700 font-bolt text-2xl'> {elem.title} </h1>
                  <p className='py-[15px]'>
                    {elem.description}
                  </p>

                  <button className='px-3 py-2 mt-5 border-2 rounded-full border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400'>{elem.button}</button>
                </div>

                <div className='min-w-[334px] max-w-[334px] h-[394px] object-cover mt-[80px] mr-[150px]'>

                  <Image src={elem.image} width={334} height={394} alt="non" />
                </div>
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
