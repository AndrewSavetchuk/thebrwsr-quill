import Inline from '../blots/inline';

class HighlightTooltip extends Inline {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('data-tooltip', value);
    node.setAttribute('class', 'span-tooltip');
    return node;
  }

  static formats(domNode) {
    return domNode.getAttribute('data-tooltip');
  }

  format(name, value) {
    if (name !== this.statics.blotName || !value) {
      super.format(name, value);
    } else {
      this.domNode.setAttribute('data-tooltip', value);
    }
  }
}
HighlightTooltip.blotName = 'highlightTooltip';
HighlightTooltip.tagName = 'span';

export { HighlightTooltip as default };
