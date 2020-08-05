<template>
    <div class = "quiz">
        <p class = "questions">
            {{question1}}
        </p>
    </div>
        
</template>


<script>
export default {
    name: 'Questions',
    props: {
        question1: String
    }
}
</script>