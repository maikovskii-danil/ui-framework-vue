import './style.css';

import { defineSetupVue3 } from '@histoire/plugin-vue';
import GlobalWrapper from './GlobalWrapper.vue';
import useDarkCustom from './utils/useDarkCustom';

export const setupVue3 = defineSetupVue3(({ addWrapper }) => {
  useDarkCustom();

  addWrapper(GlobalWrapper);
});
