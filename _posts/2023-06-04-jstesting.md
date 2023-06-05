---
toc: true
comments: true
layout: post
title: Debugging
description: Debugging
---

<html>
<head>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #F0F0F0;
    color: black;
  }
  .song-item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
  }
  form {
    background-color: #f3f3f3;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="number"],
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  input[type="submit"] {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  button {
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
</head>
<body>
<h2>Add your favorite songs!</h2>
<form id="songForm">
  <label for="title">Title:</label>
  <input type="text" id="title" name="title">
  <label for="artist">Artist:</label>
  <input type="text" id="artist" name="artist">
  <label for="genre">Genre:</label>
  <input type="text" id="genre" name="genre">
  <label for="length">Length (in seconds):</label>
  <input type="number" id="length" name="length">
  <input type="submit" value="Add Song">
</form>

<button onclick="sortAndSearch(sortByTitle, 'title')">Sort by Title</button>
<button onclick="sortAndSearch(sortByArtist, 'artist')">Sort by Artist</button>
<button onclick="sortAndSearch(sortByGenre, 'genre')">Sort by Genre</button>

<div id="songs"></div>
<script id="songTemplate" type="text/template">
  <div class="song-item">
    <span>{title} by {artist}, Genre: {genre}, Length: {length}s</span>
    <button><a href="{{ site.baseurl }}/CPlaylist" class="add-to-playlist">Add to your playlists</a></button>
  </div>
</script>


<script>
  let songs = JSON.parse(localStorage.getItem('songs')) || [];

  function displaySongs(songs) {
    const songsDiv = document.getElementById('songs');
    songsDiv.innerHTML = '';
    const template = document.getElementById('songTemplate').innerText;
    songs.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.innerHTML = template.replace('{title}', song.title).replace('{artist}', song.artist).replace('{genre}', song.genre).replace('{length}', song.length);
      songDiv.querySelector('.add-to-playlist').addEventListener('click', function() {
        addToPlaylist(song);
      });
      songsDiv.appendChild(songDiv);
    });
  }

  function addToPlaylist(song) {
    console.log('Adding song to playlist:', song);
  }

  function addSong(song) {
    songs.push(song);
    localStorage.setItem('songs', JSON.stringify(songs));
  }

  function sortByTitle() {
    return [...songs].sort((a, b) => a.title.localeCompare(b.title));
  }

  function sortByArtist() {
    return [...songs].sort((a, b) => a.artist.localeCompare(b.artist));
  }

  function sortByGenre() {
    return [...songs].sort((a, b) => a.genre.localeCompare(b.genre));
  }

  function sortAndSearch(sortFunction, searchField) {
    const searchText = prompt("Enter search text:").toLowerCase();
    let sortedSongs = sortFunction();
    if (searchText !== null && searchText !== '') {
      sortedSongs = sortedSongs.filter(song => song[searchField].toLowerCase().includes(searchText));
    }
    displaySongs(sortedSongs);
  }

  document.getElementById('songForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const genre = document.getElementById('genre').value;
    const length = Number(document.getElementById('length').value);
    addSong({ title, artist, genre, length });
    displaySongs(songs);
  });

  displaySongs(songs);
</script>
</body>
</html>