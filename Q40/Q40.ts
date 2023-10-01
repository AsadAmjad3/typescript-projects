function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  const album: { artist: string; title: string; tracks?: number } = {
    artist,
    title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Create three dictionaries representing different albums
const album1 = make_album("Artist1", "Album Title 1", 10);
const album2 = make_album("Artist2", "Album Title 2");
const album3 = make_album("Artist3", "Album Title 3", 15);

// Print each album information
console.log(album1);
console.log(album2);
console.log(album3);
