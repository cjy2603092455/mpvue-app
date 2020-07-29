<template>
    <div class="navbar">
        <span></span>
        <span></span>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        back: {
            type: Boolean,
            required:false,
            default: true
        }
    }
}
</script>

<style scoped>
.navbar{
    height: 128rpx;
}
</style>