@echo off
:: 遍历场景目录下的所有 txt 文件并运行转换脚本
:: 请根据实际路径修改下方的 scenes 文件夹位置
set SCENE_PATH=./unpacked/assets/scenes

for %%f in (%SCENE_PATH%/*.txt) do (
    node convert.js "%%~nf"
)
echo 文本转换完成。
pause