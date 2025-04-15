import { useTheme } from './ThemeProvider';
import { THEME_DARK, THEME_LIGHT } from '../_utils/const';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === THEME_DARK ? THEME_LIGHT : THEME_DARK);
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-2 absolute top-0 right-0">
      <label className="inline-flex items-center me-5 cursor-pointer">
        <span className="ms-3 text-base font-medium text-black dark:text-white pr-2">
          Switch side
        </span>
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === THEME_DARK}
          onChange={toggleTheme}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-600 dark:bg-white dark:peer-focus:ring-gray-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white dark:after:bg-gray-700 after:border-gray-600 dark:after:border-gray-600 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600" />
      </label>
    </div>
  );
};

export default ThemeToggle;
