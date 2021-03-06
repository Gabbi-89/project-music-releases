import React from 'react';
import data from '../data.json';

import { AlbumInfo } from './AlbumInfo';

// The actual div containing all information such as image, artist name, album name and the correct URL-links
export const AlbumCard = () => {
  return (
    <>
      {data.albums.items.map(album => { // Mapping through the album array to get album-name, images, and the artist array.
        return (
        <AlbumInfo 
          key={album.name}
          image={album.images[0].url} 
          name={album.name} 
          artist={album.artists.map(artist => { // Mapping through the artist array for when having several artists
            return ( 
              <a 
                key={artist.external_urls.spotify} 
                href={artist.external_urls.spotify} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="artists-links">
                <span key={artist.name} className="artist-name">{artist.name}</span>
              </a>
            );
          })} 
          linkAlbum={album.external_urls.spotify}
        />
        );
      })}
    </>
  );
};