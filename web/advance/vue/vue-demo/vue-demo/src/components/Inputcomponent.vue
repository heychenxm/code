<template>
    <input ref='input'/>
</template>

<script>
export default {
    name: "Inputcomponent",

    methods: {
        focus: function () {
            this.$refs.input.focus();
        }
    }
}
</script>