class OwnReact {
  static createElement(...args) {
    return [...args];
  }

  static render(element, parentDom) {
    // получение параметров элемента
    const [type, props, content] = element;
    // создание дом-элемента
    const dom = document.createElement(type);
    // добавляем контент к элементу
    if (content) {
      const text = document.createTextNode(content);
      dom.appendChild(text);
    }
    // получение дочерних элементов
    const childElements = props.children || [];
    // рендер дочерних элементов
    childElements.forEach(childElement => this.render(childElement, dom));
    // вставка результата в DOM
    parentDom.appendChild(dom);
  }
}

export default OwnReact;
