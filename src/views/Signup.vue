<template>
  <a
    style="
    position: fixed;
    right: 20px;"
    href="https://github.com/anassalih10/fv"
    ><img style="width: 38px;" src="@/assets/icons/github.png"
  /></a>
  <div class="form-container">
    <form @submit.prevent="onSubmit" action="#" id="sign-up">
      <div class="input-container">
        <input id="name" type="text" placeholder="Name" v-model="name" />
        <validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'name',
            targetId: 'name',
            value: `${name}`
          }"
        />
      </div>
      <div class="input-container">
        <input
          id="email"
          type="text"
          placeholder="Email Address"
          v-model="email"
        />
        <validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'email',
            targetId: 'email',
            value: `${email}`,
            type: 'email'
          }"
        />
      </div>
      <div class="input-container">
        <input
          id="phone"
          type="text"
          placeholder="Phone Number"
          v-model="phone"
        />
        <validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'phone',
            targetId: 'phone',
            value: `${phone}`
          }"
        />
      </div>
      <div class="input-container">
        <input
          id="password"
          type="text"
          placeholder="Password"
          v-model="password"
        />
        <validator
          :rules="{
            required: true,
            submited: `${submited}`,
            name: 'password',
            targetId: 'password',
            value: `${password}`,
            MinLength: 10
          }"
        />
      </div>
      <div class="input-container">
        <input
          id="password2"
          type="text"
          placeholder="Confirm Password"
          v-model="password2"
        />
        <validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'confirmation',
            targetId: 'password2',
            value: `${password2}`,
            comparedTo: `${password}`
          }"
        />
      </div>
      <div class="input-container">
        <input
          id="age"
          type="number"
          placeholder="Age"
          v-model="age"
        /><validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'age',
            targetId: 'age',
            value: `${age}`,
            min: 16,
            max: 30
          }"
        />
      </div>
      <div class="input-container">
        <textarea
          id="description"
          placeholder="About me"
          v-model="description"
        ></textarea>
        <validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'description',
            targetId: 'description',
            value: `${description}`,
            MaxLength: 100,
            MinLength: 10
          }"
        />
      </div>
      <div class="input-container">
        <label class="container"
          >I accept the terms and conditions
          <input id="terms" type="checkbox" v-model="agree" />
          <span class="checkmark"></span>
        </label>
        <validator
          :rules="{
            submited: `${submited}`,
            required: true,
            name: 'Confirmation',
            targetId: 'terms',
            value: `${agree}`
          }"
        />
      </div>
      <div class="input-container">
        <input type="submit" value="Signup" />
      </div>
    </form>
  </div>
  <HelperBox />
</template>

<script>
import Validator from "@/components/Validator";
import HelperBox from "@/components/HelperBox";
export default {
  components: {
    Validator,
    HelperBox
  },
  data() {
    return {
      //form fields data
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      age: "",
      description: "",
      agree: "",
      //Our Guard
      submited: false
    };
  },

  methods: {
    onSubmit() {
      this.submited = true;
      const errorsCount = this.$store.getters.getErrorsList.size;
      if (errorsCount === 0) {
        this.$router.push({ name: "Welcome", params: { name: this.name } });
      } else {
        alert("non-valid");
      }
    }
  }
};
</script>

<style lang="scss">
form {
  color: gray;
}
</style>
