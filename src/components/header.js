import Image from "./image";
import Menu from "./menu";
import LanguagePicker from "./languagePicker";
import { Link } from "@/i18n/navigation";

export default async function Header() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap bg-black/70 backdrop-blur-md border-b border-white/10 justify-between items-center px-16 py-2 lg:py-3 gap-3">
      <div className="flex items-center justify-center gap-4">
        <Link href="/">
          <Image
            src="/assets/logo-nobg.png"
            alt="logo"
            width={60}
            height={60}
          />
        </Link>
        <LanguagePicker />
      </div>
      <Menu />
    </div>
  );
}
