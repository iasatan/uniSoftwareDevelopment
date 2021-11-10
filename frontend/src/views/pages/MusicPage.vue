<template>
    <main>
        <h1 style="color: #8A2BE2">Available Musics 🎶</h1>
       <input type="text" placeholder="Search"> <button type="button" class="btn-primary">🔍</button>
        <div class="card" v-for="music in musics" :key="music.mid">
                <div >
                    <img class="imgCard" src="../img/musicCard.png" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>{{music.title}}</b></h4>
                        <p>Album & Artist</p>
                    </div>
                </div>
            

                <div class="card">
                    <img class="imgCard" src="../img/musicCard.png" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Title</b></h4>
                        <p>Album & Artist</p>
                    </div>
                </div>

                <div class="card">
                    <img class="imgCard" src="../img/musicCard.png" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Title</b></h4>
                        <p>Album & Artist</p>
                    </div>
                </div>
                 
        </div>
            
       
    </main>
</template>


<script>
import axios from 'axios';
    let url='http://http://localhost:8081/api/music'
    export default {
        name: 'MusicPage',
        data(){
            return{
                musics:[],
                
                music:{
                    mid:null,
                    title:'',
                    artist:'',
                }
                
            }
            
        }, 
        create(){
            this.list()
        },
        methods:{
            list(){
                axios.get(url).then(response=>{
                    this.musics= response.data
                    
                });
            },
            
        }
    };
    
        
        
        

    
</script>

<style scoped></style>