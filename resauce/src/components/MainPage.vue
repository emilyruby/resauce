<template>
  <div id="main_page">
    <h1 id="title">RESAUCE</h1>
    <div id="resources">
      <Resource
        v-for="resource in resources"
        :name="resource.Name"
        :link="resource.Link"
        :description="resource.Description"
        :votes="resource.Votes"
        :id="resource.ID"
        :key="resource.ID">
      </Resource>
    </div>
    <AddNewResource></AddNewResource>
  </div>
</template>

<script>
import Resource from '@/components/Resource.vue'
import AddNewResource from '@/components/AddNewResource.vue'

export default {
  name: 'mainpage',
  components: {
    Resource,
    AddNewResource
  },
  props: {
    resources: {}
  }
}
</script>

<style>
#title {
  color: white;
  font-size: 3vw;
}
#resources {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
