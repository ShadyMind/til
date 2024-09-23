const INITIAL_VALUES = [
  ['color', '#000000'],
  ['length', '0px'],
  ['percentage', '0%'],
  ['number', '0'],
  ['integer', '0'],
  ['angle', '0deg'],
  ['time', '0ms'],
  ['resolution', '0dpi'],
  ['transform-function', 'scale(1)'],
  ['transform-list', 'scale(1)'],
];

const SCHEMA = {
  type: 'object',
  properties: {
    cssTargetSelector: {
      type: 'string',
      default: ':root'
    }
  }
}

/** @type {import('webpack').LoaderDefinition} */
export default async function (source) {
  const themeData = JSON.parse(source);
  const options = this.getOptions(SCHEMA);

  const values = Object.entries(themeData.values).map(([name, value]) => ({ name, ...value }));
  const initScript = values.reduce((acc, property) => {
    let line = `c.registerProperty({name:'--${property.name}',inherits:${property.inherits},`;

    if (property.syntax) {
      line += `syntax:'${property.syntax}',`;
    } else if (!property.initialValue) {
      line += 'syntax:\'*\',';
    }

    let { syntax } = property;

    let syntaxConditionChatIdx = syntax.indexOf('|');

    if (syntaxConditionChatIdx !== -1) {
      syntax = property.syntax.slice(0, syntaxConditionChatIdx).trim();
    }

    if (property.initialValue) {
      line += `initialValue:'${property.initialValue}',`
    } else if (syntax && syntax !== '*') {
      line += `initialValue:'${INITIAL_VALUES.reduce((acc, [tag, value]) => {
        let i = 0;

        while (true) {
          i = acc.indexOf(`<${tag}>`, i);

          if (i === -1) {
            break;
          } else {
            let start = i;
            let end = i + tag.length + 2;
            let insert = value;
            let multiplier = acc.at(end);

            if (multiplier === '#' || multiplier === '+') {
              end += 1;
            }

            if (end < acc.length) {
              insert = `${value}`;
            }

            let result = `${acc.slice(0, start)}${insert}${acc.slice(end)}`;
            acc = result;
          }
        }

        return acc;

      }, syntax)}'`
    }

    line += '})';

    acc.push(line);

    return acc;
  }, []).join(',');

  const assignScript = values.reduce((acc, property) => {
    if (property.value.startsWith('&')) {
      const refName = property.value.slice(1);
      const refProperty = themeData.values[refName];

      if (!refProperty.syntax.includes(property.syntax)) {
        throw new Error(`Syntaxes of "${refName}" and "${property.name}" theme values mismatch. "${refProperty.syntax}" and "${property.syntax}" is not match.`)
      }

      return  `${acc}--${property.name}:var(--${property.value.slice(1)});`;
    }

    return `${acc}--${property.name}:${property.value};`;
  }, '');

  return `(0,c=window.CSS,${initScript || 'null'}),(0,c='${options.cssTargetSelector || ':root'}{${assignScript}}',d=document,h=(d.head||d.getElementsByTagName('head')[0]),s=d.createElement('style'),s.type='text/css',s.styleSheet?s.styleSheet.cssText=c:s.appendChild(d.createTextNode(c)),d.head.appendChild(s))`;
}
