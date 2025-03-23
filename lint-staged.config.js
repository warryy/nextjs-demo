module.exports = {
  // 对所有支持的文件运行 prettier 格式化
  '**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write'],
  // 对 js,jsx,ts,tsx 文件运行 eslint 修复和 TypeScript 类型检查
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    () => 'tsc --noEmit', // 运行 TypeScript 类型检查
  ],
};
