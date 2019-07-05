export function inViewport(el) {
    let top = el.offsetTop;
    let height = el.offsetHeight;


    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
    }

    return top >= window.pageYOffset && top + height <= window.pageYOffset + window.innerHeight;
}

export function findParent(node) {
    if (node.nodeType !== 1) return findParent(node.parentNode);
    else return node;
}


export function  getTarget(record) {
    if( record.type === 'characterData'){
        return record.target
    }else{
        if(record.addedNodes.length){
            return record.addedNodes[0]
        }
        return  record.previousSibling || record.nextSibling
    }
}

export function debounce(fn, delay) {

    delay = typeof delay === 'number' ? delay : 300;
  
    let timer;
    return function(...args) {
      if (timer) clearTimeout(timer);
      let self = this;
      timer = setTimeout(function() {
        fn.apply(self, args)
      }, delay)
    }
  }
  