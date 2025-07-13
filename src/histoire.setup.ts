import './style.css';
import { defineSetupVue3 } from '@histoire/plugin-vue';
import useDarkCustom from './utils/useDarkCustom';

export const setupVue3 = defineSetupVue3(() => {
  useDarkCustom();
});
