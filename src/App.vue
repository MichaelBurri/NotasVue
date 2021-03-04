<template>
    <div id="app">
        <Cabecera />
        <Contenedor />
        <Pie/>
    </div>
</template>

<script>
import Cabecera from "./components/Cabecera.vue";
import Pie from "./components/Pie.vue";
import Contenedor from "./components/Contenedor.vue";

export default {
    name: "App",
    components: {
        Cabecera,
        Pie,
        Contenedor
    }
};
</script>

<style>
#app {
    margin-bottom: 7rem;
}
html {
    position: relative;
    min-height: 100%;
}
</style>
