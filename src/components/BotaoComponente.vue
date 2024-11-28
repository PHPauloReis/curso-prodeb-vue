<template>
    <div class="btn" :class="buttonStyle">{{ textoBotao }}</div>
</template>

<style>

.active {
    background-color: #DBF4FE;
    border: 3px solid #78D9FC;
    color: #39B4E0;
    box-shadow: 0 3px #78D9FC;
}

.active:hover {
    background-color: #B5E8FC;
}

.danger {
    background-color: #FF4D54;
    border-color: #FF4D54;
    color: #FFF;
    box-shadow: 0 3px #D6151D;
}

.danger:hover {
    background-color: #E52D34;
    border-color: #E52D34;
}

.btn {
    width: 116px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 20px;
    padding: 0 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    border-radius: 8px;
}

.default {
    border: 3px solid #CCC;
    box-shadow: 0 3px #CCC;
}

.default:hover {
    background-color: #EFEFEF;
}

.btn:active {
    margin-top: 23px;
    box-shadow: 0 0 #FFF;
}

</style>

<script>

export default {
    name: "BotaoComponente",
    props: {
        buttonClass: String,
        texto: String
    },
    computed: {
        buttonStyle() {
            return this.buttonClass ?? 'default'
        },
        textoBotao() {
            return this.texto ?? 'Teste'
        }
    }
}

</script>