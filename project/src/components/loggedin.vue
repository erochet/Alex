<template>
<div>
 

<div class="header">
    <div class="one"><img class="logo" src="./images/nazrin.jpg"> 
        <input type="text" class="searchbar"  placeholder="Search..."><button class='searchbutton'><img src="./images/searchbutton.png" class="loupe"> </button><a href="http://localhost:8080/#/carting" class="cartbutton"><img src="./images/cart.png" class="imgcart"> Cart Items</a><button class="profile"><img src="./images/profile.png" class="imgprofile"></button>
    </div>
    <div class="two">
        <div class="categories">Categories<a class="myButton" href="http://localhost:8080/#/">Logout</a> </div>
    </div>
    
</div>
<div>
  <p class="title">Page name</p>  
</div>
        <div class="wrapper">
            <div v-for="(nomdeloffre,index) in computedObj" :key="nomdeloffre" v-bind:class="classindex[index]" v-if="index < 8" >{{nomdeloffre}}</div>
        </div>
<div class="bottom">div</div>
</div>
</template>

<script>
export default {
    data: function() {
        return{
            nomdeloffres:['offre','superoffre',"megaoffre","turbooffre","ultraoffre","offerture","offerdesein","oof"],
            classindex:["oui0","oui1","oui2","oui3","oui4","oui5","oui6","oui7"],
            limit:8
        }
    },
    computed:{
  computedObj(){
    return this.limit ? this.nomdeloffres.slice(0,this.limit) : this.nomdeloffres
  }
},
    methods: {
      class(){
        if (this.classindex>8){
          classindex=classindex+1

        }
        return 'oui'+classindex
      }
    }
    
}
</script>
<style scoped>

</style>