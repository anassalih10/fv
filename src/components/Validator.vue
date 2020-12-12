<template>
  <p class="error-message">{{ showError === true ? errorMessage : "" }}</p>
</template>

<script>
import jquery from "jquery";
import { mapActions, mapGetters } from "vuex";
export default {
  //Get User Rules
  props: ["rules"],
  data() {
    return {
      longMessage: "",
      errorMessage: "",
      showError: false,
      //Component Default Rules
      defaultRules: {
        name: "",
        targetId: "",
        value: null,
        comparedTo: "",
        required: false,
        type: "",
        max: 0,
        min: 0,
        MaxLength: 0,
        MinLength: 0,
        submited: false
      }
    };
  },
  computed: {
    ...mapGetters(["getErrorsList", "getSubmitingStatus"]),
    currentValue() {
      return this.currentRules.value;
    },
    isSubmited() {
      return this.currentRules.submited;
    },
    currentRules() {
      //Merging Rules (Default+New)
      return {
        ...this.defaultRules,
        ...this.rules
      };
    }
  },
  watch: {
    isSubmited() {
      //listening to the form submiting
      this.showError = true;
      this.checking();
    },
    currentValue() {
      //Run This  Everytime when a Value changes
      this.showError = true;
      this.checking();
    }
  },

  methods: {
    ...mapActions(["addError", "removeError"]),
    validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    checking() {
      const rule = this.currentRules;

      //Making sure that out target(selector) 'id' is exist
      if (rule.targetId !== "") {
        //Check For Required Fields
        if (rule.required) {
          if (rule.value == "" || rule.value == "false") {
            this.longMessage =
              rule.name + " field is required. please enter a value.";
            this.errorMessage = rule.name + " is required";
          } else {
            this.errorMessage = "";
          }
        } //Checker Check

        //Email Validating Checker
        if (rule.type === "email" && rule.value !== "") {
          if (!this.validateEmail(rule.value)) {
            this.longMessage =
              "you need to enter a valid e-mail address. please try again.";
            this.errorMessage = "E-mail must be valid";
          } else {
            this.errorMessage = "";
          }
        } //Checker End

        //Characters Length Checker
        if ((rule.MaxLength > 0 || rule.MinLength > 0) && rule.value !== "") {
          if (rule.value.length > rule.MaxLength && rule.MaxLength > 0) {
            this.longMessage =
              "you must provide at least " +
              rule.MaxLength +
              " characters for " +
              rule.name +
              ". please try again.";
            this.errorMessage = "Maximum characters is " + rule.MaxLength;
          } else if (rule.value.length < rule.MinLength) {
            this.longMessage =
              "you must provide up to " +
              rule.MinLength +
              " characters for " +
              rule.name +
              ". please try again.";
            this.errorMessage = "Minimum characters is " + rule.MinLength;
          } else {
            this.errorMessage = "";
          }
        } //Checker End

        //Password Matching Checker
        if (rule.comparedTo !== "" && rule.value !== "") {
          if (rule.value !== rule.comparedTo) {
            this.longMessage = "Your passwords not match. please try again.";
            this.errorMessage = "password do not match";
          } else {
            this.errorMessage = "";
          }
        } //Checker End

        //Maxium / Minimum Checker
        if ((rule.max > 0 || rule.min > 0) && rule.value !== 0) {
          if (rule.value > rule.max) {
            this.longMessage =
              rule.name +
              " should be below  " +
              rule.max +
              ". please try again.";
            this.errorMessage = "Maximum " + rule.name + " is: " + rule.max;
          } else if (rule.value < rule.min) {
            this.longMessage =
              rule.name +
              " should be above  " +
              rule.min +
              ". please try again.";
            this.errorMessage = "Minimum " + rule.name + " is: " + rule.min;
          } else {
            this.errorMessage = "";
          }
        }
      } //Checker End
      //Add The Error To Our Errors List State
      if (this.errorMessage !== "") {
        this.addError({ targetId: rule.targetId, message: this.longMessage });
        const selector = "#" + rule.targetId;
        if (this.showError !== false) {
          jquery(selector).addClass("error");
        }
      } else {
        this.removeError(rule.targetId);
        const selector = "#" + rule.targetId;
        jquery(selector).removeClass("error");
      }
    }
  },
  mounted() {
    this.checking();
  }
};
</script>

<style lang="scss">
.error {
  border: 2px solid red !important;
}
.error-message {
  min-height: 18px;
  text-transform: lowercase;
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
}
</style>
