'use client'

import Link from "next/link";
import { textVar } from "@/utils/variant";
import { motion } from "framer-motion";

export default function Navbar() {
    return(
        <div className="flex justify-between items-center p-4">
            <Link href={"/"}><motion.img variants={textVar} initial="initial" animate="animate" src={"/assets/logo.svg"} alt="SOCRATES" className="relative h-[50px] w-auto" /></Link>
            <span className="flex items-center gap-4 font-medium">
                <motion.a variants={textVar} initial="initial" animate="animate" href={"/about"} className="hover:text-tertiary transition-all">ABOUT</motion.a>
                <motion.a variants={textVar} initial="initial" animate="animate" href={"/login"} className="bg-secondary text-primary px-7 py-3 rounded-full hover:bg-tertiary transition-all">LOGIN</motion.a>
            </span>
        </div>
    )
}