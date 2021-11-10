<template>
    <div class="search-bar">
        <form id="search-form" class="search-form" @submit.prevent="processForm(search)">
            <div class="form-group">
                <input 
                    v-model="search.value"
                    type="text" 
                    name="search-input" 
                    id="search-input" 
                    placeholder="Search for music..."
                >
                <select v-model="search.type" name="search-type" id="search-type">
                    <option v-for="(option, k) in searchTypes" :key="k">{{ option }}</option>
                </select>
            </div>

            <div v-if="results.length > 0" class="search-results">
                <ul>
                    <li v-for="(result, k) in results" :key="k">
                        {{ result.artist }}: {{ result.title }}
                    </li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'SearchBar',
        data() {
            return {
                search: {
                    value: '',
                    type: 'title'
                },
                results: []
            }
        },
        methods: {
            processForm: function(search) {
                axios
                    .get(`localhost:8080/music?${search.type}=${search.value}`)
                    .then(response => {
                        this.results = response;

                        search.value = ""
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        computed: {
            searchTypes: () => ["title", "artist", "album", "year", "genre", "playtime"]
        }
    }
</script>

<style scoped>
    .search-bar {
        margin-top: 10px;
    }

    .search-form {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        margin: auto;
        position: relative;
    }

    .form-group {
        display: flex;
    }

    #search-input {
        flex: 1;
        border: 1px solid gray;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    #search-input:focus {
        outline: none;
    }

    #search-type:focus {
        outline: none;
    }

    #search-type {
        background-color: white;
        border: 1px solid gray;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
    }

    .search-results {
        position: absolute;
        width: 100%;
        top: 19px;
    }

    .search-results ul {
        list-style: none;
        text-align: left;
        border: 1px solid gray;
        border-top: 0;
        padding: 0;
        margin: 0;
        font-size: 12px;
    }

    .search-results ul li {
        padding: 5px 10px;
        transition: 0.5s;
    }

    .search-results ul li:hover {
        background-color: rgb(230, 227, 227);
    }
</style>