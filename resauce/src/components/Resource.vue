<template>
  <div class="resource">
    <div class="name">
      {{name.Name}}
    </div>
    <div class="description">
      {{name.Description}}
    </div>
    <div class="votes">
      <button
        type="button"
        v-on:click="upVote()">
        👍
      </button>
      <h4 class="votes_number">{{name.Votes}}</h4>
      <button
        type="button"
        v-on:click="downVote()">
        👎
      </button>
    </div>
    <div class="link">
      <a :href="name.Link" target="_blank" id="link">Try it Out!</a>
    </div>
    <div class="categories">
      <v-card class="category" v-for="category in temporary" v-if="category.Value === 'True'">
        {{ category.Name }}
      </v-card>
    </div>
  </div>
</template>

<script>
import db from '../db_config.js'
let resourcesRef = db.ref('resources')

export default {
  name: 'resource',
  props: {
    name: {}
  },
  firebase: {
    resources: resourcesRef
  },
  methods: {
    upVote () {
      var item = {...this.name}
      resourcesRef.child(item['.key']).child('Votes').set(this.name.Votes + 1)
    },
    downVote () {
      var item = {...this.name}
      resourcesRef.child(item['.key']).child('Votes').set(this.name.Votes - 1)
    }
  },
  computed: {
    temporary: function () {
      return this.name.Categories.slice(1)
    }
  }
}
</script>

<style>
.category {
  margin-left: 5px;
  margin-right: 5px;
  background-color: #EACEE7;
  padding: 2px;
  border-radius: 2px;
  color: black;
  font-size: 12px;
}
.categories {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.name {
  font-family: 'Alfa Slab One', cursive;
  font-size: 2vw;
}
.resource {
  color: white;
  width: 30%;
  height: 300px;
  padding: 15px;
  margin: 15px;
  border-radius: 2.5px;
  box-shadow: 0px 0px 5px white;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.description {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 60%;
}
button {
  font-size: 30px;
}
.votes {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.votes_number {
  color: white;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 25px;
}
#link {
  display: block;
  width: 115px;
  height: 40px;
  background: teal;
  padding: 10px;
  text-align: center;
  border-radius: 2px;
  color: white;
  font-weight: bold;
  text-decoration: none;
}
</style>
