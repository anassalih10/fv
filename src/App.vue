<template>
  <router-view />
  <ul class="footer">
    <li><router-link @click="clearMap" to="/">Example 1</router-link></li>
    <li>
      <router-link @click="clearMap" to="/TabsExample">Example 2</router-link>
    </li>
    <li>
      <router-link @click="clearMap" to="/AccordionSections"
        >Example 3</router-link
      >
    </li>
  </ul>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["clearMap"])
  }
};
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  position: absolute;
  bottom: 0;
  li {
    list-style: none;
    margin-right: 30px;
  }
}
</style>
