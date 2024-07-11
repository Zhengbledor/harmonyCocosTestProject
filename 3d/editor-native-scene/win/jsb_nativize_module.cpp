#include "NativeWindow.h"
#include "SeApi.h"
#include "cocos/bindings/manual/jsb_conversions.h"

se::Class* __jsb_NativeWindow_class = nullptr; //NOLINT(readability-identifier-naming, bugprone-reserved-identifier)

static bool NativeWindow_finalize(se::State& s) { //NOLINT(readability-identifier-naming, google-runtime-references)
    auto* request = static_cast<NativeWindow*>(s.nativeThisObject());
    SE_LOGD("NativeWindow, %p ... \n", request);

    return true;
}
SE_BIND_FINALIZE_FUNC(NativeWindow_finalize)

static bool NativeWindow_constructor(se::State& s) {
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    int w = 0;
    int h = 0;
    Uint8 *hwnd;
    ok &= sevalue_to_native(args[0], &w, s.thisObject());
    ok &= sevalue_to_native(args[1], &h, s.thisObject());
    ok &= sevalue_to_native(args[2], &hwnd, s.thisObject());
    HWND* editor = reinterpret_cast<HWND*>(hwnd);
    auto* window = new NativeWindow(w,h, *editor);
    s.thisObject()->setPrivateData(window);

    se::Value thiz(s.thisObject());

    return true;
}
SE_BIND_CTOR(NativeWindow_constructor, __jsb_NativeWindow_class, NativeWindow_finalize)

static bool NativeWindow_getHwnd(se::State& s) { //NOLINT(readability-identifier-naming, google-runtime-references)
    auto* window = static_cast<NativeWindow*>(s.nativeThisObject());
    s.rval().setInt32(reinterpret_cast<intptr_t>(window->getHwnd()));
    return true;
}
SE_BIND_PROP_GET(NativeWindow_getHwnd)

static bool NativeWindow_getRenderWindow(se::State& s) { //NOLINT(readability-identifier-naming, google-runtime-references)
    auto* window = static_cast<NativeWindow*>(s.nativeThisObject());
    if (window->_renderWindow) {
        auto result = window->_renderWindow;
        // %typemap(out) SWIGTYPE*
        nativevalue_to_se(result, s.rval(), s.thisObject() /*ctx*/);
        SE_HOLD_RETURN_VALUE(result, s.thisObject(), s.rval());
    }
    return true;
}
SE_BIND_PROP_GET(NativeWindow_getRenderWindow)

static bool NativeWindow_setSize(se::State& s) {
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    int w = 0;
    int h = 0;
    ok &= sevalue_to_native(args[0], &w, s.thisObject());
    ok &= sevalue_to_native(args[1], &h, s.thisObject());
    auto* window = static_cast<NativeWindow*>(s.nativeThisObject());
    window->setSize(w, h);
    return true;
}
SE_BIND_FUNC(NativeWindow_setSize)

static bool NativeWindow_setPos(se::State& s) {
    CC_UNUSED bool ok = true;
    const auto& args = s.args();
    int x = 0;
    int y = 0;
    ok &= sevalue_to_native(args[0], &x, s.thisObject());
    ok &= sevalue_to_native(args[1], &y, s.thisObject());
    auto* window = static_cast<NativeWindow*>(s.nativeThisObject());
    window->setPos(x, y);
    return true;
}
SE_BIND_FUNC(NativeWindow_setPos)

bool jsb_register_nativize(se::Object* global) { //NOLINT

    se::Class* cls = se::Class::create("NativeWindow", global, nullptr, _SE(NativeWindow_constructor));
    cls->defineFinalizeFunction(_SE(NativeWindow_finalize));

    //cls->defineFunction("open", _SE(XMLHttpRequest_open));

    cls->defineProperty("handler", _SE(NativeWindow_getHwnd), nullptr);
    cls->defineProperty("renderWindow", _SE(NativeWindow_getRenderWindow), nullptr);
    cls->defineFunction("setPos", _SE(NativeWindow_setPos));
    cls->defineFunction("setSize", _SE(NativeWindow_setSize));

    cls->install();

    JSBClassType::registerClass<NativeWindow>(cls);

    __jsb_NativeWindow_class = cls;

    se::ScriptEngine::getInstance()->clearException();

    return true;
}