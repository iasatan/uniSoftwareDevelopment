<template>
    <main>
        <h1>Available Musics 🎶</h1>
        <div class="card" v-for="music in musics" :key="music.mid">
          <img class="imgCard" src="../img/musicCard.png" alt="Avatar">
          <div class="container">
            <h4><b>{{music.title}}</b></h4>
            <p>{{music.artist}}</p>
            <p>{{music.album}} & {{music.year}}</p>
          </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';

    export default {
        name: 'HomePage',
      data(){
        return{
          musics:[],

          music:{
            mid:null,
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
        }
      },
      created() {
          this.list()
      },
      methods:{
          list(){
            axios.get('http://localhost:8080/api/music').then(resp =>{
              this.musics= resp.data;
              console.log(resp.data);
            })
          }
      },
    }
</script>

<style scoped>
h1{
  color: #8A2BE2;
}

</style>