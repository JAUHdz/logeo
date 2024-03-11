<template>
    <div>
        <template>
  <v-data-table
    :headers="headers"
    :items="des"
    sort-by="calificacion"
    class="elevation-1"
    
  >
  
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click="mostrarT" class="espaciado">Consultar</v-btn>
            <v-btn class="espaciado" v-bind="attrs"
              v-on="on" v-show="$store.state.mostrarinsercion">Agregar</v-btn>
            <v-btn class="espaciado" v-show="$store.state.mostrarimpresion" @click="imprimir">Imprimir</v-btn>
          </template>
    
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.materia"
                      label="Materia"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.calificacion"
                      label="Calificación"
                    ></v-text-field>
                  </v-col>
                  
                   
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Estas seguro de eliminar?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    
    <template v-slot:item.actions="{ item }">
      <v-icon 
      v-show="$store.state.mostrariconos"
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
      v-show="$store.state.mostrariconos"
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
   
    
  </v-data-table>
</template>

    </div>
</template>

<script>
  export default {
    data: () => ({
        mostraracciones:false,
        mostrar: false,
      dialog: false,
      dialogDelete: false,
      des:[],
      headers: [
        {
          text: 'Materia',
          align: 'start',
          sortable: false,
          value: 'materia',
        },
        { text: 'Calificación', value: 'calificacion' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        materia: '',
        calificacion: 0,
      },
      defaultItem: {
        materia: '',
        calificacion: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Calificación' : 'Editar Calificación'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            materia: 'Programacion Orientada a Objetos',
            calificacion: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      mostrarT() {
      
      this.des=this.desserts;
    },

    imprimir(){
        console.log(this.desserts)
    },
    
    },
  }
</script>

<style>
    .centradobtn{
    margin: 70px;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.espaciado {
  margin-right: 10px; /* Ajusta según sea necesario */
  width: 200px;
}

.espaciado :hover{
        background-color:rgb(158, 30, 30) !important;
        width: 200px;
        height: 40px;
        color: white;
    }

</style>