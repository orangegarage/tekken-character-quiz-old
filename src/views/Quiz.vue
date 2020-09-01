<template>
    <div class = "quiz">
        <transition
            name="fade"
            mode="out-in">
        <Questions/>
        </transition>
    </div>
</template>

<script>
import Questions from '@/components/Questions.vue' //import from component

export default {
    name: 'Quiz',
    components: { 
        Questions
    }
}
</script>