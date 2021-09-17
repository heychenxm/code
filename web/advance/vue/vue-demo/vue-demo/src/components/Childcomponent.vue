<template>
    <div>
        <div @click="getParent">getParent</div>
        <div>parentDom: <div v-html="dom"></div></div>
        <div @click="getRoot">getRoot</div>
        <Subcomponent ref='subcomponent1'/>
        <Subcomponent ref='subcomponent2'/>
        <div @click="getSubRef">getSubRef</div>
        <Inputcomponent ref="testInputFoucs"></Inputcomponent>
        <div @click="focusInput">focus input</div>
    </div>
</template>

<script>
import Subcomponent from './Subcomponent.vue'
import Inputcomponent from './Inputcomponent.vue'
export default {
    name: "Childcomponent",
    data: function () {
        return {
            dom: ''
        }
    },
    methods: {
        getParent: function () {
            console.log(this.$parent);
            this.dom = this.$parent.$el;
        },
        getRoot: function () {
            console.log(this.$root);
        },
        getSubRef: function() {
            console.log(this.$refs);
            console.log(this.$children[0].$refs);
            console.log(this.$refs.subcomponent1.$refs);
        },
        getFather: function() {
            console.log('hello, i am father', this.$refs);
        },
        focusInput: function () {
            this.$refs.testInputFoucs.focus()
        }
    },
    provide: function () {
        return {
            getFather : this.getFather
        }
    },
    components: {
        Subcomponent,
        Inputcomponent
    }
}
</script>