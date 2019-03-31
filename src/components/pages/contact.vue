<template>
  <div class="contact">
    <h2>CONTACT</h2>
    <div class="contact-container">
      <div>
        <input id="name" v-model="contactForm.name" placeholder="お名前">
      </div>
      <div>
        <input id="email" v-model="contactForm.email" placeholder="メールアドレス" >
      </div>
      <div>
        <textarea v-model="contactForm.contents" ></textarea>
      </div>
    </div>
    <button v-on:click="sendMail">送信</button>
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
        })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

.contact{
  font-family: 'Josefin Sans', sans-serif;
  overflow: hidden;
  background-color: black;
  min-height: 80vh;
}


input,
textarea{
  background: rgba(255, 255, 255, 5);
  border: 1px #fff solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
  margin-left: 14px;
  margin-bottom: 14px;
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
  margin-left: 14px;
  margin-bottom: 14px;
}

button:hover{
  background: tomato;
  color: white;
}

</style>

