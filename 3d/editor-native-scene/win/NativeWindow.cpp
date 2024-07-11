#include "NativeWindow.h"
#include "base/Log.h"
//#include "NativizeView.h"
//#include "AppDelegate.h"
#include "cocos/application/ApplicationManager.h"
#include "cocos/core/Root.h"
#include "cocos/platform/BasePlatform.h"
#include "cocos/platform/interfaces/modules/ISystemWindowManager.h"
#include "platform/win32/WindowsPlatform.h"
#include "win32/modules/SystemWindow.h"

bool NativeWindow::isMainWindowUsed = false;

namespace cc {
class View;
};

NativeWindow::NativeWindow(int w, int h, HWND editor)
{
    
    //use default window at first timeno-cache
    if (!isMainWindowUsed) {
        isMainWindowUsed = true;
        _systemWindow = CC_GET_MAIN_SYSTEM_WINDOW();
    } else {
        cc::ISystemWindowInfo info;
        info.title = "";
        info.x = _x;
        info.y = _y;
        info.width = w;
        info.height = h;
        info.flags = cc::ISystemWindow::CC_WINDOW_RESIZABLE | cc::ISystemWindow::CC_WINDOW_HIDDEN;
        cc::ISystemWindowManager* windowMgr = CC_GET_PLATFORM_INTERFACE(cc::ISystemWindowManager);
        _systemWindow = windowMgr->createWindow(info);
        _renderWindow = cc::Root::getInstance()->createRenderWindowFromSystemWindow(_systemWindow);
    }
    _hwnd = (HWND)_systemWindow->getWindowHandle();
    _editor = editor;
    SetWindowLong(_hwnd, GWL_STYLE, WS_CHILD | WS_VISIBLE | WS_DISABLED);
    //auto err = GetLastError();
    SetParent(_hwnd,_editor);
    EnableWindow(_hwnd, false);
    //err = GetLastError();
}

NativeWindow::~NativeWindow() {
}

HWND NativeWindow::getHwnd() {
    return _hwnd;
}

void NativeWindow::setSize(int w, int h) {
    _w = w;
    _h = h;
    auto layout = HWND_TOP;//HWND_BOTTOM
    SetWindowPos(_hwnd, layout, _x, _y, _w, _h, SWP_NOACTIVATE);
    EnableWindow(_hwnd, false);
    cc::events::Resize::broadcast(w, h, _systemWindow->getWindowId());
}

void NativeWindow::setPos(int x, int y)
{
    _x = x;
    _y = y;
    auto layout = HWND_TOP;//HWND_BOTTOM
    SetWindowPos(_hwnd, layout, x, y, _w, _h, SWP_NOACTIVATE);
    EnableWindow(_hwnd, false);
}
