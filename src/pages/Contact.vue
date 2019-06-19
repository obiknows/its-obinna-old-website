<template>
  <Layout>
    <div class="container">

      <div class="contact-header">
        <h1 class="contact-title">Tap In!</h1>
        <p>Let me know if you wanna get busy or got an idea we could work on and I'll get back to you as soon as possible.</p>
      </div>
      
      <div class="">
        <h3 class="contact-means-title">Instagram</h3>
        <a href="https://www.instagram.com/o13nna/"><p>@o13nna</p></a>
      </div>
      
      <div class="">
        <h1 class="contact-means-title">Email</h1>
        <a href="mailto:obiknows88@@gmail.com?subject=Tap%20In:&body=Hey%20Obinna,%20I'd%20like%20to%20work%20with%20you%20on%20[whatever-it-is-you-want]%20and%20my%20timeframe%20[estimate]%20is%20and%20my%20budget%20is%20[estimate]."><p>obiknows88@gmail.com</p></a>
      </div>

      <!-- <form class="contact-form" name="contact">

        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label">Your email</label>
            <input type="email" name="email" />
          </div>
        </div>

        <div class="message">
          <label for="message" class="label">Message</label>
          <textarea name="message"></textarea>
        </div>

        <button class="button">Submit form</button>

      </form> -->

    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style scoped>
.contact-means-title {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  padding: 0;
}

.contact-header {
  padding: 2rem 0 4rem 0;
}
.contact-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.sender-info > div {
  flex: 1;
  margin-right: 4rem;
}
.sender-info > div:last-of-type {
  margin: 0;
}
input:focus,textarea:focus {
  border-color: var(--color-contrast-1);
}
input,textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

