<template>
    <div class = "recommendation">
        <div class = "top3">
            <ul>
                <li class = "characters" v-for= "index in 3" :key=index>
                    {{index}}. {{storeState.final[index].name}}<br>
                    {{storeState.final[index]['flavortext-eng']}}
                    <br>
                    <br>
                    <br>
                </li>
            </ul>
        </div>
        {{storeState.chosenTraits}}<br>
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
        };
    },
    methods: {
    }
}
</script>
