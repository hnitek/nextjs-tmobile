module.exports = {
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['cn', 'cva', 'clsx', 'twMerge', 'tw'],
  printWidth: 110,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '^@internal/(.*)$',
    '^[./].*(?<!\\.(c|le|sc)ss)$',
    '^[.]/[-a-zA-Z0-9_]+[.](module)[.](css|scss|less)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  bracketSameLine: true,
};
