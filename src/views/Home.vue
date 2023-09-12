<template>
  <br> <br> <br>

  <div id="pgbody">

    
<div >
    
    <img id="logomain" src='@/components/logo.png' alt="logo" >
  

</div>

<div id="intro">

<table id="info">

  <tr id="WAWW">

    <th>

    <h1 id="heading"> Who are we? </h1>
    <p id="description"> 
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi reprehenderit at impedit totam est velit molestiae cumque similique. Quibusdam adipisci totam expedita atque nihil iste itaque laborum reprehenderit suscipit est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, delectus neque. Maxime, necessitatibus nam! Natus omnis alias aut eligendi quam, praesentium nihil nisi. Dignissimos ex beatae sapiente molestiae quia sequi?
      </p>

    </th>

    <th>
      <img id="WAWI" src="@/components/WAW.jpg" >

    </th>

  </tr>

  <br>



  </table>
  <br> <br> <br> <br>
  <hr id="left">

  <br><br> <br> <br>

  <table id="info">

    <tr id="HON">

      <th>
        <img id="Honeyimg" src="@/components/Honey.jpg" >

      </th>

      <th>
        <h1 id="heading"> Honey  </h1>
        <p id="description"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi, necessitatibus qui nostrum blanditiis at eos officia, recusandae quos suscipit provident, quia nemo. Corporis eveniet voluptatibus consectetur tempore, incidunt deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate sapiente beatae laboriosam adipisci architecto omnis quas iste, soluta cupiditate optio qui reprehenderit exercitationem tempora expedita repellat molestias velit asperiores!
          </p>
      

      </th>

    </tr>

    </table>

    <br> <br> <br> <br>
    <hr id="right">
    <br> <br> <br> <br>

    <table id="info">

    <tr id="BAKE">

      <th>
        <h1 id="heading"> Bakery  </h1>
        <p id="description"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt autem. Vero quaerat voluptatum neque voluptatem tempora alias consectetur quis animi, dolor quidem, distinctio nesciunt. Vero nulla tempora totam quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente itaque possimus, quas animi saepe, vero ipsam eaque natus ipsum, dicta ex sed quidem. Molestias ea earum consectetur facere sapiente?
          </p>

      </th>

      <th>
       
        <img id="Bakeryimg" src="@/components/Bakery.jpg" >
      

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
#info{
    width: 100%;
}


 #heading{

    font-weight: 400;
    font-size: 2vw;


}

#description{
    font-weight: 100;
    font-size: 1.25vw;
 
}

#right {

    width: 20%;
    float: right;
}

#left{

    width: 20%;

}

#Honeyimg{

    width:80%;
    height:60%;
}

#Bakeryimg{

    width:70%;
    height:60%;
}

#WAWI{

    width:70%;
    height:60%;
}

#logomain{
    height: 30%;
    width: 30%;
    margin-left: 35%;
}

</style>

<script setup>

const pgBody = document.querySelector('#pgBody')


</script>

