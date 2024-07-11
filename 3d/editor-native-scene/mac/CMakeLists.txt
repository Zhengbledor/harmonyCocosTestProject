cmake_minimum_required(VERSION 3.8)

set(APP_NAME "EngineAddon" CACHE STRING "Project Name")
project(${APP_NAME})

enable_language(C ASM)
if(APPLE)
    enable_language(OBJC OBJCXX)
    set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")
endif()

set(CMAKE_CXX_STANDARD 14)
set(TARGET_OSX_VERSION "10.14" CACHE STRING "Target MacOSX version" FORCE)
option(CC_EDITOR        "build for editor"                  ON)
option(USE_SE_V8        "USE V8 JavaScript Engine"          ON)
option(USE_V8_DEBUGGER  "Enable Chrome Remote inspector"    OFF)
option(USE_SOCKET       "Enable WebSocket & SocketIO"       ON)
option(USE_AUDIO        "Enable Audio"                      ON)     #Enable AudioEngine
option(USE_EDIT_BOX     "Enable EditBox"                    ON)
option(USE_SE_JSC       "USE JavaScriptCore on MacOSX/iOS"  OFF)
option(USE_VIDEO        "Enable VideoPlayer Component"      ON)
option(USE_WEBVIEW      "Enable WebView Component"          OFF)
option(USE_MIDDLEWARE   "Enable Middleware"                 ON)
option(USE_DRAGONBONES  "Enable Dragonbones"                ON)
option(USE_SPINE        "Enable Spine"                      ON)
option(USE_PHYSICS_PHYSX "Enable PHYSX"                     ON)

if(NOT COCOS_DIR)
    set(COCOS_DIR ${CMAKE_CURRENT_LIST_DIR}/../../)
endif()

include(${COCOS_DIR}/engine/native/CMakeLists.txt)

## electron require this
ADD_DEFINITIONS(-DV8_COMPRESS_POINTERS)
##ADD_DEFINITIONS(-DV8_ENABLE_CHECKS)

set( CMAKE_LIBRARY_OUTPUT_DIRECTORY_DEBUG ${COCOS_DIR}/engine/bin/.editor)
set( CMAKE_LIBRARY_OUTPUT_DIRECTORY_RELEASE ${COCOS_DIR}/engine/bin/.editor)

### node-js addon 
include_directories(${CMAKE_JS_INC})
file(GLOB SOURCE_FILES  addon.mm 
                        jsb_nativize_module.cpp
	        EditorApplication.mm
                        NativeWindow.mm
                        )
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} cocos_engine)

set_target_properties(${LIB_NAME} PROPERTIES MACOSX_BUNDLE 1)
set(CMAKE_OSX_DEPLOYMENT_TARGET ${TARGET_OSX_VERSION})
set(MACOSX_BUNDLE_GUI_IDENTIFIER org.cocos2dx.editornative.mac)
set_target_properties(${LIB_NAME} PROPERTIES MACOSX_BUNDLE_INFO_PLIST "${CMAKE_CURRENT_LIST_DIR}/Info.plist")
set_target_properties(${LIB_NAME} PROPERTIES XCODE_ATTRIBUTE_ASSETCATALOG_COMPILER_APPICON_NAME "AppIcon")

