<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit" action="#" id="sign-up">
      <ul class="">
        <li class="n-item">
          <a
            id="step1"
            class="nav-link"
            @click.prevent="setActive('step1')"
            :class="{ active: isActive('step1') }"
            href=""
            >Step1</a
          >
        </li>

        <li class="n-item">
          <a
            id="step2"
            class="nav-link"
            @click.prevent="setActive('step2')"
            :class="{ active: isActive('step2') }"
            href=""
            >Step2</a
          >
        </li>
        <li class="n-item">
          <a
            id="step3"
            class="nav-link"
            @click.prevent="setActive('step3')"
            :class="{ active: isActive('step3') }"
            href=""
            >Step3</a
          >
        </li>
      </ul>
      <div class="" id="myTabContent">
        <div class="tab_pane " :class="{ 'active visible': isActive('step1') }">
          <!-- Our Target Input -->
          <div class="input-container">
            <!-- Our Target Input -->
            <input id="name" type="text" placeholder="Name" v-model="name" />
            <!-- Validator Component -->
            <validator
              :rules="{
                submited: `${submited}`,
                required: true,
                name: 'name',
                targetId: 'name',
                value: `${name}`,
                type: 'name',
                tabId: 'step1'
              }"
            />
          </div>
        </div>
        <div class="tab_pane " :class="{ 'active visible': isActive('step2') }">
          <!-- Our Target Input -->
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
                type: 'email',
                tabId: 'step2'
              }"
            />
          </div>
        </div>
        <div class="tab_pane " :class="{ 'active visible': isActive('step3') }">
          <!-- Our Target Input -->
          <div class="input-container">
            <!-- Our Target Input -->
            <input id="phone" type="text" placeholder="Phone" v-model="phone" />
            <!-- Validator Component -->
            <validator
              :rules="{
                submited: `${submited}`,
                required: true,
                name: 'phone',
                targetId: 'phone',
                value: `${phone}`,
                tabId: 'step3'
              }"
            />
          </div>
          <div class="input-container">
            <input type="submit" value="Signup" />
          </div>
        </div>
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
      activeItem: "step1",
      //form fields data
      name: "",
      email: "",
      phone: "",
      //Our Guard
      submited: false
    };
  },

  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },

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
<style lang="scss" scoped>
.tab_pane {
  display: none;
}
.visible {
  display: block !important;
}
ul {
  display: flex;
}
li {
  list-style: none;
  padding: 10px;
  background-color: $blue;
  margin-right: 10px;
  margin-bottom: 25px;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
