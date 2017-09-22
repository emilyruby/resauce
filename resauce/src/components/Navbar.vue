<template>
  <div class="navbar" id="nav">
    <v-dialog/>
    <form class="checkboxes">
      <div class="box">
        <input type="checkbox" id="Free" value="Free" v-model="checkedNames">
        <label for="Free">Free</label>
      </div>
      <div class="box">
        <input type="checkbox" id="No Sign Up Required" value="No Sign Up Required" v-model="checkedNames">
        <label for="No Sign Up Required">No Sign Up Required</label>
      </div>
      <div class="box">
        <input type="checkbox" id="General" value="General" v-model="checkedNames">
        <label for="General">General</label>
      </div>
    </form>
    <h1 id="title">resauce</h1>
    <button id="show-modal" @click="showModal = true">
      Add New Resource
    </button>
    <transition name="modal" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <slot name="body">
                <p id="addnewresource">ADD A NEW RESOURCE</p>
                <form id="form" class="form-inline" v-on:submit.prevent="addResource">
                 <div class="form-group">
                   <label for="resourceName">NAME:</label>
                   <input type="text" id="resourceName" class="form-control" v-model="newResource.Name">
                 </div>
                 <div class="form-group">
                   <label for="resourceLink">LINK TO RESOURCE:</label>
                   <input type="text" id="resourceLink" class="form-control" v-model="newResource.Link">
                 </div>
                 <div class="form-group">
                   <label for="resourceDescription">DESCRIPTION:</label>
                   <input type="text" id="resourceDescription" class="form-control" v-model="newResource.Description">
                 </div>
                 <div class="form-group">
                   <label for="resourceCategories">CATEGORIES:</label>
                   <input type="" id="resourceCategories" class="form-control" v-model="newResource.Categories"
                 </div>
                 <input type="submit" id="resourceSubmit" @click="showModal = false" value="Add Resource">
                 <button type="button" name="cancel" id="cancel" @click="showModal = false">
                 Cancel</button>
                </form>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import db from '../db_config.js'
let resourcesRef = db.ref('resources')

export default {
  name: 'navbar',
  firebase: {
    resources: db.ref('resources')
  },
  computed: {
    active: function () {
      return true
    }
  },
  methods: {
    show () {
      console.log('helo')
      this.showModal = true
    },
    addResource: function () {
      var newResource = this.newResource
      newResource['Votes'] = 0
      resourcesRef.push(this.newResource)
      this.newResource.User = ''
      this.newResource.Name = ''
      this.newResource.Link = 'http://'
      this.newResource.Description = ''
    }
  },
  data: function () {
    return {
      showModal: false,
      newResource: {
        Link: 'http://',
        Name: '',
        User: '',
        Description: ''
      },
      checkedNames: []
    }
  }
}
</script>

<style scoped>
  #form {
    margin: 15px;
    margin-bottom: 20px;
  }
  #resourceSubmit {
    color: white;
    font-size: 18px;
    background-color: teal;
    padding: 10px;
    border-radius: 2px;
    margin: 5px;
    float: right;
  }
  #cancel {
    color: white;
    font-size: 18px;
    background-color: #C17274;
    padding: 10px;
    border-radius: 2px;
    margin: 5px;
    float: right;
  }
  #addnewresource {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Alfa Slab One', cursive;
    text-align: center;
  }
  input {
    width: 13px;
    height: 13px;
    padding: 0;
    margin:0;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    *overflow: hidden;
  }
  .navbar {
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
    font-size: 40px;
    background-color: #94C5CC;
    padding-top: 25px;
    padding-bottom: 10px;
  }
  #title {
    color: white;
    font-size: 4vw;
    font-family: 'Alfa Slab One', cursive;
    margin-bottom: 35px;
    margin-top: 15px;
  }
  #show-modal {
    color: white;
    font-size: 18px;
    background-color: teal;
    position: absolute;
    right: 50px;
    top: 50px;
    padding: 10px;
    border-radius: 2px;
  }
  .checkboxes {
    font-size: 14px;
    position: absolute;
    left: 10px;
    text-align: left;
  }
  </style>