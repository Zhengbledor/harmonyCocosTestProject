#pragma once
#include <node_api.h>

#define GLFW_EXPOSE_NATIVE_WIN32
#include <windows.h>
#include "glad/glad.h"
#include "GLFW/glfw3.h"
#include "GLFW/glfw3native.h"

#define GET_AND_THROW_LAST_ERROR(env)                                    \
  do {                                                                   \
    const napi_extended_error_info *error_info;                          \
    napi_get_last_error_info((env), &error_info);                        \
    bool is_pending;                                                     \
    napi_is_exception_pending((env), &is_pending);                       \
    /* If an exception is already pending, don't rethrow it */           \
    if (!is_pending) {                                                   \
      const char* error_message = error_info->error_message != NULL ?    \
        error_info->error_message :                                      \
        "empty error message";                                           \
      napi_throw_error((env), NULL, error_message);                      \
    }                                                                    \
  } while (0)

#define NAPI_CALL_BASE(env, the_call, ret_val)                           \
  do {                                                                   \
    if ((the_call) != napi_ok) {                                         \
      GET_AND_THROW_LAST_ERROR((env));                                   \
      return ret_val;                                                    \
    }                                                                    \
  } while (0)

#define NAPI_CALL(env, the_call)                                         \
  NAPI_CALL_BASE(env, the_call, NULL)

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

namespace NativeRender{

//class NativeWindow{
//	int _w, _h;
//	int _x, _y;
//    napi_value* _jsObj;
//    napi_env* _env;
//
//public:
//	NativeWindow(napi_env* env, napi_value* jsobj);
//    NativeWindow::~NativeWindow();
//
//    static napi_value Constructor(napi_env env, napi_callback_info info);
//    static void Destructor(napi_env env, void* nativeObject, void* finalize_hint);
//	void SetPos(int x,int y);
//	void SetSize(int w, int h);
//	void Draw();
//};

class NativeWindow {
public:
    NativeWindow(napi_env env);
    static napi_value Constructor(napi_env env, napi_callback_info info);
    static void Destructor(napi_env env, void* nativeObject, void* finalize_hint);

    // export to js
    static napi_value SetPos(napi_env env, napi_callback_info info);
    static napi_value SetSize(napi_env env, napi_callback_info info);
    static napi_value SetParent(napi_env env, napi_callback_info info);
    static napi_value Draw(napi_env env, napi_callback_info info);
    static napi_value Show(napi_env env, napi_callback_info info);
    static napi_value Hide(napi_env env, napi_callback_info info);
    static napi_value AddSimulatorToWindow(napi_env env, napi_callback_info info);

    static NativeWindow* getCppInstance(napi_env env, napi_callback_info *info);

    void UpdateWindow();
    void SetParent();
    void Draw();
    int x;
    int y;
    int w;
    int h;
    GLFWwindow* window;
    HWND parent;

private:
    NativeWindow();
    ~NativeWindow();

    napi_env _env;
    napi_ref _wrapper;
};

}