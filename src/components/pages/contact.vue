<template>
  <div class="wrapper">
    <h2>CONTACT</h2>
    <input id="name" v-model="contactForm.name" placeholder="お名前">
    <input id="email" v-model="contactForm.email" placeholder="メールアドレス" >
    <textarea v-model="contactForm.contents" ></textarea>
    <button v-on:click="sendMail">Send</button>
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

