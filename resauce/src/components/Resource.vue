<template>
  <div class="resource">
    <div class="name">
      {{name}}
    </div>
    <div class="description">
      {{description}}
    </div>
    <div class="votes">
      <button
        type="button"
        v-on:click="upVote()">
        👍
      </button>
      <h4 class="votes_number">{{votes}}</h4>
      <button type="button">👎</button>
    </div>
    <div class="link">
      <v-btn primary dark>Try it Out</v-btn>
    </div>
  </div>
</template>

<script>
import db from '@/db_config.js'

export default {
  name: 'resource',
  props: {
    name: '',
    link: '',
    description: '',
    votes: 0,
    id: ''
  },
  firebase: {
    resources: db.ref('resources')
  },
  methods: {
    upVote () {
      print('called')
      let thisResource = this.resources.child(this.id)
      this.resources.child(thisResource).child('votes').set(this.votes + 1)
    }
  }
}
</script>

<style>
.resource {
  color: white;
  border: 1px solid white;
  width: 500px;
  height: 300px;
  padding: 15px;
  margin: 15px;
  border-radius: 2px;
  box-shadow: 0px 0px 5px #666666;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.name {
  font-size: 36px;
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
</style>
