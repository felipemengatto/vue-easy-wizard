# 🚀 Welcome to vue-easy-wizard!

#### Obs: Have bootstrap support :grin:

### Install Package
```
npm i -S vue-easy-wizard
```

### Install Plugin Vue
```js
import Wizard from 'vue-easy-wizard';
import 'vue-easy-wizard/dist/VueEasyWizard.css';

Vue.use(Wizard);
```

### Basic Usage
```html
    <Wizard>
        <WizardItem :back-button="false" title="Wizard" subtitle="Step 1">
            <h1> You are on the step One </h1>
            <button @click="$emit('wizard:next');">
                Next
            </button>
        </WizardItem>
        <WizardItem title="Wizard" subtitle="Step 2">
            <h1> You are on the step Two </h1>
            <button @click="$emit('wizard:next');">
                Next
            </button>
        </WizardItem>
        <WizardItem title="Wizard" subtitle="Step 3">
            <h1> You are on the step Three </h1>
            <button @click="$emit('wizard:next');">
                Next
            </button>
        </WizardItem>
        <WizardItem :back-button="false" subtitle="Step 4">
            <h1> You are on the step Four </h1>
            <h5> But now let's go back to the previous step </h5>
            <button @click="$emit('wizard:prev');">
                prev
            </button>
        </WizardItem>
    </Wizard>
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

### WizardItem Options

1. title (required)
```html
    <WizardItem title="Wizard">
    </WizardItem>
```
2. subtitle
```html
    <WizardItem subtitle="step 1">
    </WizardItem>
```
3. Enable/Disable Back Button (true/false)
```html
    <WizardItem :back-button="false">
    </WizardItem>
```
