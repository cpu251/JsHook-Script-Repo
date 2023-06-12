# 名称
東京放課後サモナーズ
# Version
1.3
# 脚本类型
frida
# 描述
修改战斗相关功能
# 作者
@KUMA

# 東京放課後サモナーズ Mod
* 修改战斗相关功能
* rhino不能设置延迟，frida如果没有显示`注入完成`，可以设置1000毫秒这样的延迟
* 模拟器使用rhino，实机rhino和frida都行
* 当前文档以JsHook 1.1.6版本为例

## 基础功能
* 我方锁血、锁CP

## 可选功能
* 游戏速度修改，在主界面长按`收件箱`图标1秒切换，在1倍、3倍、5倍之间切换
* 战斗开场不动直接胜利，在主界面长按`队伍与强化`图标1秒开关
* 进了战斗想开直接胜利可以长按`属性相性表`按钮2秒，然后需要动一下人物

## 模拟器相关
* 拿`雷电9`举例，其他模拟器自己尝试
1. 先装好游戏能进入了，建议直接把手机的`sdcard/Android/data/jp.co.lifewonders.housamo`整个打包，模拟器解压成一样路径，`AuthKey`也在里面了，检查obb文件，谷歌三件套有没有安装
2. 模拟器开好`ROOT`，设置`System.vmdk 可写入`
3. 装`Magisk Delta`的`Canary`版 [下载地址](https://huskydg.github.io/magisk-files/)
4. 进入`Magisk Delta` -> 给`ROOT权限` -> 安装`Magisk` -> 方式选择`安装到系统分区` -> 重启模拟器 -> `Magisk Delta`设置打开`Zygisk`
5. 安装`JsHook` [下载地址](https://jshook.org/)
6. 安装`Magisk模块` -> 选择下载`LsposedMod-v1.1.3-1103-zygisk-release.zip` -> 到`Magisk Delta`的`模块`里`从本地安装` -> 选择安装下载的文件，重启模拟器
7. `JsHook` -> 仓库 -> 下载脚本
8. `JsHook` -> 应用 -> `housamo` -> 启动Hook服务 -> 启动配置（脚本配置） -> 启动下载的脚本
9. 运行游戏，没有显示任何内容的话，自己随便编个js`global.toast('...')`看能不能显示，能显示再切回之前的脚本

## 免root相关（实机）
~~### 黑盒方法（最高安卓12）：~~
~~#### 首次执行：~~
~~1. 手机安装`JsHook` [下载地址](https://jshook.org/)~~
~~2. 手机安装`BlackBox64` [下载地址](https://github.com/FBlackBox/BlackBox/releases)~~
~~3. 打开`BlackBox64` -> 右上角三点 -> 软件设置 -> **开启进程守护（防止闪退）** -> 启动Xposed框架 -> 模块管理 -> 点+ -> 选择`JsHook` -> 勾选`JsHook` -> 关闭`BlackBox64`~~
~~4. 如果`BlackBox64`的**软件设置**的**GMS管理**能开启，则开启，然后可以跳过5、6步，直接从第7步开始~~
~~5. 下载以下3个APK（谷歌三件套），注意查看下载路径~~
~~* [Api 下载地址](https://github.com/xkeyC/x_google_installer/releases/tag/api28)~~
~~* [Google Play services 下载地址](https://github.com/xkeyC/x_google_installer/releases/tag/s212417037)~~
~~* [Google Play Store 下载地址](https://github.com/xkeyC/x_google_installer/releases/tag/st82601710)~~
~~6. 打开`BlackBox64` -> 点+ -> 手动选择 -> 按顺序选择安装完以上3个APK~~
~~7. 打开`BlackBox64` -> 点+ -> housamo -> 进入游戏出现无字提示后关闭~~
~~8. 外部使用文件管理应用，如`MT管理器`，把~~
```
sdcard/Android/data/jp.co.lifewonders.housamo/files/Data/AuthKey
```
~~复制到~~
```
sdcard/Android/data/top.niunaijun.blackboxa64/files/blackbox/storage/emulated/0/Android/data/jp.co.lifewonders.housamo/files/Data/AuthKey
```
~~9. 上一步也可以直接把~~
```
sdcard/Android/data/jp.co.lifewonders.housamo
```
~~整个文件夹复制到~~
```
sdcard/Android/data/top.niunaijun.blackboxa64/files/blackbox/storage/emulated/0/Android/data/jp.co.lifewonders.housamo
```
~~10. 复制obb文件~~
```
sdcard/Android/obb/jp.co.lifewonders.housamo/main.1212.jp.co.lifewonders.housamo.obb
```
~~复制到~~
```
sdcard/Android/data/top.niunaijun.blackboxa64/files/blackbox/storage/emulated/0/Android/obb/jp.co.lifewonders.housamo/main.1212.jp.co.lifewonders.housamo.obb
```
~~11. 打开`BlackBox64` -> 打开`JsHook` -> 框架管理 -> 安装`FridaMod`~~
~~12. `JsHook`回首页 -> 仓库 -> 下载脚本~~
~~13. `JsHook`回首页 -> 应用 -> housamo -> 启动Hook服务 -> 启动配置（脚本配置） -> 延时设置1000 -> 选择注入框架`FridaMod` -> 启动下载的脚本~~
~~14. 重启`BlackBox64` -> 运行游戏~~
~~#### 游戏更新后：~~
~~* 外部更新游戏就行了，黑盒内部直接链接外部的应用的~~
~~* 如果出现无字情况，请再复制obb文件~~

~~### 伏羲X方法（现最高安卓14）：~~
~~#### 首次执行：~~
~~1. 手机安装`JsHook`并保留APK [下载地址](https://jshook.org/)~~
~~2. 手机安装`伏羲X 64` -> 酷安自行搜索下载 或 [此处下载svxp64](https://github.com/Katana-Official/SPatch-Update/releases)~~
~~3. 打开`伏羲X 64` -> 右下角三点 -> 从文件管理器安装 -> 选择`JsHook`的APK安装~~
~~4. 打开`伏羲X 64` -> 右下角三点 -> 应用设置 -> 允许谷歌套件~~
~~5. 打开`伏羲X 64` -> 右下角三点 -> 克隆App -> 右上角三点 -> 显示系统应用 -> 选择`Google Play 商店`、`Google Play 服务`、`Google 服务框架`三个安装，如没有这3个进行6、7步，有而且能安装则从第8步开始~~
~~6. 下载以下3个APK（谷歌三件套），注意查看下载路径~~
~~* [Api 下载地址](https://github.com/xkeyC/x_google_installer/releases/tag/api28)~~
~~* [Google Play services 下载地址](https://github.com/xkeyC/x_google_installer/releases/tag/s212417037)~~
~~* [Google Play Store 下载地址](https://github.com/xkeyC/x_google_installer/releases/tag/st82601710)~~
~~7. 打开`伏羲X 64` -> 右下角三点 -> 从文件管理器安装 -> 按顺序选择安装完以上3个APK~~
~~8. 打开`伏羲X 64` -> 右下角三点 -> 克隆App -> housamo -> 进入游戏出现无字提示后关闭~~
~~9. 外部使用文件管理应用，如`MT管理器`，把~~
```
sdcard/Android/data/jp.co.lifewonders.housamo/files/Data/AuthKey
```
~~复制到~~
```
sdcard/Android/media/io.virtualapp.sandvxposed64/scopedStorage/jp.co.lifewonders.housamo/Android/data/jp.co.lifewonders.housamo/files/Data/AuthKey
```
~~10. 上一步也可以直接把~~
```
sdcard/Android/data/jp.co.lifewonders.housamo
```
~~整个文件夹复制到~~
```
sdcard/Android/media/io.virtualapp.sandvxposed64/scopedStorage/jp.co.lifewonders.housamo/Android/data/jp.co.lifewonders.housamo
```
~~11. 复制obb文件~~
```
sdcard/Android/obb/jp.co.lifewonders.housamo/main.1212.jp.co.lifewonders.housamo.obb
```
~~复制到~~
```
sdcard/Android/media/io.virtualapp.sandvxposed64/scopedStorage/jp.co.lifewonders.housamo/Android/obb/jp.co.lifewonders.housamo/main.1212.jp.co.lifewonders.housamo.obb
```
~~12. 打开`伏羲X 64` -> 打开`JsHook` -> 框架管理 -> 安装`FridaMod`~~
~~13. `JsHook`回首页 -> 仓库 -> 下载脚本~~
~~14. `JsHook`回首页 -> 应用 -> housamo -> 启动Hook服务 -> 启动配置（脚本配置） -> 延时设置1000 -> 选择注入框架`FridaMod` -> 启动下载的脚本~~
~~15. 重启`伏羲X 64` -> 运行游戏~~
~~#### 游戏更新后：~~
~~* 外部更新游戏就行了，伏羲X内部直接链接外部的应用的~~
~~* 如果出现无字情况，请再复制obb文件~~

## root相关（实机）
1. 安装`JsHook` [下载地址](https://jshook.org/)
2. `LSPosed`之类的配置好`JsHook`能在`系统框架`和`housamo`上运行
3. 打开`JsHook` -> 框架管理 -> 安装`FridaMod`
4. `JsHook`回首页 -> 仓库 -> 下载脚本
5. `JsHook`回首页 -> 应用 -> 龍脈R -> 启动Hook服务 -> 启动配置（脚本配置） -> 延时设置100 -> 选择注入框架`FridaMod` -> 启动下载的脚本
6. 运行游戏

## 预览
![image](https://i.imgur.com/33Dyzty.jpg)
