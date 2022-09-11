import React from 'react';
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid'

const FoodDetailsModal = ({ openModal, setOpenModal }) => {
    const { strMeal, strMealThumb, strInstructions } = openModal;
    return (
        <div>
            <input type="checkbox" id="food-details-modal" className="modal-toggle" />
            <div className="modal justify-center items-center">
                <div className="modal-box">

                    <div className="card lg:card-side row">
                        <figure><img className='rounded-lg w-full columns-6' src={strMealThumb} alt="menu" /></figure>
                        <div className="card-body columns-6">
                            <h2 className="card-title">{strMeal}</h2>
                            <p className='text-sm text-left'>{strInstructions.substring(0, 200)}</p>
                            <div className='flex justify-items-center items-center space-x-4 mb-4'>
                                <PlusCircleIcon className='h-6 w-6'></PlusCircleIcon>
                                <input type="text" placeholder="0" className="w-20 input input-bordered" />
                                <MinusCircleIcon className='h-6 w-6'></MinusCircleIcon>
                            </div>
                        </div>
                    </div>



                    {/* <div className='flex flex-row '>
                        <figure><img className='rounded-lg w-full basis-1/2' src={strMealThumb} alt="menu" /></figure>
                        <div>
                            <h3 className="font-bold text-lg">{strMeal}</h3>
                            <p className="py-4 text-left">{strInstructions}</p>
                            <div className='flex justify-items-center items-center space-x-4 mb-4'>
                                <PlusCircleIcon className='h-6 w-6'></PlusCircleIcon>
                                <input type="text" placeholder="0" className="w-20 input input-bordered" />
                                <MinusCircleIcon className='h-6 w-6'></MinusCircleIcon>
                            </div>
                        </div>
                    </div> */}

                    <div className="modal-action">
                        <label htmlFor="food-details-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>

        </div>
        // <div>
        //     <>
        //         <div
        //             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        //         >
        //             <div className="absolute w-auto my-6 mx-auto max-w-3xl">
        //                 {/*content*/}
        //                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        //                     {/*header*/}
        //                     <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
        //                         <h3 className="text-3xl font-semibold">
        //                             Modal Title
        //                         </h3>
        //                         <button
        //                             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        //                             onClick={() => setOpenModal(null)}
        //                         >
        //                             <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
        //                                 ×
        //                             </span>
        //                         </button>
        //                     </div>
        //                     {/*body*/}
        //                     <div className="relative p-6 flex-auto">
        //                         <p className="my-4 text-slate-500 text-lg leading-relaxed">
        //                             I always felt like I could do anything. That’s the main
        //                             thing people are controlled by! Thoughts- their perception
        //                             of themselves! They're slowed down by their perception of
        //                             themselves. If you're taught you can’t do anything, you
        //                             won’t do anything. I was taught I could do everything.
        //                         </p>
        //                     </div>
        //                     {/*footer*/}
        //                     <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        //                         <button
        //                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //                             type="button"
        //                             onClick={() => setOpenModal(null)}
        //                         >
        //                             Close
        //                         </button>
        //                         <button
        //                             className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        //                             type="button"
        //                             onClick={() => setOpenModal(null)}
        //                         >
        //                             Save Changes
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        //     </>
        // </div>
    );
};

export default FoodDetailsModal;