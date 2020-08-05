<template>
    <div class = "quiz">
        <Questions question1 = "Do you prefer a male or female character?"/>
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