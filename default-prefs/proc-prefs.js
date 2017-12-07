pref("layers.composer2d.enabled", false);
pref("layers.compositor-lru-size", 1);
pref("dom.ipc.reuse_parent_app", true);
pref("ui.touch.radius.enabled", false);
pref("ui.mouse.radius.enabled", false);
pref("dom.tv.enabled", false);
pref("dom.vr.cardboard.enabled", false);
pref("dom.gamepad.enabled", false);
pref("browser.chrome.image_icons.max_size", 0);
pref("toolkit.scrollbox.smoothScroll", false);
pref("nglayout.enable_drag_images", false);
pref("middlemouse.openNewWindow", false);
pref("gestures.enable_single_finger_input", false);
pref("ui.mouse.radius.inputSource.touchOnly", false);
pref("dom.w3c_touch_events.enabled", 0);

// disable debug of mozSettings
pref("dom.mozSettings.SettingsDB.debug.enabled", false);
pref("dom.mozSettings.SettingsManager.debug.enabled", false);
pref("dom.mozSettings.SettingsRequestManager.debug.enabled", false);
pref("dom.mozSettings.SettingsService.debug.enabled", false);

// Disable mozPay
pref("dom.mozPay.enabled", false);

// Disable b2g orientation
pref("b2g.orientation.animate", false);

/* The following preferences have been adjusted for 256MB device, the default
 * values are in b2g/app/b2g.js, you can configure them by modify following
 * preferences and it will overwrite the default values in b2g.js */

// pref("browser.cache.memory.capacity", 512); //kilobytes
// pref("image.cache.size", 524288); //bytes
// pref("media.cache_size", 2048);  //2MB media cache

// set maximum video buffer size to 20MB(20*1024*1024)
// pref("media.mediasource.eviction_threshold.video", 20971520); //byte
// set maximum Audio buffer size to 10MB(10*1024*1024)
// pref("media.mediasource.eviction_threshold.audio", 10485760); //byte

// pref("image.mem.surfacecache.max_size_kb", 8192);  // 8MB
// pref("image.mem.surfacecache.size_factor", 32);  // 1/32 of main memory

// pref("gonk.notifyHardLowMemUnderKB", 7168); //kilobytes
// pref("gonk.notifySoftLowMemUnderKB", 14336); //kilobytes

