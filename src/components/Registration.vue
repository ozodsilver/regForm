<template>
  <div>
    <div class="row">
      <div class="col-12 w-100">
        <div class="card">
          <div class="card-head">
            <h1 class="text-white text-center pt-4">LOGIN</h1>

            <form action="">
              <label for="input1" class=" text-white mt-3"
                >User or e-mail:</label
              >
              <input
                type="email"
                id="input1"
                placeholder="e-mail yoki foydalanuvchi nomi"
                v-model="email"
                ref="mail"
                @input="update2"
                required

                
              />

              <label
                for="input2"
                class="text-white mt-3 d-flex"
                style="justify-content:space-between; position:relative"
                >Password:
                <!-- ko'zcha -->
                <i
                  class="fa fa-eye text-white"
                 
                  style="font-size:24px; position:relative; z-index:222; right:26px;top:27px;transform:rotate(30deg);cursor:pointer;color:orange !important;"
                  @click="kuzcha"
                ></i>

                <span
                  class="fa fa-eye-slash text-white"
                  style="font-size:24px; position:absolute; z-index:222; right:26px;top:27px;transform:rotate(30deg);cursor:pointer;display:none;"
                  ref="spanEye"
                  @click="showPass"
                ></span>
              </label>
              <input
                type="password"
                id="input2"
                placeholder="password"
                v-model="proverka"
                ref="pass"
                @input="update"
                 :class="{addclass :redBorder}"
                 
              />

              <p style="position:absolute; z-index:33; left:27px " class="text-danger" v-if=" validate">Parol kamida 8 ta belgidan iborat bo'lishi kerak</p>

 <p style="position:absolute; display:inline-block; z-index:33; left:27px; text-shadow: 0 0 10px green, 0 0 15px green  " class="text-success" v-if=" validate2">Parol validatsiyadan o'tdi</p>
       


            </form>

            <p id="demo" class="pt-3">
              if the password is empty, we will send an e-mail with the magic
              link (passwordless login)
            </p>

            

            <Button qiymat="Login" @click.prevent="pastga"> </Button>

            <p id="demo" class="pt-4 pb-4" style="text-transform:uppercase;">
              don't have an account?
              <router-link  to="/SignUp" class="text-white"> Sign Up </router-link>

             
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./button.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  components: {
    Button,
   
  },
  data() {
    return {
      proverka: [],
      email: [],
      show: false,
      redBorder:false,
    };
  },

  methods: {
    pastga() {
      if (this.proverka.length < 8 || this.email.length == 0) {
        this.show = true;
       
      } else {
        this.show = false;
      }
    },

    none() {
      this.show = false;
    },

    update() {
      if (this.proverka.length < 8) {
        this.$refs.pass.style.cssText =
          'border:1px solid red; background:url("https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Privacy-256.png") 97% 50%  no-repeat !important; background-size:30px !important;';
           this.redBorder = !this.redBorder

      } else {
        this.$refs.pass.style.cssText =
          'border:1px solid green; box-shadow:0 0 4px green; background:url("https://cdn4.iconfinder.com/data/icons/internet-security-flat-2/32/Internet_Security_key_lock_password_door_safe-256.png") 97% 50%  no-repeat !important; background-size:30px !important';
      }
    },

   

    kuzcha() {
      this.$refs.pass.type = "text";
      this.$refs.spanEye.style.display = "block";
    },

    showPass() {
      this.$refs.pass.type = "password";
      this.$refs.spanEye.style.display = "none";
    },
  },


  computed : {
    validate(){
      return this.proverka.length < 8 ? true : false
    },

     validate2(){
      return this.proverka.length >= 8
    }
  }
};
</script>

<style lang="css" scoped>

.addclass{
  animation:animate2 1s 1 linear;
}

@keyframes animate2 {
  0%{
border:1px solid rgb(4, 4, 61);
  }
  10%{
     border: 1px solid rgb(231, 25, 25);
  }
  20%{
      border: 1px solid rgb(4, 4, 61);
  }
  30%{
     border: 1px solid rgb(231, 25, 25);
  }
  40%{
         border: 1px solid rgb(4, 4, 61);
  }
  50%{
       border: 1px solid rgb(231, 25, 25);
  }
  60%{
  border: 1px solid rgb(4, 4, 61);
  }
  70%{
       border: 1px solid rgb(231, 25, 25);
  }
  80%{
      border: 1px solid rgb(4, 4, 61);
  }
  90%{
  border: 1px solid rgb(231, 25, 25);
  }

  100%{
     border: 1px solid rgb(4, 4, 61);
  }
}

.card {
  background:rgba(235, 15, 70,1) ;

  width: 450px;
  font-weight: lighter;
  border-radius: 15px;
  border: none;

  transition: 1s;
 
    transform: skew(-3deg);
}
.card:before {
  content: "";
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: rgba(5, 19, 44);
  border-radius: 15px;
  border: none;
  transform: skew(4deg);
  background: url('https://images.hdqwalls.com/download/graph-web-abstract-4k-hn-1280x800.jpg')   ;
}

.card h1 {
  z-index: 11;
  position: relative;
}

.card label,
input {
  position: relative;
  z-index: 11;
}

.card label {
  left: 6%;
}

.card input {
  display: block;
  margin: auto;
  width: 400px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px;
  border-radius: 3px;
  border: none;
  outline: 0;
  background: rgba(238, 238, 240, 0.8);
  caret-color: rgb(212, 145, 0);
  color: tomato;
}

#demo {
  position: relative;
  z-index: 11;
  color: white;
  width: 400px;
  margin: 10px auto !important;
  text-align: center;
}

[type="password"] {
  background: rgba(255, 255, 255, 0.8)
    url("https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Privacy-256.png")
    97% 50% no-repeat !important;
  background-size: 30px !important;
  
}

[type="text"] {
  background: rgba(240, 245, 255, 0.8)
    url("https://cdn3.iconfinder.com/data/icons/social-media-logos-flat-colorful/2048/5303_-_Gmail-256.png")
    97% 50% no-repeat !important;
  background-size: 30px !important;
}
[type="password"]::-webkit-inner-spin-button {
  display: none;
}
[type="password"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

#xato {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(95, 13, 13);
  top: 0;
  z-index: 22;
}
</style>
