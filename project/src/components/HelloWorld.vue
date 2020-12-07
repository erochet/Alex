<template>
<div>
 <div class="header">
    <div class="one"><img class="logo" src="./images/nazrin.jpg"> 
        <input type="text" class="searchbar"  placeholder="Search..."><button class='searchbutton'><img src="./images/searchbutton.png" class="loupe"> </button><a href="http://localhost:8080/#/carting" class="cartbutton"><img src="./images/cart.png" class="imgcart">Cart Items</a> <a href="http://localhost:8080/#/profile" class="profile" ><img  src="./images/profile.png" class="imgprofile"></a>
    </div>
    <div class="two">
        <div class="categories">
          <div class="menu">
            <div class="container-fluid">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">Electronics</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item active">
                              <a class="nav-link" href="#">Clothings <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                              <a class="nav-link" href="#">Furnitures <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Men</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Women</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Books</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Mobiles</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Tv's</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Computers</a>
                            </li>  
                          </ul>
                        </div>
                      <a class="myButton" href="http://localhost:8080/#/loggedin">Login</a><button class="register">Register</button>         
                  </nav>
            </div>
        </div>
    </div>
  </div>
</div>
<div>
  <p class="title">Page name</p>  
</div>
        <div   class="wrapper">
            <div v-for="(nomdeloffre,index) in computedObj" :key="nomdeloffre" v-bind:class="classindex[index]" v-if="index <8"> {{nomdeloffre}}</div>
          
        </div>
 <footer class="footer">
</footer> 
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
.header{
  background-color: transparent;
}

.searchbar{
  width: 50%;
    margin-bottom: auto;
    margin-top: 20px;
    height: 45px;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px
}

</style>