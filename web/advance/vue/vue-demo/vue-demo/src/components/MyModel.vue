<template>
    <div>
        <h2>my model</h2>
        <input  :value="value" @change="$emit('change', $event.target.value)"/>
        <div>{{checked}}</div>
    </div>
</template>

<script>
export default {
    props: {
        checked: String,
        value: String
    },
    model: {
        prop: "checked",
        event: "change"
    }
}
</script>

<style>

</style> 