#pragma once

#include "cocos/platform/BasePlatform.h"
#include "cocos/bindings/jswrapper/SeApi.h"
#include "jsb_nativize_module.h"
#include "napiUtils.h"

extern int cocos_main(int argc, const char** argv);

int32_t EditorScreenWidth;
int32_t EditorScreenHeight;

namespace Editor {

	bool isPreviewProcess = false;
	napi_value initEngine(napi_env env, napi_callback_info info) {
		cc::BasePlatform* platform = cc::BasePlatform::getPlatform();
		if (platform->init()) {
			CC_LOG_FATAL("Platform initialization failed");
		}
		napi_status status;
		size_t argc = 2;
		napi_value argv[2];
		status = napi_get_cb_info(env, info, &argc, argv, NULL, NULL);
		if (status != napi_ok) {
			napi_throw_type_error(env,"1", "initEngine wrong arguments");
		}

		status = napi_get_value_int32(env, argv[0], &EditorScreenWidth);
		if (status != napi_ok) {
			napi_throw_type_error(env, "1", "initEngine wrong arguments");
		}
		status = napi_get_value_int32(env, argv[1], &EditorScreenHeight);
		if (status != napi_ok) {
			napi_throw_type_error(env, "1", "initEngine wrong arguments");
		}
		cocos_main(0, nullptr);
		se::ScriptEngine* se = se::ScriptEngine::getInstance();
		jsb_register_nativize(se->getGlobalObject());
		return NULL;

	}

	napi_value tick(napi_env env, napi_callback_info info) {
		cc::BasePlatform* platform = cc::BasePlatform::getPlatform();

		if (platform->loop()) {
			CC_LOG_FATAL("Platform initialization failed");
		}
		return NULL;
	}

	napi_value Init(napi_env env, napi_value exports) {

		napi_property_descriptor properties[] = {
			DECLARE_NAPI_METHOD("initEngine",initEngine),
			DECLARE_NAPI_METHOD("tick",tick),
		};

		napi_define_properties(env, exports, 2, properties);
		return exports;
	}
	NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)

}
