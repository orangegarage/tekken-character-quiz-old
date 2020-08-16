<template>
    <div class = "recommendation">
        {{storeState.picked}}
    </div>
</template>

<script>
import questions from '@/components/Questions.vue';
import quiz from "@/assets/quiz.json";
import {store} from "../core/questions.js";
// use a filter to get all json objects
// iterate through and assign them values?
// 1 variable for all stuff?
// have a array of answers based on id
// empty asrray to fill with characters after the first 2 questions that I can edit with each condition? Or just initialize with json)
export default {
    data() {
        return {
            storeState: store.state
        };
    }
}
</script>
