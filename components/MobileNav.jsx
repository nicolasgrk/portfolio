"use client";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "À propos", path: "/resume" },
    { name: "Mes projets", path: "/work" },
    { name: "Contact", path: "/contact" },
];

const Mobilenav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Ajouter un titre pour l'accessibilité */}
                <SheetTitle className="sr-only">Menu de navigation mobile</SheetTitle>
                
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Nicolas <span className="text-accent">.</span></h1>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col justify-center items-center">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`
                                    ${
                                        link.path === pathname && "text-accent border-b2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all
                                `}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default Mobilenav;
