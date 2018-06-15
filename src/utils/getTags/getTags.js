const getTags = favorites => {
  const uniqTags = favorites.reduce((tags, cur) => {
    if (cur.tags) {
      cur.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    }
    return tags;
  }, []);
  return uniqTags;
};

export default getTags;
