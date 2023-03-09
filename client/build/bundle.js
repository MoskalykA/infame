// src/infame/utils/interface.ts
var sendAction = (moduleName, functionName, argsList) => {
  SendNUIMessage({
    moduleName,
    functionName,
    argsList
  });
};
var registerAction = (moduleName, functionName, callback) => {
  RegisterNuiCallback(`${moduleName}::${functionName}`, (data) => {
    callback(data);
  });
};

// src/infame/nets/characters/openMenu.ts
onNet("infame.nets.characters.openMenu", (data) => {
  sendAction("characterIndex", "setVisible", {
    visible: true,
    characters: data.characters
  });
});

// src/infame/nets/characters/setData.ts
onNet("infame.nets.characters.setData", (health, armor) => {
  const playerPed = PlayerPedId();
  SetEntityHealth(playerPed, health);
});

// src/infame/nets/notifications/notification.ts
onNet(
  "infame.nets.notifications.notification",
  (type, text, time) => {
    sendAction("notification", "addNotification", {
      type,
      text,
      time
    });
  }
);

// src/infame/events/character/index.ts
registerAction("characterIndex", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterIndex", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});

// src/infame/events/character/list.ts
registerAction("characterList", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterList", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
registerAction("characterList", "select", (data) => {
  emitNet("infame.nets.characters.selectCharacter", data.id);
});

// src/infame/events/character/create.ts
registerAction("characterCreate", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});
registerAction("characterCreate", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
registerAction(
  "characterCreate",
  "create",
  (characterData) => {
    emitNet("infame.nets.characters.createCharacter", {
      firstName: characterData.firstName,
      lastName: characterData.lastName
    });
  }
);

// src/infame/types/global.ts
var global_default = global;

// src/infame/events/playerConnected.ts
var interval = setInterval(() => {
  if (NetworkIsPlayerActive(PlayerId())) {
    clearInterval(interval);
    global_default.exports.spawnmanager.spawnPlayer(
      {
        x: 0,
        y: 0,
        z: 0,
        model: "a_m_m_skater_01"
      },
      () => {
        emitNet("infame.nets.playerConnected");
      }
    );
  }
}, 100);

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/runtime/nodejs/index.js
var import_os = require("os");
var import_path = require("path");
var import_util = require("util");

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/prettyLogStyles.js
var prettyLogStyles = {
  reset: [0, 0],
  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  overline: [53, 55],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
};

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/formatTemplate.js
function formatTemplate(settings, template, values, hideUnsetPlaceholder = false) {
  const templateString = String(template);
  const ansiColorWrap = (placeholderValue, code) => `\x1B[${code[0]}m${placeholderValue}\x1B[${code[1]}m`;
  const styleWrap = (value, style) => {
    if (style != null && typeof style === "string") {
      return ansiColorWrap(value, prettyLogStyles[style]);
    } else if (style != null && Array.isArray(style)) {
      return style.reduce((prevValue, thisStyle) => styleWrap(prevValue, thisStyle), value);
    } else {
      if (style != null && style[value.trim()] != null) {
        return styleWrap(value, style[value.trim()]);
      } else if (style != null && style["*"] != null) {
        return styleWrap(value, style["*"]);
      } else {
        return value;
      }
    }
  };
  return templateString.replace(/{{(.+?)}}/g, (_, placeholder) => {
    var _a;
    const value = values[placeholder] != null ? values[placeholder] : hideUnsetPlaceholder ? "" : _;
    return settings.stylePrettyLogs ? styleWrap(value, (_a = settings == null ? void 0 : settings.prettyLogStyles) == null ? void 0 : _a[placeholder]) + ansiColorWrap("", prettyLogStyles.reset) : value;
  });
}

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/runtime/nodejs/index.js
var meta = {
  runtime: "Nodejs",
  runtimeVersion: process.version,
  hostname: (0, import_os.hostname)()
};
function getMeta(logLevelId, logLevelName, stackDepthLevel, hideLogPositionForPerformance, name, parentNames) {
  return Object.assign({}, meta, {
    name,
    parentNames,
    date: /* @__PURE__ */ new Date(),
    logLevelId,
    logLevelName,
    path: !hideLogPositionForPerformance ? getCallerStackFrame(stackDepthLevel) : void 0
  });
}
function getCallerStackFrame(stackDepthLevel, error = Error()) {
  var _a, _b, _c;
  return stackLineToStackFrame((_c = (_b = (_a = error == null ? void 0 : error.stack) == null ? void 0 : _a.split("\n")) == null ? void 0 : _b.filter((thisLine) => thisLine.includes("    at "))) == null ? void 0 : _c[stackDepthLevel]);
}
function getErrorTrace(error) {
  var _a, _b;
  return (_b = (_a = error == null ? void 0 : error.stack) == null ? void 0 : _a.split("\n")) == null ? void 0 : _b.reduce((result, line) => {
    if (line.includes("    at ")) {
      result.push(stackLineToStackFrame(line));
    }
    return result;
  }, []);
}
function stackLineToStackFrame(line) {
  var _a, _b, _c, _d;
  const pathResult = {
    fullFilePath: void 0,
    fileName: void 0,
    fileNameWithLine: void 0,
    fileColumn: void 0,
    fileLine: void 0,
    filePath: void 0,
    filePathWithLine: void 0,
    method: void 0
  };
  if (line != null && line.includes("    at ")) {
    line = line.replace(/^\s+at\s+/gm, "");
    const errorStackLine = line.split(" (");
    const fullFilePath = (line == null ? void 0 : line.slice(-1)) === ")" ? (_a = line == null ? void 0 : line.match(/\(([^)]+)\)/)) == null ? void 0 : _a[1] : line;
    const pathArray = (fullFilePath == null ? void 0 : fullFilePath.includes(":")) ? (_c = (_b = fullFilePath == null ? void 0 : fullFilePath.replace("file://", "")) == null ? void 0 : _b.replace(process.cwd(), "")) == null ? void 0 : _c.split(":") : void 0;
    const fileColumn = pathArray == null ? void 0 : pathArray.pop();
    const fileLine = pathArray == null ? void 0 : pathArray.pop();
    const filePath = pathArray == null ? void 0 : pathArray.pop();
    const filePathWithLine = (0, import_path.normalize)(`${filePath}:${fileLine}`);
    const fileName = (_d = filePath == null ? void 0 : filePath.split("/")) == null ? void 0 : _d.pop();
    const fileNameWithLine = `${fileName}:${fileLine}`;
    if (filePath != null && filePath.length > 0) {
      pathResult.fullFilePath = fullFilePath;
      pathResult.fileName = fileName;
      pathResult.fileNameWithLine = fileNameWithLine;
      pathResult.fileColumn = fileColumn;
      pathResult.fileLine = fileLine;
      pathResult.filePath = filePath;
      pathResult.filePathWithLine = filePathWithLine;
      pathResult.method = (errorStackLine == null ? void 0 : errorStackLine[1]) != null ? errorStackLine == null ? void 0 : errorStackLine[0] : void 0;
    }
  }
  return pathResult;
}
function isError(e) {
  var _a;
  return ((_a = import_util.types) == null ? void 0 : _a.isNativeError) != null ? import_util.types.isNativeError(e) : e instanceof Error;
}
function prettyFormatLogObj(maskedArgs, settings) {
  return maskedArgs.reduce((result, arg) => {
    isError(arg) ? result.errors.push(prettyFormatErrorObj(arg, settings)) : result.args.push(arg);
    return result;
  }, { args: [], errors: [] });
}
function prettyFormatErrorObj(error, settings) {
  const errorStackStr = getErrorTrace(error).map((stackFrame) => {
    return formatTemplate(settings, settings.prettyErrorStackTemplate, { ...stackFrame }, true);
  });
  const placeholderValuesError = {
    errorName: ` ${error.name} `,
    errorMessage: error.message,
    errorStack: errorStackStr.join("\n")
  };
  return formatTemplate(settings, settings.prettyErrorTemplate, placeholderValuesError);
}
function transportFormatted(logMetaMarkup, logArgs, logErrors, settings) {
  const logErrorsStr = (logErrors.length > 0 && logArgs.length > 0 ? "\n" : "") + logErrors.join("\n");
  settings.prettyInspectOptions.colors = settings.stylePrettyLogs;
  console.log(logMetaMarkup + (0, import_util.formatWithOptions)(settings.prettyInspectOptions, ...logArgs) + logErrorsStr);
}
function transportJSON(json) {
  console.log(jsonStringifyRecursive(json));
  function jsonStringifyRecursive(obj) {
    const cache = /* @__PURE__ */ new Set();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.has(value)) {
          return "[Circular]";
        }
        cache.add(value);
      }
      return value;
    });
  }
}
function isBuffer(arg) {
  return Buffer.isBuffer(arg);
}

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/formatNumberAddZeros.js
function formatNumberAddZeros(value, digits = 2, addNumber = 0) {
  if (value != null && isNaN(value)) {
    return "";
  }
  value = value != null ? value + addNumber : value;
  return digits === 2 ? value == null ? "--" : value < 10 ? "0" + value : value.toString() : value == null ? "---" : value < 10 ? "00" + value : value < 100 ? "0" + value : value.toString();
}

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/BaseLogger.js
var BaseLogger = class {
  constructor(settings, logObj, stackDepthLevel = 4) {
    var _a, _b, _c, _d, _e, _f, _g;
    this.logObj = logObj;
    this.stackDepthLevel = stackDepthLevel;
    const isBrowser = ![typeof window, typeof document].includes("undefined");
    const isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
    this.runtime = isBrowser ? "browser" : isNode ? "nodejs" : "unknown";
    const isBrowserBlinkEngine = isBrowser ? (((window == null ? void 0 : window["chrome"]) || window.Intl && (Intl == null ? void 0 : Intl["v8BreakIterator"])) && "CSS" in window) != null : false;
    const isSafari = isBrowser ? /^((?!chrome|android).)*safari/i.test(navigator == null ? void 0 : navigator.userAgent) : false;
    this.stackDepthLevel = isSafari ? 4 : this.stackDepthLevel;
    this.settings = {
      type: (settings == null ? void 0 : settings.type) ?? "pretty",
      name: settings == null ? void 0 : settings.name,
      parentNames: settings == null ? void 0 : settings.parentNames,
      minLevel: (settings == null ? void 0 : settings.minLevel) ?? 0,
      argumentsArrayName: settings == null ? void 0 : settings.argumentsArrayName,
      hideLogPositionForProduction: (settings == null ? void 0 : settings.hideLogPositionForProduction) ?? false,
      prettyLogTemplate: (settings == null ? void 0 : settings.prettyLogTemplate) ?? "{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}	{{logLevelName}}	{{filePathWithLine}}{{nameWithDelimiterPrefix}}	",
      prettyErrorTemplate: (settings == null ? void 0 : settings.prettyErrorTemplate) ?? "\n{{errorName}} {{errorMessage}}\nerror stack:\n{{errorStack}}",
      prettyErrorStackTemplate: (settings == null ? void 0 : settings.prettyErrorStackTemplate) ?? "  \u2022 {{fileName}}	{{method}}\n	{{filePathWithLine}}",
      prettyErrorParentNamesSeparator: (settings == null ? void 0 : settings.prettyErrorParentNamesSeparator) ?? ":",
      prettyErrorLoggerNameDelimiter: (settings == null ? void 0 : settings.prettyErrorLoggerNameDelimiter) ?? "	",
      stylePrettyLogs: (settings == null ? void 0 : settings.stylePrettyLogs) ?? true,
      prettyLogTimeZone: (settings == null ? void 0 : settings.prettyLogTimeZone) ?? "UTC",
      prettyLogStyles: (settings == null ? void 0 : settings.prettyLogStyles) ?? {
        logLevelName: {
          "*": ["bold", "black", "bgWhiteBright", "dim"],
          SILLY: ["bold", "white"],
          TRACE: ["bold", "whiteBright"],
          DEBUG: ["bold", "green"],
          INFO: ["bold", "blue"],
          WARN: ["bold", "yellow"],
          ERROR: ["bold", "red"],
          FATAL: ["bold", "redBright"]
        },
        dateIsoStr: "white",
        filePathWithLine: "white",
        name: ["white", "bold"],
        nameWithDelimiterPrefix: ["white", "bold"],
        nameWithDelimiterSuffix: ["white", "bold"],
        errorName: ["bold", "bgRedBright", "whiteBright"],
        fileName: ["yellow"],
        fileNameWithLine: "white"
      },
      prettyInspectOptions: (settings == null ? void 0 : settings.prettyInspectOptions) ?? {
        colors: true,
        compact: false,
        depth: Infinity
      },
      metaProperty: (settings == null ? void 0 : settings.metaProperty) ?? "_meta",
      maskPlaceholder: (settings == null ? void 0 : settings.maskPlaceholder) ?? "[***]",
      maskValuesOfKeys: (settings == null ? void 0 : settings.maskValuesOfKeys) ?? ["password"],
      maskValuesOfKeysCaseInsensitive: (settings == null ? void 0 : settings.maskValuesOfKeysCaseInsensitive) ?? false,
      maskValuesRegEx: settings == null ? void 0 : settings.maskValuesRegEx,
      prefix: [...(settings == null ? void 0 : settings.prefix) ?? []],
      attachedTransports: [...(settings == null ? void 0 : settings.attachedTransports) ?? []],
      overwrite: {
        mask: (_a = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _a.mask,
        toLogObj: (_b = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _b.toLogObj,
        addMeta: (_c = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _c.addMeta,
        formatMeta: (_d = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _d.formatMeta,
        formatLogObj: (_e = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _e.formatLogObj,
        transportFormatted: (_f = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _f.transportFormatted,
        transportJSON: (_g = settings == null ? void 0 : settings.overwrite) == null ? void 0 : _g.transportJSON
      }
    };
    this.settings.stylePrettyLogs = this.settings.stylePrettyLogs && isBrowser && !isBrowserBlinkEngine ? false : this.settings.stylePrettyLogs;
  }
  log(logLevelId, logLevelName, ...args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    if (logLevelId < this.settings.minLevel) {
      return;
    }
    const logArgs = [...this.settings.prefix, ...args];
    const maskedArgs = ((_a = this.settings.overwrite) == null ? void 0 : _a.mask) != null ? (_b = this.settings.overwrite) == null ? void 0 : _b.mask(logArgs) : this.settings.maskValuesOfKeys != null && this.settings.maskValuesOfKeys.length > 0 ? this._mask(logArgs) : logArgs;
    const thisLogObj = this.logObj != null ? this._recursiveCloneAndExecuteFunctions(this.logObj) : void 0;
    const logObj = ((_c = this.settings.overwrite) == null ? void 0 : _c.toLogObj) != null ? (_d = this.settings.overwrite) == null ? void 0 : _d.toLogObj(maskedArgs, thisLogObj) : this._toLogObj(maskedArgs, thisLogObj);
    const logObjWithMeta = ((_e = this.settings.overwrite) == null ? void 0 : _e.addMeta) != null ? (_f = this.settings.overwrite) == null ? void 0 : _f.addMeta(logObj, logLevelId, logLevelName) : this._addMetaToLogObj(logObj, logLevelId, logLevelName);
    let logMetaMarkup;
    let logArgsAndErrorsMarkup = void 0;
    if (((_g = this.settings.overwrite) == null ? void 0 : _g.formatMeta) != null) {
      logMetaMarkup = (_h = this.settings.overwrite) == null ? void 0 : _h.formatMeta(logObjWithMeta == null ? void 0 : logObjWithMeta[this.settings.metaProperty]);
    }
    if (((_i = this.settings.overwrite) == null ? void 0 : _i.formatLogObj) != null) {
      logArgsAndErrorsMarkup = (_j = this.settings.overwrite) == null ? void 0 : _j.formatLogObj(maskedArgs, this.settings);
    }
    if (this.settings.type === "pretty") {
      logMetaMarkup = logMetaMarkup ?? this._prettyFormatLogObjMeta(logObjWithMeta == null ? void 0 : logObjWithMeta[this.settings.metaProperty]);
      logArgsAndErrorsMarkup = logArgsAndErrorsMarkup ?? prettyFormatLogObj(maskedArgs, this.settings);
    }
    if (logMetaMarkup != null && logArgsAndErrorsMarkup != null) {
      ((_k = this.settings.overwrite) == null ? void 0 : _k.transportFormatted) != null ? (_l = this.settings.overwrite) == null ? void 0 : _l.transportFormatted(logMetaMarkup, logArgsAndErrorsMarkup.args, logArgsAndErrorsMarkup.errors, this.settings) : transportFormatted(logMetaMarkup, logArgsAndErrorsMarkup.args, logArgsAndErrorsMarkup.errors, this.settings);
    } else {
      ((_m = this.settings.overwrite) == null ? void 0 : _m.transportJSON) != null ? (_n = this.settings.overwrite) == null ? void 0 : _n.transportJSON(logObjWithMeta) : this.settings.type !== "hidden" ? transportJSON(logObjWithMeta) : void 0;
    }
    if (this.settings.attachedTransports != null && this.settings.attachedTransports.length > 0) {
      this.settings.attachedTransports.forEach((transportLogger) => {
        transportLogger(logObjWithMeta);
      });
    }
    return logObjWithMeta;
  }
  attachTransport(transportLogger) {
    this.settings.attachedTransports.push(transportLogger);
  }
  getSubLogger(settings, logObj) {
    var _a, _b, _c;
    const subLoggerSettings = {
      ...this.settings,
      ...settings,
      parentNames: ((_a = this.settings) == null ? void 0 : _a.parentNames) != null && ((_b = this.settings) == null ? void 0 : _b.name) != null ? [...this.settings.parentNames, this.settings.name] : ((_c = this.settings) == null ? void 0 : _c.name) != null ? [this.settings.name] : void 0,
      prefix: [...this.settings.prefix, ...(settings == null ? void 0 : settings.prefix) ?? []]
    };
    const subLogger = new this.constructor(subLoggerSettings, logObj ?? this.logObj, this.stackDepthLevel);
    return subLogger;
  }
  _mask(args) {
    const maskValuesOfKeys = this.settings.maskValuesOfKeysCaseInsensitive !== true ? this.settings.maskValuesOfKeys : this.settings.maskValuesOfKeys.map((key) => key.toLowerCase());
    return args == null ? void 0 : args.map((arg) => {
      return this._recursiveCloneAndMaskValuesOfKeys(arg, maskValuesOfKeys);
    });
  }
  _recursiveCloneAndMaskValuesOfKeys(source, keys, seen = []) {
    if (seen.includes(source)) {
      return { ...source };
    }
    if (typeof source === "object" && source != null) {
      seen.push(source);
    }
    return isBuffer(source) ? source : source instanceof Map ? new Map(source) : source instanceof Set ? new Set(source) : Array.isArray(source) ? source.map((item) => this._recursiveCloneAndMaskValuesOfKeys(item, keys, seen)) : source instanceof Date ? new Date(source.getTime()) : isError(source) ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
      var _a;
      o[prop] = keys.includes(((_a = this.settings) == null ? void 0 : _a.maskValuesOfKeysCaseInsensitive) !== true ? prop : prop.toLowerCase()) ? this.settings.maskPlaceholder : this._recursiveCloneAndMaskValuesOfKeys(source[prop], keys, seen);
      return o;
    }, this._cloneError(source)) : source != null && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
      var _a;
      o[prop] = keys.includes(((_a = this.settings) == null ? void 0 : _a.maskValuesOfKeysCaseInsensitive) !== true ? prop : prop.toLowerCase()) ? this.settings.maskPlaceholder : this._recursiveCloneAndMaskValuesOfKeys(source[prop], keys, seen);
      return o;
    }, Object.create(Object.getPrototypeOf(source))) : ((source2) => {
      var _a, _b;
      (_b = (_a = this.settings) == null ? void 0 : _a.maskValuesRegEx) == null ? void 0 : _b.forEach((regEx) => {
        var _a2;
        source2 = (_a2 = source2 == null ? void 0 : source2.toString()) == null ? void 0 : _a2.replace(regEx, this.settings.maskPlaceholder);
      });
      return source2;
    })(source);
  }
  _recursiveCloneAndExecuteFunctions(source, seen = []) {
    if (seen.includes(source)) {
      return { ...source };
    }
    if (typeof source === "object") {
      seen.push(source);
    }
    return Array.isArray(source) ? source.map((item) => this._recursiveCloneAndExecuteFunctions(item, seen)) : source instanceof Date ? new Date(source.getTime()) : source && typeof source === "object" ? Object.getOwnPropertyNames(source).reduce((o, prop) => {
      Object.defineProperty(o, prop, Object.getOwnPropertyDescriptor(source, prop));
      o[prop] = typeof source[prop] === "function" ? source[prop]() : this._recursiveCloneAndExecuteFunctions(source[prop], seen);
      return o;
    }, Object.create(Object.getPrototypeOf(source))) : source;
  }
  _toLogObj(args, clonedLogObj = {}) {
    args = args == null ? void 0 : args.map((arg) => isError(arg) ? this._toErrorObject(arg) : arg);
    if (this.settings.argumentsArrayName == null) {
      if (args.length === 1 && !Array.isArray(args[0]) && isBuffer(args[0]) !== true && !(args[0] instanceof Date)) {
        clonedLogObj = typeof args[0] === "object" && args[0] != null ? { ...args[0], ...clonedLogObj } : { 0: args[0], ...clonedLogObj };
      } else {
        clonedLogObj = { ...clonedLogObj, ...args };
      }
    } else {
      clonedLogObj = {
        ...clonedLogObj,
        [this.settings.argumentsArrayName]: args
      };
    }
    return clonedLogObj;
  }
  _cloneError(error) {
    const ErrorConstructor = error.constructor;
    const newError = new ErrorConstructor(error.message);
    Object.assign(newError, error);
    const propertyNames = Object.getOwnPropertyNames(newError);
    for (const propName of propertyNames) {
      const propDesc = Object.getOwnPropertyDescriptor(newError, propName);
      if (propDesc) {
        propDesc.writable = true;
        Object.defineProperty(newError, propName, propDesc);
      }
    }
    return newError;
  }
  _toErrorObject(error) {
    return {
      nativeError: error,
      name: error.name ?? "Error",
      message: error.message,
      stack: getErrorTrace(error)
    };
  }
  _addMetaToLogObj(logObj, logLevelId, logLevelName) {
    return {
      ...logObj,
      [this.settings.metaProperty]: getMeta(logLevelId, logLevelName, this.stackDepthLevel, this.settings.hideLogPositionForProduction, this.settings.name, this.settings.parentNames)
    };
  }
  _prettyFormatLogObjMeta(logObjMeta) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    if (logObjMeta == null) {
      return "";
    }
    let template = this.settings.prettyLogTemplate;
    const placeholderValues = {};
    if (template.includes("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}")) {
      template = template.replace("{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}}", "{{dateIsoStr}}");
    } else {
      if (this.settings.prettyLogTimeZone === "UTC") {
        placeholderValues["yyyy"] = ((_a = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _a.getUTCFullYear()) ?? "----";
        placeholderValues["mm"] = formatNumberAddZeros((_b = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _b.getUTCMonth(), 2, 1);
        placeholderValues["dd"] = formatNumberAddZeros((_c = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _c.getUTCDate(), 2);
        placeholderValues["hh"] = formatNumberAddZeros((_d = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _d.getUTCHours(), 2);
        placeholderValues["MM"] = formatNumberAddZeros((_e = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _e.getUTCMinutes(), 2);
        placeholderValues["ss"] = formatNumberAddZeros((_f = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _f.getUTCSeconds(), 2);
        placeholderValues["ms"] = formatNumberAddZeros((_g = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _g.getUTCMilliseconds(), 3);
      } else {
        placeholderValues["yyyy"] = ((_h = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _h.getFullYear()) ?? "----";
        placeholderValues["mm"] = formatNumberAddZeros((_i = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _i.getMonth(), 2, 1);
        placeholderValues["dd"] = formatNumberAddZeros((_j = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _j.getDate(), 2);
        placeholderValues["hh"] = formatNumberAddZeros((_k = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _k.getHours(), 2);
        placeholderValues["MM"] = formatNumberAddZeros((_l = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _l.getMinutes(), 2);
        placeholderValues["ss"] = formatNumberAddZeros((_m = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _m.getSeconds(), 2);
        placeholderValues["ms"] = formatNumberAddZeros((_n = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _n.getMilliseconds(), 3);
      }
    }
    const dateInSettingsTimeZone = this.settings.prettyLogTimeZone === "UTC" ? logObjMeta == null ? void 0 : logObjMeta.date : new Date(((_o = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _o.getTime()) - ((_p = logObjMeta == null ? void 0 : logObjMeta.date) == null ? void 0 : _p.getTimezoneOffset()) * 6e4);
    placeholderValues["rawIsoStr"] = dateInSettingsTimeZone == null ? void 0 : dateInSettingsTimeZone.toISOString();
    placeholderValues["dateIsoStr"] = dateInSettingsTimeZone == null ? void 0 : dateInSettingsTimeZone.toISOString().replace("T", " ").replace("Z", "");
    placeholderValues["logLevelName"] = logObjMeta == null ? void 0 : logObjMeta.logLevelName;
    placeholderValues["fileNameWithLine"] = ((_q = logObjMeta == null ? void 0 : logObjMeta.path) == null ? void 0 : _q.fileNameWithLine) ?? "";
    placeholderValues["filePathWithLine"] = ((_r = logObjMeta == null ? void 0 : logObjMeta.path) == null ? void 0 : _r.filePathWithLine) ?? "";
    placeholderValues["fullFilePath"] = ((_s = logObjMeta == null ? void 0 : logObjMeta.path) == null ? void 0 : _s.fullFilePath) ?? "";
    let parentNamesString = (_t = this.settings.parentNames) == null ? void 0 : _t.join(this.settings.prettyErrorParentNamesSeparator);
    parentNamesString = parentNamesString != null && (logObjMeta == null ? void 0 : logObjMeta.name) != null ? parentNamesString + this.settings.prettyErrorParentNamesSeparator : void 0;
    placeholderValues["name"] = (logObjMeta == null ? void 0 : logObjMeta.name) != null || parentNamesString != null ? (parentNamesString ?? "") + (logObjMeta == null ? void 0 : logObjMeta.name) : "";
    placeholderValues["nameWithDelimiterPrefix"] = placeholderValues["name"].length > 0 ? this.settings.prettyErrorLoggerNameDelimiter + placeholderValues["name"] : "";
    placeholderValues["nameWithDelimiterSuffix"] = placeholderValues["name"].length > 0 ? placeholderValues["name"] + this.settings.prettyErrorLoggerNameDelimiter : "";
    return formatTemplate(this.settings, template, placeholderValues);
  }
};

// node_modules/.pnpm/tslog@4.8.2/node_modules/tslog/dist/esm/index.js
var Logger = class extends BaseLogger {
  constructor(settings, logObj) {
    super(settings, logObj, 5);
  }
  log(logLevelId, logLevelName, ...args) {
    return super.log(logLevelId, logLevelName, ...args);
  }
  silly(...args) {
    return super.log(0, "SILLY", ...args);
  }
  trace(...args) {
    return super.log(1, "TRACE", ...args);
  }
  debug(...args) {
    return super.log(2, "DEBUG", ...args);
  }
  info(...args) {
    return super.log(3, "INFO", ...args);
  }
  warn(...args) {
    return super.log(4, "WARN", ...args);
  }
  error(...args) {
    return super.log(5, "ERROR", ...args);
  }
  fatal(...args) {
    return super.log(6, "FATAL", ...args);
  }
  getSubLogger(settings, logObj) {
    return super.getSubLogger(settings, logObj);
  }
};

// src/infame/utils/logger.ts
var logger = new Logger({
  name: "infame"
});
