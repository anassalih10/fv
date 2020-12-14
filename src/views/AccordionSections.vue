<template>
  <div class="form-container">
    <form @submit.prevent="onSubmit" action="#" id="sign-up">
      <div
        class="panel-group"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a
                id="step1"
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="more-less glyphicon glyphicon-plus"></i>
                STEP #1
              </a>
            </h4>
          </div>
          <div
            id="collapseOne"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingOne"
          >
            <div class="panel-body">
              <!-- Our Target Input -->
              <div class="input-container">
                <!-- Our Target Input -->
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  v-model="name"
                />
                <!-- Validator Component -->
                <validator
                  :rules="{
                    submited: `${submited}`,
                    required: true,
                    name: 'name',
                    targetId: 'name',
                    value: `${email}`,
                    tabId: 'step1'
                  }"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h4 class="panel-title">
              <a
                id="step2"
                class="collapsed"
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <i class="more-less glyphicon glyphicon-plus"></i>
                STEP #2
              </a>
            </h4>
          </div>
          <div
            id="collapseTwo"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingTwo"
          >
            <div class="panel-body">
              <!-- Our Target Input -->
              <div class="input-container">
                <!-- Our Target Input -->
                <input
                  id="email"
                  type="text"
                  placeholder="Email"
                  v-model="email"
                />
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
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
              <a
                id="step3"
                class="collapsed"
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <i class="more-less glyphicon glyphicon-plus"></i>
                STEP #3
              </a>
            </h4>
          </div>
          <div
            id="collapseThree"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby="headingThree"
          >
            <div class="panel-body">
              <!-- Our Target Input -->
              <div class="input-container">
                <!-- Our Target Input -->
                <input
                  id="phone"
                  type="text"
                  placeholder="Phone"
                  v-model="phone"
                />
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
        </div>
      </div>
      <!-- panel-group -->
    </form>
  </div>
  <HelperBox />
</template>

<script>
import jquery from "jquery";
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
    onSubmit() {
      this.submited = true;
      const errorsCount = this.$store.getters.getErrorsList.size;
      if (errorsCount === 0) {
        alert("valid!");
      } else {
        alert("non-valid!");
      }
    }
  },
  mounted() {
    /*******************************
     * ACCORDION WITH TOGGLE ICONS
     *******************************/
    function toggleIcon(e) {
      jquery(e.target)
        .prev(".panel-heading")
        .find(".more-less")
        .toggleClass("glyphicon-plus glyphicon-minus");
    }
    jquery(".panel-group").on("hidden.bs.collapse", toggleIcon);
    jquery(".pnel-group").on("shown.bs.collapse", toggleIcon);
  }
};
</script>

<style scoped>
/*******************************
* ACCORDION WITH TOGGLE ICONS
* Does not work properly if "in" is added after "collapse".
*******************************/
.panel-group .panel {
  border-radius: 0;
  box-shadow: none;
  border-color: #eeeeee;
}

.panel-default > .panel-heading {
  padding: 0;
  border-radius: 0;
  color: #212121;
  background-color: #fafafa;
  border-color: #eeeeee;
}

.panel-title {
  font-size: 14px;
}

.panel-title > a {
  display: block;
  padding: 15px;
  text-decoration: none;
}

.more-less {
  float: right;
  color: #212121;
}

.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #eeeeee;
}

/* ----- v CAN BE DELETED v ----- */
body {
  background-color: #26a69a;
}

.demo {
  padding-top: 60px;
  padding-bottom: 110px;
}

.demo-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background-color: #212121;
  text-align: center;
}

.demo-footer > a {
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
}
</style>
