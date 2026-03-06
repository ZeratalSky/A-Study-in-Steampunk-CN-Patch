@echo off
:: 备份原文件
if exist app.asar copy /y app.asar app.asar.bak

:: 执行专业封包，排除特定的二进制文件
npx @electron/asar pack ./unpacked app.asar --unpack "{*.node,*.dll,*.lib}"
echo 封包完成，已更新 app.asar.unpacked。
pause