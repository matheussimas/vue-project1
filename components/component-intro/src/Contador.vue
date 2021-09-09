<template>
    <div class="contador">
        <span> {{ contador }} </span>
        <button @click="sum">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0,
        }
    },
    methods: {
        sum() {
            this.contador++
        },
        sub() {
            this.contador--
        },
    }
}
</script>


<style scoped>
/* o scoped mira o style somente nos elementos do componente */
    span {
        border-bottom: 1px solid #CCC;
        height: 30px;
        padding: 5px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color:coral;
        color: white;
        margin-left: 10px;
        outline: none;
    }
</style>