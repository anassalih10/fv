import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../views/Signup.vue";
import Welcome from "../views/Welcome.vue";
import Usage from "../views/Usage.vue";
import TabsExample from "../views/TabsExample.vue";
import AccordionSections from "../views/AccordionSections.vue";

const routes = [
  {
    path: "/",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/accordionSections",
    name: "AccordionSections",
    component: AccordionSections
  },
  {
    path: "/tabsExample",
    name: "TabsExample",
    component: TabsExample
  },
  {
    path: "/usage",
    name: "Usage",
    component: Usage
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
