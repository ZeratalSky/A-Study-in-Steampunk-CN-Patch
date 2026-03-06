@echo off
:: 解包 app.asar 到 unpacked 目录
npx @electron/asar extract app.asar ./unpacked
echo 解包完成。
pause