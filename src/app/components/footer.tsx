import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai';

export function Footer() {

return (

<footer>
    <div className="bg-emerald-500 dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-4 lg:py-5 grid justify-center md:justify-normal">
            <ul className="md:h-auto items-center justify-center md:flex md:flex-row flex gap-5 md:gap-5">
                <li className=" text-white  text-center md:hover:bg-transparent">
                    <a href="#" target='_blank' rel="noreferrer" className="hover:underline"><FaWhatsapp size={30}/></a>
                </li>
                <li className=" text-white  text-center md:hover:bg-transparent">
                    <a href="#" target='_blank' rel="noreferrer" className="hover:underline"><AiOutlineInstagram size={30} /></a>
                </li>
                <li className=" text-white text-center md:hover:bg-transparent">
                    <a href="#" target='_blank' rel="noreferrer" className="hover:underline"><FaFacebook size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
    <div className='py-4 bg-emerald-600 dark:bg-gray-900 w-full'>
        <div className='flex justify-between items-center px-3 lg:px-28'>
            <h1 className='col-span-2 text-xs font-light text-center text-white uppercase'>© WDJM Corporate, {(new Date()).getFullYear()}.</h1>
            <a href='https://www.sacorp.tec.br?utm_source=htts://www.esferabsb.com.br&utm_medium=banner&utm_campaign=slogan' target='_blank' rel='noreferrer'>
          </a>
        </div>
    </div>
</footer>
)
}


