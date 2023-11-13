// formkit.config.js
import { generateClasses } from '@formkit/themes';
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './assets/js/formkit-theme';

export default {
    icons: {
        ...genesisIcons,
    },
    config: {
        classes: generateClasses(myTailwindTheme),
    },
}
