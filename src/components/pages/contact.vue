<template>
  <div class="contact">
    <h2>CONTACT</h2>
    <div class="contact-container">
      <div>
        <!--<input id="name" v-model="contactForm.name" placeholder="お名前">-->
        <input name="name" v-validate="'required'" :class="{'input': true, 'form-danger':errors.has('name')}" id="name" v-model="contactForm.name" placeholder="お名前">
        <p v-show="errors.has('name')" class="alert alert-danger">{{ errors.first('name')}}</p>
      </div>
      <div>
        <!--input id="email" v-model="contactForm.email" placeholder="メールアドレス"  > -->
        <input name="email" v-validate="'required|email'" :class="{'input': true, 'is-danger':errors.has('email')}" id="email" v-model="contactForm.email" placeholder="メールアドレス">
        <p v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</p>
      </div>
      <div>
        <textarea v-model="contactForm.contents" ></textarea>
      </div>
    </div>
    <div class="button-container">
      <button v-on:click="validateBeforeSubmit">送信</button>
    </div>
  </div>
</template>

<script>
import { functions } from '../../plugins/firebase'

export default {
  data: () => ({
    contactForm: {
      name: '',
      contents: '',
      email: '',
      loading:false
    }
  }),
  methods: {
    sendMail: function(){
      this.contactForm.loading = true
      const mailer = functions.httpsCallable('sendMail')

      mailer(this.contactForm)
        .then(() => {
          alert('success!')
          
        })
        .catch(err => {
          alert('error')
        })
        .finally(() => {
          this.contactForm.loading = false
          this.formReset()
        })
    },
    formReset: function(){
      this.$refs.form.reset()
    },
    validateBeforeSubmit(){
      this.$validator.validateAll().then((result) => {
        if(result){
          this.sendMail();
          return
        }
        alert('入力されていない項目があります。')
      })
    }

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

h2{
  margin-left: 14px;
  text-align: center;
}

.contact{
  font-family: 'Josefin Sans', sans-serif;
  overflow: hidden;
  background: linear-gradient(tomato, plum);
  min-height: 80vh;
}

span{
  margin-left:  14px;
}

input,
textarea{
  background: rgba(255, 255, 255, 5);
  border: 1px #fff solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  margin-left: 50px;
  margin-bottom: 20px;
  
}

input{
  width: 100%;
  max-width: 240px;
}

textarea{
  width: 100%;
  max-width: 480px;
  height: 6rem;
}

button{
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: noen;
  color: tomato;
  border: solid 2px tomato;
  border-radius: 30px;
  transition: .4s;
  width: 100%;
  max-width: 120px;
  margin-left: 50px;
  margin-bottom: 14px;
}

button:hover{
  background: tomato;
  color: white;
}

.contact-container{
  margin-top: 80px;
}

p{
  margin: 5px 0px 15px 50px;
  
}

@media screen and (max-width: 480px){
  .contact-container{
    text-align: center;
    margin-top: 40px;
  }

  input{
    width: 300px;
    margin: 15px 0px;
  }

  textarea{
    width: 300px;
    margin: 10px 0px;
  }

  p{
    height: 10px;
    margin: 0;
  }

  h2{
    margin:20px 0px;
  }

  button{  
    margin: 20px 0px;
    background: tomato;
    color: white;
  }

  .button-container{
    text-align: center;
  }
}

</style>

