import { Wizard, WizardItem } from './components';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    install(Vue) {
        Vue.component('VueEasyWizard', Wizard);
        Vue.component('VueEasyWizardItem', WizardItem);
    }
};