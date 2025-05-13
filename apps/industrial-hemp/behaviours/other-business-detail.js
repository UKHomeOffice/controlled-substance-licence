module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);

    locals.items.forEach((item, index) => {
      item.itemTitle = index + 1;

      return item;
    });

    return locals;
  }
};
