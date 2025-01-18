import React, { useState } from 'react';

function HomePage() {
  const [listings, setListings] = useState([]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ogłoszenia</h1>
      {listings.length === 0 ? (
        <p>Brak ogłoszeń. Dodaj pierwsze ogłoszenie!</p>
      ) : (
        <ul>
          {listings.map((item, index) => (
            <li key={index} className="p-2 mb-2 border rounded">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
              <p className="text-green-600">{item.price} zł</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;