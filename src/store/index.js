import { createStore } from "vuex";
import ErrorsModule from "@/store/ErrorsModule";
export default createStore({
  modules: {
    errors: ErrorsModule
  }
});
