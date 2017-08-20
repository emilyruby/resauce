<template>
  <div id="addnewresource-form">
    <div class="add-resource-form">
      <div class="form-heading">
        <h3 class="form-title">Add New Resource</h3>
      </div>
      <div class="form-body">
         <form id="form" class="form-inline" v-on:submit.prevent="addResource">
          <div class="form-group">
            <label for="resourceName">Name:</label>
            <input type="text" id="resourceName" class="form-control" v-model="newResource.Name">
          </div>
          <div class="form-group">
            <label for="resourceLink">Link to Resource:</label>
            <input type="text" id="resourceLink" class="form-control" v-model="newResource.Link">
          </div>
          <div class="form-group">
            <label for="resourceDescription">Description:</label>
            <input type="text" id="resourceDescription" class="form-control" v-model="newResource.Description">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Resource">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/db_config.js'

export default {
  name: 'addnewresource',
  firebase: {
    resources: db.db.ref('resources')
  },
  data () {
    return {
      newResource: {
        Link: 'http://',
        Name: '',
        User: '',
        Description: ''
      }
    }
  },
  methods: {
    addResource: function () {
      this.resources.push(this.newResource)
      this.newResource.Name = ''
      this.newResource.Link = 'http://'
      this.newResource.Description = ''
      this.newResource.User = ''
    }
  }
}
</script>

<style>
#addnewresource-form {
  color: white;
}
</style>
