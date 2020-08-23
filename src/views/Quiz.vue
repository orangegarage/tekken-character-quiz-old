<template>
    <div class = "quiz">
        <Questions/>
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