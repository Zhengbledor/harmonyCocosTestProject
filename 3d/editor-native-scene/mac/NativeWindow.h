#pragma once
#include <stdint.h>
#include "cocos/platform/interfaces/modules/ISystemWindow.h"
#include "cocos/scene/RenderWindow.h"

class NativeWindow {
public:
	NativeWindow(int w, int h);
	~NativeWindow();

    cc::ISystemWindow *_systemWindow{nullptr};
    cc::scene::RenderWindow *_renderWindow{nullptr};
	static bool isMainWindowUsed;
    uint32_t contextID;
    void setSize(int w,int h);
    void setPos(int x,int y);
    void updateContextID();
private:
    int _x,_y,_w,_h;
};

