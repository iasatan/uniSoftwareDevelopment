<template>
    <main>
      <div class="container">
        <input type="text"/>
        <button type="button" @click="search()">Search</button>
      </div>

      <div class="card" v-for="result in results" :key="result.mid">
        <img class="imgCard" src="../img/searchMusic.png" alt="Avatar">
        <div class="container">
          <h4><b>{{result.title}}</b></h4>
          <p>{{result.artist}}</p>
          <p>{{result.album}} & {{result.year}}</p>
        </div>
      </div>


    </main>
</template>

<script>
    export default {
        name: 'HomePage',
      data(){
        return{
          results:[],
          result:{
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
    }
</script>

<style scoped></style>