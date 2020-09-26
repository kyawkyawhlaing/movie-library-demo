<template>
  <div class="row container-fluid">
    <div class="col-6 cover"></div>
    <div class="col-4 offset-1">
      <form class="p-3">
        <div class="pb-2">
          <label for="name">Tell Me Your name</label>
          <br />
          <input type="text" id="name" placeholder="name" class="form-input" />
        </div>
        <div class="pb-2">
          <label for="email">Email Address</label>
          <br />
          <input type="email" id="email" placeholder="email" class="form-input" />
        </div>
        <div class="pb-2">
          <label for="tel">Telephone</label>
          <br />
          <input
            type="tel"
            id="tel"
            placeholder="09-125-678-234"
            pattern="[0-9]{2} ([0-9]{3}){3}"
            class="form-input"
          />
        </div>
        <div class="text-box">
          <label for="textbox">Message To Admin</label>
          <hr>
          <textarea name="textbox" id="textbox" cols="30" rows="5" class="form-input"></textarea>
        </div>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-box {
  width: max-content;
  border: 1px dashed rgba(0, 0, 0, 0.171);
  margin: 10px 0;
}
</style>