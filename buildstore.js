const fs = require('fs');
const path = require('path');
//var filePath = path.resolve('.');
//调用文件遍历方法

//文件遍历方法
// fileDisplay(filePath);

main()
function main() {
    const stores = [];
    const stores_cdn = [];
    let allFiles = getAllFiles('./Scripts');
    console.log(`文件数量:${allFiles.length}`);
    for (let i = 0; i < allFiles.length; i++) {
        // console.log(allFiles[i]);
        // 同步读取文件内容
        if (allFiles[i].indexOf("README.md") >= 0 && allFiles[i] != "./README.md") {
            console.log(allFiles[i]);// 读取文件内容
            let pathName = allFiles[i].replace(/^\.\/Scripts\/(.*)\/README\.md/, '$1')
            let content = fs.readFileSync(allFiles[i], 'utf-8');
            let nameRegex = /^# 名称\s+(.*)$/m; // 匹配以 "#名称" 开头，后面跟着至少一个空格的行，并获取该行后面所有文本。
            let versiongex = /^# Version\s+(.*)$/m;
            let scriptTypeRegex = /^# 脚本类型\s+(.*)$/m;
            let authorRegex = /^# 作者\s+@(.*)$/m; // 匹配以 "#作者" 开头，后面跟着至少一个空格和 "@" 符号的行，并获取该行后面所有文本。
            // let descriptionRegex = /# 描述\s+([\s\S]*?)\s+# /; // 匹配以 "#描述" 开头，后面跟着至少一个空格的行，并获取该行后面所有文本。
            let descriptionRegex = /# 描述\s+([\s\S]*?)$/m; // 匹配以 "#描述" 开头，后面跟着至少一个空格的行，并获取该行后面所有文本。

            let nameMatch = content.match(nameRegex); // 使用正则表达式从文本中获取名称。
            let versionMatch = content.match(versiongex);
            let scriptTypeMatch = content.match(scriptTypeRegex); // 使用正则表达式从文本中获取脚本类型。
            let authorMatch = content.match(authorRegex); // 使用正则表达式从文本中获取作者。
            let descriptionMatch = content.match(descriptionRegex); // 使用正则表达式从文本中获取描述。

            let name = nameMatch && nameMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let version = versionMatch && versionMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let scriptType = scriptTypeMatch && scriptTypeMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let author = authorMatch && authorMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            let description = descriptionMatch && descriptionMatch[1]; // 如果找到了匹配项，则获取第一项（分组捕获的内容）。
            console.log(`名称: ${name} | Version: ${version} | 脚本类型: ${scriptType} | 作者: ${author} | 描述: ${description}`);
            let filepatn = allFiles[i].substring(0, allFiles[i].length - 'README.md'.length);
            // console.log(filepatn);
            let mtime = fs.statSync(filepatn + scriptType + ".js").mtime.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
            // console.log(mtime);
            let branch = "main"; // master、main 分支名称
            let store = {
                "author": author,
                "markdown": "https://raw.githubusercontent.com/cpu251/JsHook-Script-Repo/" + branch + "/Scripts/" + encodeURI(pathName) + "/README.md",
                "ctime": mtime,
                "source": "https://github.com/cpu251/JsHook-Script-Repo/tree/" + branch + "/Scripts/" + encodeURI(pathName),
                "id": name,
                "title": name,
                "type": scriptType,
                "version": version,
                "url": "https://raw.githubusercontent.com/cpu251/JsHook-Script-Repo/" + branch + "/Scripts/" + encodeURI(pathName) + "/" + scriptType + ".js",
                "desc": description,
                "down_count": 1069
            };
            stores.push(store);
            let store_cdn = {
                "author": author,
                "markdown": "https://cdn.jsdelivr.net/gh/cpu251/JsHook-Script-Repo@" + branch + "/Scripts/" + encodeURI(pathName) + "/README.md",
                "ctime": mtime,
                "source": "https://github.com/cpu251/JsHook-Script-Repo/tree/" + branch + "/Scripts/" + encodeURI(pathName),
                "id": name,
                "title": name,
                "type": scriptType,
                "version": version,
                "url": "https://cdn.jsdelivr.net/gh/cpu251/JsHook-Script-Repo@" + branch + "/Scripts/" + encodeURI(pathName) + "/" + scriptType + ".js",
                "desc": description,
                "down_count": 1069
            };
            stores_cdn.push(store_cdn);
        }
    }
    fs.writeFileSync('Store.json', JSON.stringify(stores));
    fs.writeFileSync('Store-cdn.json', JSON.stringify(stores_cdn));
    //console.log(stores);

}

/**
 * 递归遍历，获取指定文件夹下面的所有文件路径
 */
function getAllFiles(filePath) {
    let allFilePaths = [];
    if (fs.existsSync(filePath)) {
        let files = fs.readdirSync(filePath);
        for (let i = 0; i < files.length; i++) {
            let file = files[i]; // 文件名称（不包含文件路径）
            let currentFilePath = filePath + '/' + file;
            let stats = fs.lstatSync(currentFilePath);
            if (stats.isDirectory()) {
                allFilePaths = allFilePaths.concat(getAllFiles(currentFilePath));
            } else {
                allFilePaths.push(currentFilePath);
            }
        }
    } else {
        console.warn(`指定的目录${filePath}不存在！`);
    }

    return allFilePaths;
}