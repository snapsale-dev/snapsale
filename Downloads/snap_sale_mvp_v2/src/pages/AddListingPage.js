import React, { useState } from 'react';

function AddListingPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ogłoszenie dodane!\nTytuł: ${title}\nOpis: ${description}\nCena: ${price} zł`);
    setTitle('');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dodaj Ogłoszenie</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" placeholder="Tytuł" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" required />
        <textarea placeholder="Opis" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded" required />
        <input type="number" placeholder="Cena" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Dodaj</button>
      </form>
    </div>
  );
}

export default AddListingPage;