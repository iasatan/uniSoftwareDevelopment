<template>
  <h1>Music admin page</h1>
  <table class="table table-bordered">
    <thead>
    <tr>
      <th>ID</th>
      <th>Filename</th>
      <th>Artist</th>
      <th>Title</th>
      <th>Album</th>
      <th>Comment</th>
      <th>Track</th>
      <th>Year</th>
      <th>Genre</th>
      <th>Path</th>
      <th>Filesize</th>
      <th>Copyright</th>
      <th>Layer</th>
      <th>Stereo</th>
      <th>Goodframes</th>
      <th>Badframes</th>
      <th>Freq</th>
      <th>Playtime</th>
      <th>Delete</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="r in result" :key="r.mid">
      <td>{{r.mid}}</td>
      <td>{{r.filename}}</td>
      <td>{{r.artist}}</td>
      <td>{{r.title}}</td>
      <td>{{r.album}}</td>
      <td>{{r.comment}}</td>
      <td>{{r.track}}</td>
      <td>{{r.year}}</td>
      <td>{{r.genre}}</td>
      <td>{{r.path}}</td>
      <td>{{r.filesize}}</td>
      <td>{{r.copyright}}</td>
      <td>{{r.layer}}</td>
      <td>{{r.stereo}}</td>
      <td>{{r.goodframes}}</td>
      <td>{{r.badframes}}</td>
      <td>{{r.frequency}}</td>
      <td>{{r.playtime}}</td>
      <td><button v-on:click="deleteMusic(r.mid)">Delete</button></td>
    </tr>
    </tbody>
  </table>
  <h2>Add music</h2>

  <div id="addMusicForm">
    <div id="registrationForm">
      <form @submit.prevent="processForm(formData)" method="post">
        <div>
          <label for="filename">Filename: </label>
          <input name="filename" v-model="formData.filename" placeholder="Filename"> <!-- required="required" -->
        </div>
        <div>
          <label for="artist">Artist: </label>
          <input name="artist" v-model="formData.artist" placeholder="Artist">
        </div>
        <div>
          <label for="title">Title: </label>
          <input name="title" v-model="formData.title" placeholder="Title">
        </div>
        <div>
          <label for="album">Album: </label>
          <input name="album" v-model="formData.album" placeholder="Album">
        </div>
        <div>
          <label for="comment">Comment: </label>
          <input name="comment" v-model="formData.comment" placeholder="Comment">
        </div>
        <div>
          <label for="track">Track: </label>
          <input name="track" v-model="formData.track" placeholder="Track" type="number" max="32767"> <!-- smallint -->
        </div>
        <div>
          <label for="year">Year: </label>
          <input name="year" v-model="formData.year" placeholder="Year" type="number" maxlength="4">
        </div>
        <div>
          <label for="genre">Genre: </label>
          <input name="genre" v-model="formData.genre" placeholder="Genre" type="number" min="1" max="4">
        </div>
        <div>
          <label for="path">Path: </label>
          <input name="path" v-model="formData.path" placeholder="Path">
        </div>
        <div>
          <label for="filesize">Filesize: </label>
          <input name="filesize" v-model="formData.filesize" placeholder="Filesize" type="number" maxlength="6">
        </div>
        <div>
          <label for="copyright">Copyright: </label>
          <input name="copyright" v-model="formData.copyright" placeholder="Copyright">
        </div>
        <div>
          <label for="layer">Layer: </label>
          <input name="layer" v-model="formData.layer" placeholder="Layer">
        </div>
        <div>
          <label for="stereo">Stereo: </label>
          <input name="stereo" v-model="formData.stereo" placeholder="Stereo">
        </div>
        <div>
          <label for="goodframes">Goodframes: </label>
          <input name="goodframes" v-model="formData.goodframes" placeholder="Goodframes" type="number" maxlength="6">
        </div>
        <div>
          <label for="badframes">Badframes: </label>
          <input name="badframes" v-model="formData.badframes" placeholder="Badframes" type="number" maxlength="6">
        </div>
        <div>
          <label for="frequency">Frequency: </label>
          <input name="frequency" v-model="formData.frequency" placeholder="Frequency" type="number" maxlength="6">
        </div>
        <div>
          <label for="playtime">Playtime: </label>
          <input name="playtime" v-model="formData.playtime" placeholder="Playtime" type="number" maxlength="6">
        </div>


        <input type="submit" value="Add music">
      </form>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {

 name: "MusicAdmin",
 data() {
   return {
     result: {},
     formData: {
      errors: [],
      filename: '',
      artist: '',
      title: '',
      album: '',
      comment: '',
      track: '',
      year: '',
      genre: '',
      path: '',
      filesize: '',
      copyright: '',
      layer: '',
      stereo: '',
      goodframes: '',
      badframes: '',
      frequency: '',
      playtime: ''
     }
   };
},
 mounted() {
   this.getMusic();
 },
 methods: {
   getMusic: function () {
     axios
         .get(`http://localhost:3000/api/music`)
         .then(response => {
           this.result = response.data; })
         .catch(error => alert(error));
   },
   processForm: function (formData) { 

     axios.post(`http://localhost:3000/addMusic`, {
       filename: formData.filename,
       artist: formData.artist,
       title: formData.title,
       album: formData.album,
       comment: formData.comment,
       track: formData.track,
       year: formData.year,
       genre: formData.genre,
       path: formData.path,
       filesize: formData.filesize,
       copyright: formData.copyright,
       layer: formData.layer,
       stereo: formData.stereo,
       goodframes: formData.goodframes,
       badframes: formData.badframes,
       frequency: formData.frequency,
       playtime: formData.playtime
     }).then(function (response) {
       console.log(response);
       window.location.reload();
     }).catch(e => {
       alert('error: ' + e);
       console.log(e);
     });

   },
   deleteMusic: function(mid) {
     axios.post(`http://localhost:3000/deleteMusic/`+mid);
     window.location.reload();

   }
 }
};
</script>

<style scoped>
input, select {
  width: 75%;
  padding: 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid green;
  alignment: center;
}

option {
  padding: 12px;
  margin: 8px 0;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
  alignment: center;
  width: 75%;
  margin-top: 6px;
  font-weight: bold;
  font-size: larger;
}

input:focus {
  background-color: lightblue;
}

input[type = submit] {
  font-weight: bold;
  font-size: larger;
}

input[type=submit]:hover {
  background-color: #45a049;
  color: white;
}

</style>