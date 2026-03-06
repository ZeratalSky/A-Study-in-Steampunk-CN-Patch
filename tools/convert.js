const fs = require('fs');
const path = require('path');

const target = process.argv[2];
if (!target) {
    console.error("错误: 未指定文件名");
    process.exit(1);
}

try {
    const txtPath = path.join(__dirname, `${target}.txt`);
    const jsonPath = path.join(__dirname, `${target}.txt.json`);

    if (!fs.existsSync(txtPath)) throw new Error(`缺失文件: ${txtPath}`);

    const raw = fs.readFileSync(txtPath, 'utf8');
    const lines = raw.split(/\r?\n/);
    const labels = {};

    const processed = lines.map((line, index) => {
        // 匹配 label 标签并转为小写索引
        const match = line.match(/^\s*\*label\s+([a-zA-Z0-9_]+)/);
        if (match) labels[match[1].toLowerCase()] = index;

        // 仅清理行尾空格，保留行首缩进防止 ChoiceScript 报错
        return line.trimEnd();
    });

    // 按照原版格式输出 JSON
    fs.writeFileSync(jsonPath, JSON.stringify({
        crc: 0,
        lines: processed,
        labels: labels
    }, null, 2));

    console.log(`已生成: ${target}.txt.json`);

} catch (e) {
    console.error(`失败: ${e.message}`);
}