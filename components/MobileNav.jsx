"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'services', path: '/services' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Function to handle link click and close the nav
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger 
                className="flex justify-center items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <CiMenuFries className='text-[32px] text-accent' />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/" onClick={handleLinkClick}>
                        <h1 className="text-4xl font-semibold">Zak<span className="text-accent">.dev</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                                } text-center capitalize hover:text-accent transition-all`}
                            onClick={handleLinkClick} // Close the nav on link click
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
