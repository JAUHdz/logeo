import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tipouser:'',
    usuario:null,
    contraseña:null,
    mostrariconos:null,
    mostrarimpresion:null,
    mostrarinsercion:null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    administracionPermisos(){
      if(this.state.tipouser==='SA'){
        this.state.mostrariconos=true;
        this.state.mostrarimpresion=true;
        this.state.mostrarinsercion=true;
      }else if(this.state.tipouser==='PA'){
        this.state.mostrariconos=false;
       this.state.mostrarimpresion=true;
       this.state.mostrarinsercion=true;
      }else if(this.state.tipouser==='PB'){
        this.state.mostrariconos=false;
        this.state.mostrarimpresion=false;
        this.state.mostrarinsercion=true;
      }else if(this.state.tipouser==='PC'){
        this.state.mostrariconos=false;
        this.state.mostrarimpresion=false;
        this.state.mostrarinsercion=false;
      }
    }
  },
  modules: {
  }
})
