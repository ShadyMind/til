const aliases = [
  ['d', 'dev', 'development'],
  ['p', 'prod', 'production']
];

export class Env {
  constructor(name = process.env.NODE_ENV || 'development') {
    this.source = name;
  }

  normalized() {
    return this.variations().at(-1);
  }

  variations() {
    const s = this.source;
    return aliases.find(a => a.includes(s)) || [s];
  }
}
