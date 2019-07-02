<template>
    <div class="wcounter">
        <div v-for="(item, index) in wvalue" :key="index">
            <WSelect v-model="wvalue[index]"/>
        </div>
    </div>
</template>

<script>

import WSelect from "@/components/WSelect.vue";

export default {
    name: "WCounter",
    components: {WSelect},
    props: ['wvalue'],
}
</script>

<style>
.wcounter {
    display: flex
}
</style>
