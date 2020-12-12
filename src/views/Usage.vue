<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit" action="#" id="sign-up">
      <div class="input-container">
        <!-- Our Target Input -->
        <input id="email" type="text" placeholder="Email" v-model="email" />
        <!-- Validator Component -->
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
        <input type="submit" value="Submit" />
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
      email: "",
      //Our Guard
      submited: false
    };
  },

  methods: {
    onSubmit() {
      this.submited = true;
      const errorsCount = this.$store.getters.getErrorsList.size;
      if (errorsCount === 0) {
        alert("valid!");
      } else {
        alert("non-valid!");
      }
    }
  }
};
</script>
