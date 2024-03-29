import Image from "./image";
import Menu from "./menu";
import Link from "next/link";
import LanguagePicker from "./languagePicker";

export default function Header() {
    return (
        <div className="flex flex-col lg:flex-row flex-wrap bg-black justify-between items-center px-16 pt-4 pb-8 lg:pb-4 gap-4">
            <div className="flex items-center justify-center gap-4">
                <Link href=""><Image src="/assets/logo-nobg.png" alt="logo" width={100} height={100} /></Link>
                <LanguagePicker />
            </div>
            <Menu />
        </div>
    )
}