import Image from "next/image";
import Menu from "./menu";
import Link from "next/link";
import LanguagePicker from "./languagePicker";

export default function Header() {
    return (
        <div class="flex flex-row bg-black justify-between items-center px-16">
            <div class="flex items-center gap-4">
                <Link href=""><Image src="/assets/logo-nobg.png" alt="logo" width={100} height={100} /></Link>
                <LanguagePicker />
            </div>
            <Menu class="my-10" />
        </div>
    )
}