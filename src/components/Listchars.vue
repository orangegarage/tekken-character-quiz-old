<template>
    <div>
        <ul>
            <!-- problem right now is the structure of the en/kr data store format, use character name as path to characters.json, portraits -->
            <li class = "resultingimg" v-for= "index in characterList.length" :key=index.shortname>
                <a :href= getLink(characterList[index-1].shortname) target= "_blank" rel="noopener">
                    <img :src= getImg(characterList[index-1].photo) :alt=characterList[index-1].name>
                    <br>{{index}}. {{$t('characters.'+characterList[index-1].shortname)}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
//import {store} from "@/core/questions.js";
import characters from "../assets/characters.json";

export default {
    data() {
        return {
            characterList: characters.characters
        };
    },
    methods: {
        tran(translate){
            if (typeof translate === 'string'){
                return this.$i18n.t(translate)
            }
            return translate[this.$i18n.locale];
        },
        getImg(path){
            return require('../assets' + path);
        },
        getLink(index){
            return this.tran('tutorial.'+index);
        }
    }
}
</script>