#pragma once
#include "sdl2/SDL.h"
#include "windows.h"
#include "sdl2/SDL_main.h"
#include "sdl2/SDL_syswm.h"
#include "cocos/platform/interfaces/modules/ISystemWindow.h"
#include "cocos/scene/RenderWindow.h"

class NativeWindow {
public:
	NativeWindow(int w, int h, HWND editor);
	~NativeWindow();

	HWND getHwnd();
	cc::ISystemWindow* _systemWindow{ nullptr };
	cc::scene::RenderWindow* _renderWindow{ nullptr };
	static bool isMainWindowUsed;
	void setSize(int w, int h);
	void setPos(int x, int y);

private:
	//SDL_Window* _window;
	HWND _hwnd;
	HWND _editor;
	int _x=0;
	int _y=0;
	int _w;
	int _h;

};