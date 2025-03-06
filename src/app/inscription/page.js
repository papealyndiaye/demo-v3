'use client';
// InscriptionElecteur.js
import React, { useState } from 'react';
import Link from 'next/link';

const InscriptionElecteur = () => {
  const [formData, setFormData] = useState({
    username: '',
    numéro_CIN: '',
    nom: '',
    numero_bureau_de_vote: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add the logic for sending data to the server here
  };

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

      {/* Inscription Form */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Inscription</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Numéro d'Électeur</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black-700 font-medium mb-1">Numéro CIN</label>
              <input
                type="text"
                name="numéro_CIN"
                value={formData.numéro_CIN}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black-700 font-medium mb-1">Nom</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-black-700 font-medium mb-1">Numéro Bureau de Vote</label>
              <input
                type="text"
                name="numero_bureau_de_vote"
                value={formData.numero_bureau_de_vote}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InscriptionElecteur;
