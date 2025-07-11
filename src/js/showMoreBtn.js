const showMore = () => {
  const btn = document.querySelector('.reviews_show-more_btn');
  const image = document.querySelector('.reviews_inner_image');
  const article = document.querySelectorAll('.reviews_inner_item');
  const inner = document.querySelector('.reviews_inner');
  let artiveBtn = false;
  let heightFirs = image.clientHeight + 6;
  article.forEach((item, idx) => {
    if (idx > 3) {
      inner.style.height = `${heightFirs}px`;
      return;
    } else {
      heightFirs += item.clientHeight + 8;
    }
  });
  window.addEventListener('resize', () => {
    let height = image.clientHeight + 6;
    article.forEach((item, idx) => {
      if (artiveBtn) return;
      if (idx > 3) {
        inner.style.height = `${height}px`;
        return;
      } else {
        height += item.clientHeight + 8;
      }
    });
  });
  btn.addEventListener('click', ({ currentTarget }) => {
    currentTarget.style.display = 'none';
    inner.style.height = `${inner.scrollHeight}px`;
    artiveBtn = !artiveBtn;
  });
};

export default showMore;
