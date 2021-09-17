<template>
    <div>
        <div @click="getSub">getSub</div>
        <div>parentDom: <div v-html="subdom"></div></div>
        <h1 ref="subTitle">Sub</h1>
        <div @click="getFather">getFather</div>
    </div>
</template>

<script>
export default {
    name: "Subcomponent",
    inject: ['getFather'],
    data: function () {
        return {
            subdom: ''
        }
    },
    methods: {
        getSub: function () {
            this.subdom = this.$parent
        }
    }
}
</script>