cmake_minimum_required(VERSION 3.8)

set(APP_NAME "EngineAddon" CACHE STRING "Project Name")
project(${APP_NAME})

set(LIB_NAME ${APP_NAME})
set_property(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT ${LIB_NAME})

enable_language(C ASM)
if(APPLE)
    enable_language(OBJC OBJCXX)
endif()

if(MSVC)
    add_compile_options(
        $<$<CONFIG:>:/MD> 
        $<$<CONFIG:Debug>:/MDd> 
        $<$<CONFIG:Release>:/MD> 
    )
endif()

set(CMAKE_CXX_STANDARD 14)
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
ADD_DEFINITIONS(-DV8_COMPRESS_POINTERS)
# ADD_DEFINITIONS(-DV8_HEAP_SANDBOX)
# ADD_DEFINITIONS(-DV8_PROMISE_INTERNAL_FIELD_COUNT=1)

if(USE_SE_JSC AND APPLE)
    set(USE_SE_V8 OFF)
    set(USE_V8_DEBUGGER OFF)
endif()

if(NOT COCOS_DIR)
    set(COCOS_DIR ${CMAKE_CURRENT_LIST_DIR}/../../)
endif()

include(${COCOS_DIR}/engine/native/CMakeLists.txt)

### output path

set( CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG ${COCOS_DIR}engine/bin/.editor)
set( CMAKE_RUNTIME_OUTPUT_DIRECTORY_RELEASE ${COCOS_DIR}engine/bin/.editor)

### node-js addon 
include_directories(${CMAKE_JS_INC})
file(GLOB SOURCE_FILES  addon.cc 
                        jsb_nativize_module.cpp
	        EditorApplication.cpp
                        NativeWindow.cpp
                        )
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB} cocos_engine)

if(MSVC)
    foreach(item ${WINDOWS_DLLS})
        get_filename_component(filename ${item} NAME)
        get_filename_component(abs ${item} ABSOLUTE)
        add_custom_command(TARGET ${LIB_NAME} POST_BUILD
            COMMAND ${CMAKE_COMMAND} -E copy_if_different ${abs} $<TARGET_FILE_DIR:${LIB_NAME}>/${filename}
        )
    endforeach()
    target_link_options(${LIB_NAME} PRIVATE /SUBSYSTEM:WINDOWS)
endif()