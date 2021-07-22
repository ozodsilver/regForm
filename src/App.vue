<template>
  <div id="app">
    <regForm> </regForm>
    <signup> </signup>
    
  </div>
</template>

<script>
import regForm from "./components/Registration.vue";
import signup from './components/SignUp';

export default {
  el: "#app",
  components: {
    regForm,
    signup,
  },
  data() {
    return {
      qiymat:''
    }
   
  },
};
</script>



<style>
*{
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
  background:url('https://catherineasquithgallery.com/uploads/posts/2021-02/1613684259_24-p-fon-dlya-prezentatsii-informatsionnie-tekh-25.jpg');
  background-size: cover;
  background-repeat: no-repeat;
    display: flex ;
    justify-content: center ;
    align-items: center ;
    min-height: 100vh;
      font-family: Arial, Helvetica, sans-serif;
      
}


body:before {
  content: '';
  width: 100%;
  height: 100vh;
  position: absolute;
 
  background:rgba(4, 39, 49, 0.8);
  filter: blur(10px);

}

</style>
