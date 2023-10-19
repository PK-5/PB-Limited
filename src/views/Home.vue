<template>
  <br> <br> <br>

  <div class="pgbody">

    
<div >
    
    <img class="logomain" src='@/components/officalLogo.png' alt="logo" >
  

</div>
<br>

<div class="intro">

<table class="info">

  <tr class="WAWW">

    <th>

    <h1 class="heading"> Our aim </h1>
    <p class="description"> 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reprehenderit at impedit totam est velit molestiae cumque similique. Quibusdam adipisci totam expedita atque nihil iste itaque laborum reprehenderit suscipit est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus neque. Maxime, necessitatibus nam! Natus omnis alias aut eligendi quam, praesentium nihil nisi. Dignissimos ex beatae sapiente molestiae quia sequi?
      </p>

    </th>

    <th>
      <img class="aim" src="@/components/aim.jpg" >

    </th>

  </tr>

  <br>



  </table>
  <br> <br> 
  <hr class="left">
  <br><br>

    <table class="info">

    <tr class="BAKE">

      <th>
        <h1 class="heading"> Our products  </h1>
        <p class="description"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt autem. Vero quaerat voluptatum neque voluptatem tempora alias consectetur quis animi, dolor quidem, distinctio nesciunt. Vero nulla tempora totam quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente itaque possimus, quas animi saepe, vero ipsam eaque natus ipsum, dicta ex sed quidem. Molestias ea earum consectetur facere sapiente?
          </p>

      </th>

      <th>
       
        <img class="aim" src="@/components/products.jpg" >
      

      </th>

    </tr>

    </table>


<div >

</div>
</div>

  </div>

  <br><br><br>


</template>

<style>
body{
  background-color: #FFF9EF;
}


.info{
    width: 100%;
}


 .heading{
    font-weight: 400;
    font-size: 2vw;
    color: #793D1A ;


}

.description{
    font-weight: 100;
    font-size: 1.25vw;
    padding-right: 10%;
    color: #9E552A;
 
}

.right {

    width: 20%;
    float: right;
   
}

.left{

    width: 20%;
   background-color: #9E552A;
    

}

.Honeyimg{

    width:80%;
    height:60%;
}

.Bakeryimg{

    width:70%;
    height:60%;
}

.aim{

    width:70%;
    padding-left: 20px;
    height:60%;
    border-radius: 25%;
   
}

.logomain{
    height: 30%;
    width: 30%;
    margin-left: 35%;
}

</style>

<script setup>

const pgBody = document.querySelector('#pgBody')


</script>

