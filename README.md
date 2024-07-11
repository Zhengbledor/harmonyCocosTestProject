# harmonyCocosTestProject

本项目为鸿蒙测试Cocos性能专用

内部包含大文件，git clone后用git lfs pull命令拉取大文件

##### 游戏内容

1. 生成100个小球在同一个点，同时往水平往右做运动，每个小球每帧做100次碰撞检测和位移（模拟计算）
2. 同时还有一个按钮，点击后做1千万次的for循环计算，同时日志会输出耗时。

##### 项目结构

/3d：引入的CocosEngine相关依赖，源码为CocosEngine 3.8.2版本

/HarmonyOSTest_Brunozheng：项目Cocos JS源码包含上述游戏内容

/HarmonyOSTest_Brunozheng/native/engine/openharmony 通过CocosCreator导出的项目，由于3.8.2不支持最新beta1版本，所以做了一些适配升级

##### 如何运行鸿蒙

DevEco-Studio打开HarmonOSTest_Brunozheng/native/engine/openharmony文件夹

##### 如何修改游戏代码

游戏代码已经被打包成了js文件，主要逻辑就一个Cocos组件 HarmonyTestComponent。

在鸿蒙项目里全局搜harmonyTestComponent，可以找到一个main/index.js。

直接修改里面逻辑然后重跑即可。



对应的源代码为仓库根目录下/HarmonyOSTest_Brunozheng/asstes/HarmonyOSTest，修改这个并不会直接作用到鸿蒙app里，因为该仓库没直接依赖CocosCreator，需要重新打包才行，这一步需要直接参考CocosCreator3.8.2打OpenHarmony包的流程。

##### 一些注意事项

* 鸿蒙项目内/entry/build-profile.json5中 buildOption/externalNativeOptions/arguments中-DRES_DIR和-DCOMMON_DIR需要对应到/HarmonyOSTest_Brunozheng里的build/openharmony和native/engine/common

* /HarmonyOSTest_Brunozheng/build/openharmony/proj/cfg.cmake里的COCOS_X_PATH也需要对应到根目录下/3d/engine/native上

  由于需要上传git仓库，所以暂时使用了相对路径，可能会出现路径错误