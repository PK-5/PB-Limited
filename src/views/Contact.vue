<template>
   <div class="pgbody">

    
<div >
    
  <img class="logomain" src='@/components/officalLogo.png' alt="logo" >

</div>

<h2 class="cartTitle"> Contact </h2>

<br>

<hr class="middle">

<br><br>

<table class="contacttable">

<tr>
<td> <p  class="contactinfo"> 
<font-awesome-icon icon="fa-envelope"  class="contacticon" /><br>
<b>email:</b>
<br>
providencebismithltd@gmail.com
</p>
</td>

<td>
<p class="contactinfo"> 
  <font-awesome-icon icon="fa-phone"  class="contacticon" /><br>
<b>phone:</b>
<br>
0212647276 
</p>
</td>
</tr>

<tr>
<td>
<br>
<p class="contactinfo"> 
  <font-awesome-icon :icon="['fab', 'whatsapp']" class="contacticon"  /> <br>
<b>whatsapp: </b> 
<br>
0212647276 
</p>
</td>

<td>
<br>
<p class="contactinfo"> 
  <font-awesome-icon :icon="['fab', 'facebook']" class="contacticon"  /> <br>
<b>facebook: </b>
<br>
Providence Bismith 
</p>

</td>
</tr>


</table>

<br><br>



</div>

</template>

<style>

.pgbody{
  color: #9E552A;
}

.contacticon{
  color: #793D1A ;

}
.contact{
    text-align: center;
    font-size: 50px ;
    font-size: 4vw ;
}

.contactinfo{
    margin-left: 20%;
    font-weight: 100;
    font-size: 20px;
    font-size: 1.5vw;  
    text-align: center;
}

.contacttable{
    width: 80%;
    
}

.contacticon{
    font-size: 30px;
    font-size: 2vw;
}
.middle{
  background-color: #9E552A;
}

</style>