<template>
    <b-row class="nota mt-2 mb-3">
        <b-col cols="12" md="8">
            <b-row align-v="center" class="mb-1">
                <b-col cols="10" md="11" order-md="1">
                    <b-input v-if="notaEditar === datoNota.fechaCreacion" v-model="datoNota.titulo" type="text" v-on:keyup.enter="guardar"/>
                    <p v-else class="nota-texto m-3" v-bind:class="{ completado: datoNota.completado }" v-on:click="cambiarCompletado">
                        {{ datoNota.titulo }}
                    </p>
                </b-col>
                <b-col cols="2" md="1" class="text-center p-0" order-md="0"> 
                    <b-button v-bind:variant="'outline-' + prioridadColor" v-bind:disabled="datoNota.completado" v-on:click="cambiarPrioridad">
                        Prioridad {{prioridadTexto}}
                    </b-button>
                </b-col>
            </b-row>
        </b-col>

        <b-col cols="12" md="4" class="d-flex justify-content-center justify-content-md-end">
            <b-button v-if="notaEditar === datoNota.fechaCreacion" v-on:click="cancelar">Cancelar</b-button>
            <b-button v-else variant="outline-dark" v-on:click="editar">Editar</b-button>
            <b-button class="ml-3" variant="outline-danger" v-on:click="borrar">Borrar</b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: "Nota",
    props: {
        datoNota: {
            type: Object,
            default: function() {
                return {
                    titulo: "",
                    prioridad: 0,
                    fechaCreacion: 0,
                    completado: false
                };
            }
        },
        notaEditar: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            tituloAntes: ""
        };
    },
    computed: {
        prioridadTexto: function() {
            switch (this.datoNota.prioridad) {
                case 0:
                    return "baja";
                case 1:
                    return "media";
                case 2:
                    return "alta";
                default:
                    return "máxima";
            }
        },
        prioridadColor: function() {
            switch (this.datoNota.prioridad) {
                case 0:
                    return "dark";
                case 1:
                    return "success";
                case 2:
                    return "warning";
                default:
                    return "danger";
            }
        }
    },
    mounted() {},
    methods: {
        borrar: function() {
            this.$emit("borrar", this.datoNota.fechaCreacion);
        },
        editar: function() {
            this.tituloAntes = this.datoNota.titulo;
            this.$emit("editar", this.datoNota.fechaCreacion);
        },
        cancelar: function() {
            this.datoNota.titulo = this.tituloAntes;
            this.$emit("cancelar");
        },
        guardar: function() {
            this.$emit("guardar");
        },
        cambiarPrioridad: function() {
            if (this.datoNota.prioridad >= 3) {
                this.datoNota.prioridad = 0;
            } else {
                this.datoNota.prioridad++;
            }
            this.$emit("notaEditada");
        },
        cambiarCompletado: function() {
            this.datoNota.completado = !this.datoNota.completado;
            this.$emit("notaEditada");
        }
    }
};
</script>

<style scoped>
.nota-texto {
    padding: 0.5rem;
    cursor: pointer;
}

.completado {
    text-decoration: line-through;
}
</style>
