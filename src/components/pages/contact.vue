<template>
  <div class="contact">
    <h2>CONTACT</h2>
    <div>
      <input id="name" v-model="contactForm.name" placeholder="お名前">
    </div>
    <div>
      <input id="email" v-model="contactForm.email" placeholder="メールアドレス" >
    </div>
    <div>
      <textarea v-model="contactForm.contents" ></textarea>
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

<style>
div{
  margin-bottom: 14px;
}

input,
textarea{
  background: rgba(255, 255, 255, 5);
  border: 1px #fff solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 1rem;
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


</style>

