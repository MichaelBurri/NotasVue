<template>
    <section class="contenedor">
        <b-container>
            <b-row>
                <b-form class="w-100" @submit.stop.prevent>
                    <b-form-group id="fgNuevaNota" label="Nueva nota:" label-for="textoNuevaNota" description="Escribe tu nota aquí">
                        <b-form-input id="textoNuevaNota" v-model="nuevaNota" type="text" @keyup.enter="annadir"/>
                    </b-form-group>
                </b-form>
            </b-row>
            <b-row>
                <b-form class="w-100" @submit.stop.prevent>
                    <b-form-group id="fgFiltroNota" label="Filtrar:" label-for="filtroNota" description="Filtra las notas por palabras">
                        <b-form-input id="filtroNota" v-model="filtroNota" type="text"/>
                    </b-form-group>
                </b-form>
            </b-row>
            <Nota
                v-for="nota in listaOrdenada"
                v-bind:key="nota.fechaCreacion.toString()"
                v-bind:dato-nota="nota"
                v-bind:nota-editar="notaEditar"
                v-on:borrar="borrar"
                v-on:editar="editar"
                v-on:cancelar="cancelar"
                v-on:guardar="guardar"
                v-on:notaEditada="notaEditada"
            />
        </b-container>
    </section>
</template>

<script>
import Nota from "./Nota.vue";

export default {
    name: "Contenedor",
    components: {
        Nota
    },
    props: [],
    data() {
        return {
            listaNotas: [],
            nuevaNota: "",
            notaEditar: null,
            filtroNota: ""
        };
    },
    computed: {
        listaFiltrada: function() {
            if (this.filtroNota) {
                return this.listaNotas.filter(nota => {
                    return nota.titulo.indexOf(this.filtroNota) != -1;
                });
            } else {
                return this.listaNotas;
            }
        },
        listaOrdenada: function() {
            let listaOrdenada = this.listaFiltrada;
            return listaOrdenada.sort((a, b) => {
                if (a.fechaCreacion < b.fechaCreacion) {
                    return 1;
                } else if (a.fechaCreacion > b.fechaCreacion) {
                    return -1;
                }
                return 0;
            });
        }
    },
    mounted() {
        if (localStorage.listaNotas) {
            this.listaNotas = JSON.parse(localStorage.listaNotas);
        }
    },
    methods: {
        actualizarLocalStorage: function() {
            localStorage.listaNotas = JSON.stringify(this.listaNotas);
        },
        annadir: function() {
            this.listaNotas.push({
                titulo: this.nuevaNota,
                prioridad: 0,
                fechaCreacion: Date.now(),
                completado: false
            });
            this.nuevaNota = "";
            this.actualizarLocalStorage();
        },
        borrar: function(fechaCreacion) {
            let posicion = this.listaNotas.findIndex(
                nota => nota.fechaCreacion == fechaCreacion
            );
            this.listaNotas.splice(posicion, 1);
            this.actualizarLocalStorage();
        },
        editar: function(date) {
            this.notaEditar = date;
        },
        cancelar: function() {
            this.notaEditar = null;
        },
        guardar: function() {
            this.cancelar();
            this.actualizarLocalStorage();
        },
        notaEditada: function() {
            this.actualizarLocalStorage();
        }
    }
};
</script>

<style scoped>
.contenedor {
    margin: 4rem;
}
</style>
