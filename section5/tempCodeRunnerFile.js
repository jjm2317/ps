e")] = function (map) {
    if (this.size !== map.size) return false;
    for ([key, val] of this) {
      if (!map.has(key) || map.get(key) !== key) return false;
    }

    return true;
  };