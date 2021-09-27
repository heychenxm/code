<template>
    <div>
        <div>This is my slot!----->{{content}}</div>
        <slot>DEFAULT SLOT CONTENT</slot>
        <header>
            <slot name="header">header</slot>
        </header>
        <main>
            <slot>main</slot>
        </main>
        <footer>
            <slot name="footer">footer</slot>
        </footer>
        <div>
            bind相关的user: {{user}}
            <slot v-bind:testValue="testValue" name="testUser">
                {{user.name}} - {{testValue}}
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Myslot",
    data() {
        return {
            content: 'hello world',
            testValue: "this is testValue"
        }
    },
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>