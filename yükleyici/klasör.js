const Database = require("better-sqlite3");
const util = require("util");

let queue = [], 
    db, 
    webview = false; 

function executeQueue(object, queue) {
  if (object) {
    queue.push(object);
    if (queue.length > 1) return;
  }
  switch (queue.length) {
    case 0:
      db.close();
      db = undefined;
      break;
    default:
      if (!db) db = new Database('./codersdb.sqlite');
      let realObj = object ? object : queue[0];
      realObj.args.push(db);
      realObj.args.push(webview);
  }
}


if (!db) db = new Database("./codersdb.sqlite");

var methods = {
  fetch: require("../methodlar/fetch.js"),
  set: require("../methodlar/set.js"),
  add: require("../methodlar/add.js"),
  subtract: require("../methodlar/subtract.js"),
  push: require("../methodlar/push.js"),
  delete: require("../methodlar/delete.js"),
  has: require("../methodlar/has.js"),
  all: require('../methodlar/all.js'),
};

module.exports = {
  version: require("../package.json").version + " PRO",

  fetch: function(key, ops) {
    if (!key)
      throw new TypeError(
        "Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("fetch", { id: key, ops: ops || {} });
  },
  get: function(key, ops) {
    if (!key)
      throw new TypeError(
        "Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("fetch", { id: key, ops: ops || {} });
  },

  set: function(key, value, ops) {
    if (!key)
      throw new TypeError(
        "Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    if (value === undefined)
      throw new TypeError(
        "Belirtilen değer yok veya boş veri kaydedilemedi. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("set", {
      stringify: true,
      id: key,
      data: value,
      ops: ops || {}
    });
  },

  add: function(key, value, ops) {
    if (!key)
      throw new TypeError(
        "Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    if (isNaN(value))
      throw new TypeError(
        "Eklenecek değeri belirtmeniz gerekir. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("add", { id: key, data: value, ops: ops || {} });
  },

  subtract: function(key, value, ops) {
    if (!key)
      throw new TypeError(
        "Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    if (isNaN(value))
      throw new TypeError(
        "Çıkarılacak değeri belirtmeniz gerekir. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("subtract", { id: key, data: value, ops: ops || {} });
  },

  push: function(key, value, ops) {
    if (!key)
      throw new TypeError(
 "HATA: Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    if (!value && value != 0)
      throw new TypeError(
        "Push methodu için değer belirtmeniz gerekir. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("push", {
      stringify: true,
      id: key,
      data: value,
      ops: ops || {}
    });
  },

  delete: function(key, ops) {
    if (!key)
      throw new TypeError(
 "HATA: Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("delete", { id: key, ops: ops || {} });
  },

  has: function(key, ops) {
    if (!key)
      throw new TypeError(
        "HATA: Belirtilen anahtar yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
      );
    return arbitrate("has", { id: key, ops: ops || {} });
  },

all: function(ops) { 
    return arbitrate('all', {ops: ops || {}});
  },

    startsWith: function(startsWith, options) {
    return new Promise((resolve, error) => {
      executeQueue({
        "fun": "startsWith",
        "args": [startsWith, options],
        "innerFunc": [resolve, error]
      }, queue);
    });
    }
}
    this.fetch = function(key, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate("fetch", { id: key, ops: ops || {} }, this.tableName);
    };

    this.get = function(key, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate("fetch", { id: key, ops: ops || {} }, this.tableName);
    };//promisesiz .get()

    this.set = function(key, value, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      if (!value && value != 0)
        throw new TypeError(
          "HATA: Belirtilen değer yok veya boş veri kaydedilemedi. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate(
        "set",
        { stringify: true, id: key, data: value, ops: ops || {} },
        this.tableName
      );
    };

    this.add = function(key, value, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      if (isNaN(value))
        throw new TypeError(
          "HATA: Eklenecek değeri belirtmeniz gerekir. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate(
        "add",
        { id: key, data: value, ops: ops || {} },
        this.tableName
      );
    };

    this.subtract = function(key, value, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      if (isNaN(value))
        throw new TypeError(
          "HATA: Çıkarılacak değeri belirtmeniz gerekir. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate(
        "subtract",
        { id: key, data: value, ops: ops || {} },
        this.tableName
      );
    };

    this.push = function(key, value, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      if (!value && value != 0)
        throw new TypeError(
          "HATA: Push methodu için değer belirtmeniz gerekir. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate(
        "push",
        { stringify: true, id: key, data: value, ops: ops || {} },
        this.tableName
      );
    };

    this.delete = function(key, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate("delete", { id: key, ops: ops || {} }, this.tableName);
    };

    this.has = function(key, ops) {
      if (!key)
        throw new TypeError(
          "HATA: Belirtilen key yok. Yardıma mı ihtiyacınız var? Katıl: https://discord.gg/6Gqu4zw (Coders Code)"
        );
      return arbitrate("has", { id: key, ops: ops || {} }, this.tableName);
    };
   this.all = function(ops) { 
      return arbitrate('all', {ops: ops || {}}, this.tableName);
    }


          this.startsWith = function(startsWith, options) {
      if (!options) options = {};
      options.table = this.name;
      return new Promise((resolve, error) => {
        executeQueue({
          "fun": "startsWith",
          "args": [startsWith, options],
          "innerFunc": [resolve, error]
        }, queue);
      });
    };

function arbitrate(method, params, tableName) {
  let options = {
    table: tableName || "codersdb"
  };

  db.prepare(
    `CREATE TABLE IF NOT EXISTS ${options.table} (ID TEXT, json TEXT)`
  ).run();

  if (params.ops.target && params.ops.target[0] === ".")
    params.ops.target = params.ops.target.slice(1); 
  if (params.data && params.data === Infinity)
    throw new TypeError(
      `You cannot set Infinity into the database @ ID: ${params.id}`
    );

  if (params.stringify) {
    try {
      params.data = JSON.stringify(params.data);
    } catch (e) {
      throw new TypeError(
        `Please supply a valid input @ ID: ${params.id}\nError: ${e.message}`
      );
    }
  }

  if (params.id && params.id.includes(".")) {
    let unparsed = params.id.split(".");
    params.id = unparsed.shift();
    params.ops.target = unparsed.join(".");
  }

  return methods[method](db, params, options);
}
