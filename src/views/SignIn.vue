<template>
  <div class="sign-in">
    <h1>Login Page</h1>

    <form action="" class="form">
      <!-- eslint-disable vuejs-accessibility/form-control-has-label  -->
      <input type="text" class="form__input" id="id">
      <input type="text" class="form__input" id="password">

      <button>로그인하기</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>

.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    &__input {
      margin-bottom: 1rem;
    }
  }
}
</style>
