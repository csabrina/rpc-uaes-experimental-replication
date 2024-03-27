let modulo = process.argv[2];
const fs = require('fs');

const dirClassic = fs.readdirSync('data/' + modulo + '/classic');
const dirGeneric = fs.readdirSync('data/' + modulo + '/generic');

let classic = {};
let generic = {};

const clearTag = (tag) => {
  const regex = /(\S+)=("[^"]*uuid[^"]*")/g;
  return tag.replace(regex, '');
};

const removeTrailingSlash = (str) => {
  if (str.endsWith("/")) {
    return str.slice(0, -1);
  }
  return str;
}

const normalizeJson = (json) => {
  let newJson = {};
  Object.keys(json).forEach(key => {
    const newKey = removeTrailingSlash(key);
    newJson[newKey] = json[key];
  });
  return newJson;
}

const blacklist = ['rel="nofollow"'];

const clearObject = (doomed) => {
  Object.keys(doomed).forEach(key => {
    let objsToRemove = [];
    doomed[key].forEach(obj => {
      if(blacklist.every(value => !obj.tag.includes(value)))
        obj.tag = clearTag(obj.tag);
      else
        objsToRemove.push(obj.tag);
    });
    doomed[key] = doomed[key].filter(obj => !objsToRemove.some(toRemove => obj.tag == toRemove));
  });
}

dirClassic.forEach((file) => {
  let json = fs.readFileSync(`data/` + modulo + `/classic/${file}`);
  json = JSON.parse(json);
  classic = Object.assign(classic, normalizeJson(json));
  clearObject(classic);
  let count = 0;
  Object.keys(classic).forEach(a => count+=classic[a].length);
});

dirGeneric.forEach((file) => {
  let json = fs.readFileSync(`data/` + modulo + `/generic/${file}`);
  json = JSON.parse(json);
  generic = Object.assign(generic, normalizeJson(json));
  clearObject(generic);
  let count = 0;
  Object.keys(generic).forEach(a => count+=generic[a].length);
});

//by url
//plus, minus, equals

let minus = {};
let plus = {};
let equal = {};

//given url inside classic search by same url in generic
//se generic não tem a url, então é um plus
Object.keys(classic).forEach((url) => {
  minus[url] = [];
  plus[url] = [];
  equal[url] = [];
  if (!generic.hasOwnProperty(url)) minus[url] = classic[url];
  else {
    let genericExclusive = generic[url];
    classic[url].forEach((classicTag) => {
      let cTag = classicTag['tag'];
      let isMinus = true;
      generic[url].forEach((genericTag, index) => {
        let gTag = genericTag['tag'];
        if (isMinus && (gTag.includes(cTag) || cTag.includes(gTag))) {
          equal[url].push([classicTag, genericTag]);
          isMinus = false;
          genericExclusive = genericExclusive.filter((_, id) => id != index);
        }
        //plus means in generic but not in classic
      });
      generic[url] = genericExclusive;
      if (isMinus) minus[url].push(classicTag);
    });
    plus[url].push(...genericExclusive);
  }
});

Object.keys(generic).forEach((url) => {
  if (!classic.hasOwnProperty(url)) {
    plus[url] = generic[url];
  }
});

const getNumbers = () => {
  let result = {};
  Object.keys(classic).forEach((url) => {
    result[url] = {
      equal: equal[url].length,
      minus: minus[url].length,
      plus: plus[url].length,
    };
  });
  return result;
};

const getTotal = (mapa) => {
  return Object.keys(mapa).reduce((r, url) => {
    return r + mapa[url].length;
  }, 0);
};

result = { equal: equal, minus: minus, plus: plus, numbers: getNumbers() , total: {'equal': getTotal(equal), 'minus': getTotal(minus), 'plus': getTotal(plus)}};
let count = 0;
fs.writeFileSync(
  'results/' + modulo + '-result.json',
  JSON.stringify(result, null, 2)
);
