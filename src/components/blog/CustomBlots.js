import Quill from 'quill';
const BlockEmbed = Quill.import('blots/block/embed');

// 1. Featured Image with Caption
export class FeaturedImage extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.classList.add('featured-image');
    node.innerHTML = `
      <img src="${value.url}" alt="${value.alt || ''}" />
      ${value.caption ? `<p class="caption">${value.caption}</p>` : ''}
    `;
    return node;
  }
}
FeaturedImage.blotName = 'featuredImage';
FeaturedImage.tagName = 'div';

// 2. Info Box
export class InfoBox extends BlockEmbed {
  static create(value) {
    const node = super.create();
    node.classList.add('info-box', value.type || 'info');
    node.innerHTML = `
      <h4>${value.title}</h4>
      <div>${value.content}</div>
    `;
    return node;
  }
}
InfoBox.blotName = 'infoBox';
InfoBox.tagName = 'div';

// Add more custom blots here... 