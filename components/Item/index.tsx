import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface Props {
    id:string,
    name: string,
    thickness: string,
    dimensions: string,
    color: string,
    dicription: string,
    img:string

}



const Item: React.FC<Props> = ({ id, name, thickness , dimensions, color, dicription, img}) => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    return (
        
            <>
            <div className='h-full w-[100%]'>
                    <div className="relative flex w-full h-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative h-0 pb-[60%] mx-4 mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <Image 
                                className={ twMerge(" w-full h-full absolute top-0 left-0 object-cover ", id == "Rod" && "object-contain")} 
                                width={1000}
                                height={1000}
                                src={img}
                                alt="img-blur-shadow"
                            />
                        </div>
                        <div className="p-6">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {name}
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {dicription}
                            </p>
                        </div>
                        <div className="p-6 pt-0 mt-auto">
                            <button
                                onClick={() => setIsOpen(!isOpen) }
                                className = 'px-5 py-2 border-2 rounded-full border-purple-400 text-purple-400 hover:text-white hover:bg-purple-400'
                               
                                data-ripple-light="true"
                            >
                              Подробнее
                            </button >
                        </div>
                    </div>
                </div>


                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                        {name} 
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            Доступные цвета:   {color}
                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            Размеры:   {dimensions}

                                            </p>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                            Толщина:   {thickness}
                                            
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                            Закрыть
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        
    )

}

export default Item