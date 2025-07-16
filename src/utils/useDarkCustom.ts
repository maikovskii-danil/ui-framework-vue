import { useDark, useToggle } from '@vueuse/core';

const useDarkCustom = () => {
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'hst-dark',
    valueLight: '',
  });
  const toggleIsDark = useToggle(isDark);

  return { value: isDark, toggle: toggleIsDark };
};

export default useDarkCustom;
