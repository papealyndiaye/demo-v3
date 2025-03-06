'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between justify-center px-4">
          <ul className="flex gap-6 text-gray-800 font-medium">
          <li className="dge mr-auto flex justify-between justify-center px-4">
              <h2>D G E</h2>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/inscription" className="hover:text-blue-600 transition">
                Inscription
              </Link>
            </li>
            <li>
              <Link href="/connexion" className="hover:text-blue-600 transition">
                Connexion
              </Link>
            </li>
            {/* <li>
             <Link href="/validation" className="hover:text-blue-600 transition">
                Validation d'identité
              </Link>
              
            </li> */}
          </ul>
        </nav>
      </header>

      <div className="text-center mt-12 p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenue sur le site d'identification électorale !
        </h1>
        <p className="text-lg text-gray-600">
          Connectez-vous, inscrivez-vous et validez votre identité en toute simplicité.
        </p>
      </div>
        </div>

  );
}
