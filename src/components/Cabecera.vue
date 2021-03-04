<template>
    <b-jumbotron class="cabecera" tag="header" fluid header="Notas" lead="Escribe una nota y elige el grado de importancia. Completa la nota clickando en ella"
        bg-variant="success" text-variant="light"/>
</template>

<script>
export default {
    name: "Cabecera",
    props: [],
    data() {
        return {};
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>

<style scoped>
.cabecera h1 {
    word-wrap: break-word;
}
</style>
