#include "NativeWindow.h"
#include "base/Log.h"
#include "cocos/bindings/event/EventDispatcher.h"
#include "cocos/platform/interfaces/modules/ISystemWindowManager.h"
#include "cocos/application/ApplicationManager.h"
#include "cocos/core/Root.h"

#import <QuartzCore/CATransaction.h>
#import <QuartzCore/CAMetalLayer.h>

extern "C" {
typedef uint32_t CGSConnectionID;
CGSConnectionID CGSMainConnectionID(void);
};

typedef uint32_t CAContextID;

@interface CAContext : NSObject
//  @property (class) BOOL allowsCGSConnections;
  + (id)contextWithCGSConnection:(CAContextID)contextId options:(NSDictionary*)optionsDict;
  @property(readwrite) CAContextID contextId;
  @property(retain) CALayer *layer;
  @property() BOOL valid;
@end

@interface CALayerHost : CALayer
  @property CAContextID contextId;
@end

bool NativeWindow::isMainWindowUsed = false;

NativeWindow::NativeWindow(int w, int h)
{
    //use default window at first time
    _x = 0;
    _y = 0;
    _w = w;
    _h = h;
    if (!isMainWindowUsed) {
        isMainWindowUsed = true;
        _systemWindow = CC_GET_MAIN_SYSTEM_WINDOW();
    }
    else {
        cc::ISystemWindowInfo info;
        info.title  = "";
        info.x      = _x;
        info.y      = _y;
        info.width  = _w;
        info.height = _h;
        cc::ISystemWindowManager* windowMgr = CC_GET_PLATFORM_INTERFACE(cc::ISystemWindowManager);
        _systemWindow = windowMgr->createWindow(info);
        _renderWindow = cc::Root::getInstance()->createRenderWindowFromSystemWindow(_systemWindow);
    }
    updateContextID();
}

NativeWindow::~NativeWindow()
{
    
}

void NativeWindow::setSize(int w, int h) {
    _w = w;
    _h = h;
    CAMetalLayer *layer = reinterpret_cast<CAMetalLayer*>(_systemWindow->getWindowHandle());
    [CATransaction begin];
    [CATransaction setDisableActions: YES];
    layer.frame = CGRectMake(_x, _y, _w, _h);
    [CATransaction commit];
    [layer setDrawableSize:CGSizeMake(_w, _h)];
    
    cc::events::Resize::broadcast(_w, _h, _systemWindow->getWindowId());
    _systemWindow->setViewSize(_w, _h);
    updateContextID();
}

void NativeWindow::setPos(int x,int y) {
    _x = x;
    _y = y;
    CAMetalLayer *layer = reinterpret_cast<CAMetalLayer*>(_systemWindow->getWindowHandle());
    [CATransaction begin];
    [CATransaction setDisableActions: YES];
    layer.frame = CGRectMake(_x, _y, _w, _h);
    [CATransaction commit];
    [layer setDrawableSize:CGSizeMake(_w, _h)];
}

//
void NativeWindow::updateContextID() {
    CAMetalLayer *layer = reinterpret_cast<CAMetalLayer*>(_systemWindow->getWindowHandle());
    NSDictionary* dict = [[NSDictionary alloc] init];
    CGSConnectionID connection_id = CGSMainConnectionID();
    
    CAContext* remoteContext = [CAContext contextWithCGSConnection:connection_id options:dict];
    [remoteContext retain];
    [remoteContext setLayer:layer];
    contextID = [remoteContext contextId];
//    NSLog(@" NativeWindow::updateContextID  valid:%i", remoteContext.valid);
}

