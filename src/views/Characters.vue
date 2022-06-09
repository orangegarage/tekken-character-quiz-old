<template>
    <div class = "characters">
        <Characterlist/>
    </div>
</template>

<script>
import Characterlist from '@/components/Listchars.vue'

export default {
    name: 'List',
    components: {
        Characterlist
    }
}
</script>