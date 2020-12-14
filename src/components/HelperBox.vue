<template>
  <div id="helper-box" v-if="errors.size > 0" :class="visible">
    <div class="box-head" @click="hide = !hide">
      <div>
        <img src="@/assets/icons/error.png" /> : <span>{{ errorsCount }}</span>
      </div>
      <div class="eye-icon">
        <img src="@/assets/icons/eye.png" />
      </div>
    </div>
    <div class="errors-container">
      <div class="error" v-for="(error, index) in errors" :key="index">
        <div>
          <img src="@/assets/icons/error.png" alt="" />
          <p class="error-text">
            {{ error[1].content }}
          </p>
        </div>
        <a @click="goTo(error[0], error[1].tabId)">Fix it</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import jquery from "jquery";
export default {
  data() {
    return {
      hide: true
    };
  },
  computed: {
    visible() {
      return this.hide === true ? "non-visible" : "visible";
    },
    ...mapGetters(["getErrorsList"]),
    errors() {
      return new Map([...this.getErrorsList].reverse());
    },
    errorsCount() {
      return this.getErrorsList.size;
    }
  },
  methods: {
    goTo(id, tabId) {
      if (tabId != "") {
        document.getElementById(tabId).click();
      }
      var $el = jquery("#" + id);
      $el.focus().addClass("error");
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
}
#helper-box {
  overflow-y: scroll;
  max-height: 80vh;
  width: 460px;
  background: white;
  position: fixed;
  bottom: -2px;
  right: 10px;
  border-radius: 7px;
  padding: 10px;
  text-align: center;
  box-shadow: 1px 2px 15px 2px rgb(187 186 186 / 30%);
  .errors-container {
    overflow: hidden;
  }
  .box-head {
    cursor: pointer;
  }
  .error {
    margin: 10px 0;
    background-color: #f44336;
    padding: 10px 15px 10px 10px;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 0.8em;
    .error-text {
      text-align: left;
    }
    > div {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
    a {
      width: 40px;
      font-size: 1.1em;
      color: white;
      font-weight: bold;
      text-decoration: none;
    }
  }
  img {
    width: 30px;
  }
  .box-head {
    color: red;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 3px;
      }
      img {
        margin-right: 3px;
        width: 20px;
      }
    }
    img {
      width: 18px;
    }
  }
}
.non-visible .errors-container {
  height: 0 !important;
}
.eye-icon {
  position: relative;
}
.visible {
  .errors-container {
    height: auto !important;
  }
  .eye-icon:after {
    content: "";
    position: absolute;
    width: 2px;
    right: 12px;
    transform: rotate(-51deg);
    height: 23px;
    background: #424040;
  }
}
</style>
