function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
var album1 = make_album("Artist1", "Album Title 1", 10);
var album2 = make_album("Artist2", "Album Title 2");
var album3 = make_album("Artist3", "Album Title 3", 15);
// Print each album information
console.log(album1);
console.log(album2);
console.log(album3);
