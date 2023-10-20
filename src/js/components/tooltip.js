import { createPopper, right} from '@popperjs/core';

const el = document.querySelector('.tooltip__btn');
const tooltip = document.querySelector('.tooltip__text')

if (document.querySelector('.tooltip')) {
  createPopper(el, tooltip, {
    placement: 'top'
  });
}
