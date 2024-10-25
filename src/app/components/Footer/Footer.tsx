

import Link from 'next/link';

export default function Footer  ()  {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className=" text-center">
                <p>Copyright &copy; 2024  Designed By Meer Saqlain. All rights reserved.</p>
                <nav className="mt-2">
                    <Link href="/" className="text-gray-400 hover:text-white mx-2">Home</Link>
                    <Link href="/" className="text-gray-400 hover:text-white mx-2">About</Link>
                    <Link href="/" className="text-gray-400 hover:text-white mx-2">Contact</Link>
                </nav>
            </div>
        </footer>
    );
};

