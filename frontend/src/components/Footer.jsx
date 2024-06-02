"use strict";

import Link from "next/link";
import FacebookIcon from "./ui/FacebookIcon";
import TwitterIcon from "./ui/TwitterIcon";
import InstagramIcon from "./ui/InstagramIcon";

const Footer = () => {
    return (
        <footer className="bg-white border-t py-6 md:py-8">
            <div
                className="container mx-auto px-4 md:px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <p className="text-gray-600">&copy; 2023 Dream Weaver</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                            <FacebookIcon className="w-6 h-6"/>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                            <TwitterIcon className="w-6 h-6"/>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900" prefetch={false}>
                            <InstagramIcon className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>
                <p className="text-gray-600 mt-4 md:mt-0">
                    Unleash your creativity and transform your living space with our powerful 2D and 3D design tools.
                </p>
            </div>
        </footer>
    )

}
export default Footer;
