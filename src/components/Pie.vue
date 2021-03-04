<template>
    <footer class="pie container-fluid text-center">
        <span class="text-white">Aplicación de Notas Copyright 2021</span>
    </footer>
</template>

<script>
export default {
    name: "Pie",
    props: [],
    data() {
        return {
            datos: []
        };
    },
    computed: {},
    mounted() {},
    methods: {}
};
</script>

<style scoped>
.pie {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 7rem;
    line-height: 4rem;
    background-color: #28A745;
    margin-top: 10px;
}
</style>
