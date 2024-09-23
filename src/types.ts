declare module '*.module.css';

declare module 'theme.*.json' {
  const values: Record<string, Omit<PropertyDefinition, 'name'> & { value: string }>;
}
