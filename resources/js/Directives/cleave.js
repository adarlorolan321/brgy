import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.au'

const directive = {
    created: (el, binding) => {
        el.cleave = new Cleave(el, binding.value || {})
    },
    updated: (el) => {
        const event = new Event('input', { bubbles: true });
        setTimeout(function() {
            el.value = el.cleave.properties.result
            el.dispatchEvent(event)
        }, 100);
    }
}
export default directive;