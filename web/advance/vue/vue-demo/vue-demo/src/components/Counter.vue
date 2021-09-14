<template>
    <div>Counter: {{ counter }}-{{message}}</div>
</template>

<script>
export default {
    name: "Counter",
    props: {
        counter: Number
    },
    data: function() {
        return {
            message: this.counter || 'hello world'
        }
    }
}
</script>

<style scoped>

</style>