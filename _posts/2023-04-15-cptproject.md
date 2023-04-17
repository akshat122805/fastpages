---
title: CPT Project (Individual)
layout: base
description: Music Personality
tags: [markdown]
---


<div data-aos="fade-right">
<h2>Musical Preference Quiz</h2>
<div id="question1">
<p>Do you prefer modern music?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question2" style="display: none">
<p>Do you enjoy music with a fast tempo?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question3" style="display: none">
<p>Do you like music with lyrics?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question4" style="display: none">
<p>Do you prefer instrumental music?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question5" style="display: none">
<p>Do you enjoy electronic music?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="question6" style="display: none">
<p>Do you prefer music from different cultures?</p>
<button onclick="answer(true)">Yes</button>
<button onclick="answer(false)">No</button>
</div>
<div id="result" style="display: none"></div>
</div>

<div style="padding: 10px;"></div>

<div data-aos="fade-right">
<h3>Which music preference will you like to pursue?</h3>
<select id="music-select">
  <option>90's Hip-Hop</option>
  <option>Rock N Roll</option>
  <option>Modern Rap/Street Drill</option>
  <option>UK Drill</option>
  <option>Classical Music</option>
  <option>Classical Jazz</option>
  <option>Pop Music</option>
  <option>Old Style Soul</option>
  <option>EDM</option>
  <option>Country/Folk</option>
  <option>Blues</option>
  <option>K-POP</option>
  <option>Funk</option>
  <option>Salsa</option>
  <option>Goth</option>
  <option>Latin/Spanish</option>
  <option>French Classical</option>
  <option>Jamaican</option>
  <option>Japanese Classical</option>
  <option>Bollywood Music</option>
  <option>Iranian Music</option>
  <option>Chinese Folk</option>
  <option>Opera</option>
  <option>Heavy Metal</option>
  <option>2000's Rap</option>
  <option>Mashed Soul & Rap</option>
  <option>Upbeat</option>
  <option>Poprock</option>
  <option>Hawaiian/Islander Music</option>
</select>
<button id="save-button">Save</button>
<p>Your current music preference is <span id="saved-music"></span></p>
</div>

<script>
// JavaScript code that listens to a click on the "Save" button and saves the selected value to local storage
const saveButton = document.getElementById('save-button');
const musicSelect = document.getElementById('music-select');

saveButton.addEventListener('click', function() {
  const selectedMusic = musicSelect.value;
  localStorage.setItem('selectedMusic', selectedMusic);
  displaySavedMusic(selectedMusic);
}

// JavaScript code that retrieves and displays the saved value when the page is loaded
const savedMusic = localStorage.getItem('selectedMusic');
if (savedMusic) {
  displaySavedMusic(savedMusic);
}
</script>

<div data-aos="fade-right">
  <h3>Choose a music genre to remove:</h3>
  <select id="music-select">
    <option value="90's Hip-Hop">90's Hip-Hop</option>
    <option value="Rock N Roll">Rock N Roll</option>
    <option value="Modern Rap/Street Drill">Modern Rap/Street Drill</option>
    <option value="UK Drill">UK Drill</option>
    <option value="Classical Music">Classical Music</option>
    <option value="Classical Jazz">Classical Jazz</option>
    <option value="Pop Music">Pop Music</option>
    <option value="Old Style Soul">Old Style Soul</option>
    <option value="EDM">EDM</option>
    <option value="Country/Folk">Country/Folk</option>
    <option value="Blues">Blues</option>
    <option value="K-POP">K-POP</option>
    <option value="Funk">Funk</option>
    <option value="Salsa">Salsa</option>
    <option value="Goth">Goth</option>
    <option value="Latin/Spanish">Latin/Spanish</option>
    <option value="French Classical">French Classical</option>
    <option value="Jamaican">Jamaican</option>
    <option value="Japanese Classical">Japanese Classical</option>
    <option value="Bollywood Music">Bollywood Music</option>
    <option value="Iranian Music">Iranian Music</option>
    <option value="Chinese Folk">Chinese Folk</option>
    <option value="Opera">Opera</option>
    <option value="Heavy Metal">Heavy Metal</option>
    <option value="2000's Rap">2000's Rap</option>
    <option value="Mashed Soul & Rap">Mashed Soul & Rap</option>
    <option value="Upbeat">Upbeat</option>
    <option value="Poprock">Poprock</option>
    <option value="Hawaiian/Islander Music">Hawaiian/Islander Music</option>
  </select>
  <button id="submit-button">Remove</button>
</div>
<script>
  const submitButton = document.getElementById('submit-button');
  const musicSelect = document.getElementById('music-select');
  let musicList = 
  ["90's Hip-Hop",
  "Rock N Roll",
  "Modern Rap/Street Drill",
  "UK Drill",
  "Classical Music",
  "Classical Jazz",
  "Pop Music",
  "Old Style Soul",
  "EDM",
  "Country/Folk",
  "Blues",
  "K-POP",
  "Funk",
  "Salsa",
  "Goth",
  "Latin/Spanish",
  "French Classical",
  "Jamaican",
  "Japanese Classical",
  "Bollywood Music",
  "Iranian Music",
  "Chinese Folk",
  "Opera",
  "Heavy Metal",
  "2000's Rap",
  "Mashed Soul & Rap",
  "Upbeat",
  "Poprock",
  "Hawaiian/Islander Music"];
const submitButton = document.getElementById('submit-button');
const musicSelect = document.getElementById('music-select');
submitButton.addEventListener('click', function () {
  const selectedMusic = musicSelect.value;
  removeMusic(selectedMusic);
});
function removeMusic(music) {
  musicList = musicList.filter(item => item !== music);
  console.log(`Removing music genre: ${music}`);
  console.log(`Updated music list: ${musicList}`);
}
</script>

<script>
    // Music list
var musicList = ["90's Hip-Hop", "Rock N Roll", "Modern Rap/Street Drill", /* Add the rest of the genres */];
// Sets the current question
var currentQuestion = 1;
// Array for the answers to the questions
var answers = [];

// Function for the questions
function answer(response) {
  // Finds the current answer and hides or unhides it
  answers[currentQuestion - 1] = response;
  document.getElementById("question" + currentQuestion).style.display = "none";
  currentQuestion++;

  if (currentQuestion <= 6) {
    document.getElementById("question" + currentQuestion).style.display = "block";
  } else {
    removeMusicGenres(answers[0], answers[1], answers[2], answers[3], answers[4], answers[5]);
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Based on your answers, we recommend the following music genres: " + musicList.join(", ");
  }
}

function removeMusicGenres(genre1, genre2, genre3, genre4, genre5, genre6) {
  musicList = musicList.filter(item => item !== genre1 && item !== genre2 && item !== genre3 && item !== genre4 && item !== genre5 && item !== genre6);
}

function removeMusicGenres(likesFast, likesSlow, likesInstrumental, likesElectronic, likesVocals, likesLyrical) {
  if (likesFast) {
    musicList = musicList.filter(genre => genre !== "Classical Music" && genre !== "Classical Jazz" && genre !== "Old Style Soul" && genre !== "Blues" && genre !== "French Classical" && genre !== "Opera" && genre !== "Hawaiian/Islander Music");
  }

  if (likesSlow) {
    musicList = musicList.filter(genre => genre !== "EDM" && genre !== "K-POP" && genre !== "Funk" && genre !== "Salsa" && genre !== "Heavy Metal" && genre !== "Upbeat");
  }

  if (likesInstrumental) {
    musicList = musicList.filter(genre => genre !== "Modern Rap/Street Drill" && genre !== "K-POP" && genre !== "2000's Rap" && genre !== "Mashed Soul & Rap" && genre !== "Poprock");
  }

  if (likesElectronic) {
    musicList = musicList.filter(genre => genre !== "Classical Music" && genre !== "Classical Jazz" && genre !== "Old Style Soul" && genre !== "Blues" && genre !== "Country/Folk" && genre !== "French Classical" && genre !== "Japanese Classical" && genre !== "Opera" && genre !== "Hawaiian/Islander Music");
  }

  if (likesVocals) {
    musicList = musicList.filter(genre => genre !== "EDM" && genre !== "Classical Music" && genre !== "Classical Jazz" && genre !== "Country/Folk" && genre !== "Chinese Folk");
  }

  if (likesLyrical) {
    musicList = musicList.filter(genre => genre !== "EDM" && genre !== "K-POP" && genre !== "Funk" && genre !== "Salsa" && genre !== "Heavy Metal" && genre !== "Upbeat" && genre !== "Poprock" && genre !== "Hawaiian/Islander Music");
  }
}
// The result of the function
document.getElementById("result").innerHTML = "Based on your answers, we recommend the following music genres: " + musicList.join(", ");

</script>