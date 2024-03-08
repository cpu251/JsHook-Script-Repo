# 名称
龍脈•另一種姿態R
# Version
1.7
# 脚本类型
frida
# 描述
修改战斗相关功能
# 作者
@KUMA

# 龍脈•另一種姿態R Mod
* 修改战斗相关功能
* 当前文档以JsHook 1.1.6版本为例

## 基础功能
* 战斗必定3星，输了会变成胜利
* 插画4无需道具解锁（不用担心错过活动了）
* 画廊全解锁（立绘和点阵图）

## 可选功能
* 战斗开场不动直接胜利，点击上方`龙币`按钮开关
* ~~战斗开场不动直接胜利，在主界面点击`签到奖励查看`按钮开关~~
* 进了战斗想开可以连点4下`暂停`按钮

## PC版相关
[PC版Mod地址](../%E9%BE%8D%E8%84%88%E2%80%A2%E5%8F%A6%E4%B8%80%E7%A8%AE%E5%A7%BF%E6%85%8BR%20PC%E7%89%88)

## 模拟器相关
### 拿`蓝叠5 安卓11版`举例
~~1. 先装好游戏能进入了~~
~~2. 装`Magisk Delta`的`Canary`版 [下载地址](https://huskydg.github.io/magisk-files/)~~
~~3. 按照说明安装Magisk [下载地址](https://huskydg.github.io/magisk-files/docs/faq.html)~~
~~* `Step to step to install Magisk into Bluestacks`~~
~~* `Before start`~~
~~4. 具体是先关闭蓝叠，用`Bluestacks Tweaker`先`Unlock`，等完成，再启动蓝叠，点击`Patch`~~
~~5. 进入`Magisk Delta` -> 给`ROOT权限` -> 安装`Magisk` -> 方式选择`安装到系统分区` -> 重启模拟器 -> `Bluestacks Tweaker`点击`UnPatch`~~
~~6. `Magisk Delta`设置打开`Zygisk`~~
~~7. 安装`JsHook` [下载地址](https://jshook.org/)~~
~~8. 安装`Magisk模块` -> 选择下载`LsposedMod-v1.1.3-1103-zygisk-release.zip` -> 到`Magisk Delta`的`模块`里`从本地安装` -> 选择安装下载的文件，重启模拟器~~
~~9. `JsHook` -> 仓库 -> 下载脚本~~
~~10. `JsHook` -> 应用 -> `龍脈R` -> 启动Hook服务 -> 启动配置（脚本配置） -> 启动下载的脚本~~
~~11. 运行游戏，没有显示任何内容的话，自己随便编个js`global.toast('...')`看能不能显示，能显示再切回之前的脚本~~

### 拿`雷电9`举例，其他模拟器自己尝试
~~1. 先装好游戏能进入了，模拟器开好`ROOT`，设置`System.vmdk 可写入`~~
~~2. 装`Magisk Delta`的`Canary`版 [下载地址](https://huskydg.github.io/magisk-files/)~~
~~3. 进入`Magisk Delta` -> 给`ROOT权限` -> 安装`Magisk` -> 方式选择`安装到系统分区` -> 重启模拟器 -> `Magisk Delta`设置打开`Zygisk`~~
~~4. 安装`JsHook` [下载地址](https://jshook.org/)~~
~~5. 安装`Magisk模块` -> 选择下载`LsposedMod-v1.1.3-1103-zygisk-release.zip` -> 到`Magisk Delta`的`模块`里`从本地安装` -> 选择安装下载的文件，重启模拟器~~
~~6. `JsHook` -> 仓库 -> 下载脚本~~
~~7. `JsHook` -> 应用 -> `龍脈R` -> 启动Hook服务 -> 启动配置（脚本配置） -> 启动下载的脚本~~
~~8. 运行游戏，没有显示任何内容的话，自己随便编个js`global.toast('...')`看能不能显示，能显示再切回之前的脚本~~

## 免root相关（实机）
~~### 黑盒方法（最高安卓12）：~~
~~#### 首次执行：~~
~~1. 手机安装`JsHook` [下载地址](https://jshook.org/)~~
~~2. 手机安装`BlackBox64` [下载地址](https://github.com/FBlackBox/BlackBox/releases)~~
~~3. 打开`BlackBox64` -> 右上角三点 -> 软件设置 -> **开启进程守护（防止闪退）** -> 启动Xposed框架 -> 模块管理 -> 点+ -> 选择`JsHook` -> 勾选`JsHook` -> 关闭`BlackBox64`~~
~~4. 打开`BlackBox64` -> 点+ -> 龍脈R 和 “兔子头” -> “兔子头”登录，点击OPEN -> 进入游戏主界面后关闭~~
~~5. 打开`BlackBox64` -> 打开`JsHook` -> 框架管理 -> 安装`FridaMod`~~
~~6. `JsHook`回首页 -> 仓库 -> 下载脚本~~
~~7. `JsHook`回首页 -> 应用 -> 龍脈R -> 启动Hook服务 -> 启动配置（脚本配置） -> 延时设置100 -> 选择注入框架`FridaMod` -> 启动下载的脚本~~
~~8. 重启`BlackBox64` -> 运行游戏~~
~~#### 游戏更新后：~~
~~* 外部更新游戏就行了，黑盒内部直接链接外部的应用的~~

~~### 伏羲X方法（现最高安卓14）：~~
~~#### 首次执行：~~
~~1. 手机安装`JsHook`并保留APK [下载地址](https://jshook.org/)~~
~~2. 手机安装`伏羲X 64` -> 酷安自行搜索下载 或 [此处下载svxp64](https://github.com/Katana-Official/SPatch-Update/releases)~~
~~3. 打开`伏羲X 64` -> 右下角三点 -> 从文件管理器安装 -> 选择`JsHook`的APK安装~~
~~4. 打开`伏羲X 64` -> 右下角三点 -> 克隆App -> 龍脈R 和 “兔子头” -> “兔子头”登录，点击OPEN -> 进入游戏主界面后关闭~~
~~5. 打开`伏羲X 64` -> 打开`JsHook` -> 框架管理 -> 安装`FridaMod`~~
~~6. `JsHook`回首页 -> 仓库 -> 下载脚本~~
~~7. `JsHook`回首页 -> 应用 -> 龍脈R -> 启动Hook服务 -> 启动配置（脚本配置） -> 延时设置100 -> 选择注入框架`FridaMod` -> 启动下载的脚本~~
~~8. 重启`伏羲X 64` -> 运行游戏~~
~~#### 游戏更新后：~~
~~* 外部更新游戏就行了，伏羲X内部直接链接外部的应用的~~

## root相关（实机）
1. 安装`JsHook` [下载地址](https://jshook.org/)
2. `LSPosed`之类的配置好`JsHook`能在`系统框架`和`龍脈R`上运行
3. 打开`JsHook` -> 框架管理 -> 安装`FridaMod`
4. `JsHook`回首页 -> 仓库 -> 下载脚本
5. `JsHook`回首页 -> 应用 -> 龍脈R -> 启动Hook服务 ~~-> 启动配置（脚本配置） -> 延时设置100~~ -> 选择注入框架`FridaMod` -> 启动下载的脚本
6. 运行游戏

## 预览
![image](https://i.imgur.com/yc49Hcz.jpg)