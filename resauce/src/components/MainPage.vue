<template>
  <div id="main_page">
    <Navbar></Navbar>
    <div id="resources">
      <Resource
        v-for="resource in orderedResources"
        :name="resource"
        :key="resource.ID">
      </Resource>
    </div>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div id="githublogo">
        <a href="https://github.com/emilyruby/resauce" target="_blank">
          <img height="25px" src="static/github.png" alt="github">
        </a>
      </div>
    </v-footer>
  </div>
</template>

<script>
import Resource from '@/components/Resource.vue'
import AddNewResource from '@/components/AddNewResource.vue'
import Navbar from '@/components/Navbar.vue'
import _ from 'lodash'
import call from '@/config.js'

export default {
  name: 'mainpage',
  components: {
    Resource,
    AddNewResource,
    Navbar
  },
  props: {
    resources: {}
  },
  computed: {
    orderedResources: function () {
      return _.orderBy(this.resources, 'Votes', 'desc')
    }
  },
  methods: {
    called: function () {
      call()
    }
  }
}
</script>

<style>
#githublogo {
  margin-top: 5px;
}
.pa-3 {
  background-color: teal;
  color: white;
  position:fixed;
  left:0px;
  bottom:0px;
  height:40px;
  width:100%;
}
#resources {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
#main_page {
  margin-top: 140px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 400px;
  height: 240px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
  font-size: 14px;
  text-align: left;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
