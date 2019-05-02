import Inline from '../blots/inline';

class Highlight extends Inline {
  static create(value) {
    const node = super.create(value);
    if (value === 'green') {
      node.setAttribute('class', 'highlight-green');
    }
    if (value === 'yellow') {
      node.setAttribute('class', 'highlight-yellow');
    }
    if (value === 'purple') {
      node.setAttribute('class', 'highlight-purple');
    }
    return node;
  }

  static formats(domNode) {
    if (domNode.className === 'highlight-green') return 'green';
    if (domNode.className === 'highlight-yellow') return 'yellow';
    if (domNode.className === 'highlight-purple') return 'purple';
    return undefined;
  }
}

Highlight.blotName = 'highlight';
Highlight.tagName = 'SPAN';

export default Highlight;
