'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const ValidationIdentite = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    question_securite: '',
    reponse_securite: '',
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
        <nav className="container mx-auto flex justify-between items-center px-4">
          <ul className="flex gap-6 text-gray-800 font-medium">
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
            <li>
              <Link href="/validation" className="hover:text-blue-600 transition">
                Validation d'identité
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Validation Identité Form */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Validation d'identité</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Numéro d'Électeur ou Email</label>
              <input
                type="text"
                name="identifier"
                value={formData.identifier}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Mot de passe</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Question de Sécurité</label>
              <select
                name="question_securite"
                value={formData.question_securite}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionnez une question</option>
                <option value="nom_de_votre_premier_animal">
                  Quel est le nom de votre premier animal de compagnie ?
                </option>
                <option value="nom_de_jeune_fille_mere">
                  Quel est le nom de jeune fille de votre mère ?
                </option>
                <option value="premiere_école">Quel est le nom de votre première école ?</option>
                <option value="ville_naissance">Dans quelle ville êtes-vous né(e) ?</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Réponse à la Question de Sécurité</label>
              <input
                type="text"
                name="reponse_securite"
                value={formData.reponse_securite}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Valider
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ValidationIdentite;
