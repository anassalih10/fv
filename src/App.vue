<template>
  <router-view />
  <ul class="footer">
    <li><router-link to="/">Example 1</router-link></li>
    <li><router-link to="/TabsExample">Example 2</router-link></li>
    <li><router-link to="/AccordionSections">Example 3</router-link></li>
  </ul>
</template>

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
