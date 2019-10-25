import { Wizard, WizardItem } from './components';
import 'bootstrap/dist/css/bootstrap.css';

export default {
    install(Vue) {
        Vue.component('Wizard', Wizard);
        Vue.component('WizardItem', WizardItem);
    }
};