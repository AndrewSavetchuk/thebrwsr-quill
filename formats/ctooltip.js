import Inline from '../blots/inline';

class Ctooltip extends Inline {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('data-value', value);
    node.setAttribute('class', 'span-tooltip');
    node.setAttribute('color', 'rgb(230, 0, 0)');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-value');
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    } else {
      this.domNode.setAttribute('data-value', value);
    }
  }
}
Ctooltip.blotName = 'ctooltip';
Ctooltip.className = 'span-tooltip';
Ctooltip.tagName = 'span';

export default Ctooltip;
