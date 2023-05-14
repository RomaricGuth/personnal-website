import Image from "next/image";
import Menu from "./menu";
import Link from "next/link";

export default function Header() {
    return (
        <div class="flex flex-row bg-black justify-between px-16">
            <Link href=""><Image src="/assets/logo-nobg.png" alt="logo" width={100} height={100} /></Link>
            <Menu class="my-10" />
        </div>
    )
}