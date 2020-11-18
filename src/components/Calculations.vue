<template>
    <div class = "recommendation">
        <div class = "top3">
            <ul>
                <li class = "resultingimg" v-for= "index in 3" :key=index>
                    <a :href= getLink(storeState.final[index-1].shortname) target= "_blank" rel="noopener">
                        <img :src= getImg(storeState.final[index-1].photo) :alt=storeState.final[index-1].name>
                        <br>{{index}}. {{$t('characters.'+storeState.final[index-1].shortname)}}
                    </a>
                </li>
                <p>[{{$t('tutorial.Clickmsg')}}]</p>
            </ul>

            <!-- add padding l8r -->
            <ul>
                <li class = "characters" v-for= "index in 3" :key=index>
                    {{index}}. {{$t('characters.'+storeState.final[index-1].shortname)}}
                    <br> 
                    <!-- index - 1 because array starts from 0 duh -->
                    {{$t('flavortexts.'+storeState.final[index-1].name)}}
                    <br><br><br>
                </li>
            </ul>
        </div>
        <br>
        <!-- {{storeState.chosenTraits}} -->
    </div>
</template>

<script>
// import quiz from "@/assets/quiz.json";
import {store} from "@/core/questions.js";

// use a filter to get all json objects
// iterate through and assign them values?
// 1 variable for all stuff?
// have a array of answers based on id
// empty asrray to fill with characters after the first 2 questions that I can edit with each condition? Or just initialize with json)
export default {
    data() {
        return {
            storeState: store.state,
            category: "",
            picked: store.state.picked,
            link: ""
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
