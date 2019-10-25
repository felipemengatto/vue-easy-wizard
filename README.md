# 🚀 Welcome to vue-easy-wizard!

#### Obs: Have bootstrap support :grin:

### Install Package
```
npm i -S vue-easy-wizard
```

### Install Plugin Vue
```js
import VueEasyWizard from 'vue-easy-wizard';
import 'vue-easy-wizard/dist/VueEasyWizard.css';

Vue.use(VueEasyWizard);
```

### Basic Usage
```html
    <VueEasyWizard>
        <VueEasyWizardItem :back-button="false" title="Wizard" subtitle="Step 1">
            <h1> You are on the step One </h1>
            <button @click="$emit('wizard:next');">
                Next
            </button>
        </VueEasyWizardItem>
        <VueEasyWizardItem title="Wizard" subtitle="Step 2">
            <h1> You are on the step Two </h1>
            <button @click="$emit('wizard:next');">
                Next
            </button>
        </VueEasyWizardItem>
        <VueEasyWizardItem title="Wizard" subtitle="Step 3">
            <h1> You are on the step Three </h1>
            <button @click="$emit('wizard:next');">
                Next
            </button>
        </VueEasyWizardItem>
        <VueEasyWizardItem :back-button="false" subtitle="Step 4">
            <h1> You are on the step Four </h1>
            <h5> But now let's go back to the previous step </h5>
            <button @click="$emit('wizard:prev');">
                prev
            </button>
        </VueEasyWizardItem>
    </VueEasyWizard>
```

### Events

1. To next Step:
```js
$emit('wizard:next');
```
2. To prev Step:
```js
$emit('wizard:prev');
```