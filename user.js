//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 150 - linux edition                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * url: https://github.com/guilhermerek/personal-betterfox                  *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref('content.notify.interval', 100000);

/** GFX ***/
user_pref('gfx.canvas.accelerated.cache-size', 512);
user_pref('gfx.content.skia-font-cache-size', 32);

/** MEMORY CACHE ***/
user_pref('browser.sessionhistory.max_total_viewers', 4);

/** IMAGE CACHE ***/
user_pref('image.mem.decode_bytes_at_a_time', 32768);

/** NETWORK ***/
user_pref('network.http.max-connections', 1800);
user_pref('network.http.max-persistent-connections-per-server', 10);
user_pref('network.http.max-urgent-start-excessive-connections-per-host', 5);
user_pref('network.http.pacing.requests.enabled', false);
user_pref('network.dnsCacheExpiration', 3600);
user_pref('network.ssl_tokens_cache_capacity', 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("privacy.antitracking.isolateContentScriptResources", true);
user_pref("security.csp.reporting.enabled", false);

/** SSL / TLS ***/
user_pref('security.ssl.treat_unsafe_negotiation_as_broken', true);
user_pref('browser.xul.error_pages.expert_bad_cert', true);
user_pref('security.tls.enable_0rtt_data', false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

/** SEARCH / URL BAR ***/
user_pref('browser.urlbar.trimHttps', true);
user_pref('browser.urlbar.untrimOnUserInteraction.featureGate', true);
user_pref('browser.search.separatePrivateDefault.ui.enabled', true);
user_pref('browser.search.suggest.enabled', true);
user_pref('browser.urlbar.quicksuggest.enabled', false);
user_pref('browser.urlbar.groupLabels.enabled', false);
user_pref('browser.formfill.enable', false);
user_pref('network.IDN_show_punycode', true);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS ***/
user_pref('signon.formlessCapture.enabled', true);
user_pref('signon.privateBrowsingCapture.enabled', true);
user_pref('network.auth.subresource-http-auth-allow', 1);
user_pref('editor.truncate_user_pastes', false);

/** EXTENSIONS ***/
user_pref('extensions.enabledScopes', 5);

/** HEADERS / REFERERS ***/
user_pref('network.http.referer.XOriginTrimmingPolicy', 2);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref('security.mixed_content.block_display_content', true);
user_pref('pdfjs.enableScripting', false);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** VARIOUS ***/
user_pref("pdfjs.enableScripting", false);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref('permissions.default.desktop-notification', 0);
user_pref('permissions.default.geo', 2);
user_pref('geo.provider.network.url', 'https://beacondb.net/v1/geolocate');
user_pref('browser.search.update', false);
user_pref('permissions.manager.defaultsUrl', '');
user_pref('extensions.getAddons.cache.enabled', false);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("datareporting.usage.uploadEnabled", false);

/** EXPERIMENTS ***/
user_pref('app.shield.optoutstudies.enabled', false);
user_pref('app.normandy.enabled', false);
user_pref('app.normandy.api_url', '');

/** CRASH REPORTS ***/
user_pref('breakpad.reportURL', '');
user_pref('browser.tabs.crashReporting.sendReport', false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
user_pref('browser.compactmode.show', true);

/** AI ***/
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

/** FULLSCREEN NOTICE ***/
user_pref('full-screen-api.transition-duration.enter', '0 0');
user_pref('full-screen-api.transition-duration.leave', '0 0');
user_pref('full-screen-api.warning.timeout', 0);

/** URL BAR ***/
user_pref('browser.urlbar.unitConversion.enabled', true);
user_pref('browser.urlbar.trending.featureGate', false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** DOWNLOADS ***/
user_pref('browser.download.manager.addToRecentDocs', false);

/** PDF ***/
user_pref('browser.download.open_pdf_attachments_inline', true);

/** TAB BEHAVIOR ***/
user_pref('browser.bookmarks.openInTabClosesMenu', false);
user_pref('browser.menu.showViewImageInfo', true);
user_pref('findbar.highlightAll', true);
user_pref('layout.word_select.eat_space_to_next_word', false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

// PREF: set DoH provider
user_pref('network.trr.uri', 'https://dns.nextdns.io/xxxxx'); // Now using NextDNS

// PREF: enforce DNS-over-HTTPS (DoH)
user_pref('network.trr.mode', 3);

// PREF: restore login manager
//user_pref('signon.rememberSignons', true);

// PREF: disable address and credit card manager
user_pref('extensions.formautofill.addresses.enabled', false);
user_pref('extensions.formautofill.creditCards.enabled', false);

// PREF: require safe SSL negotiation    MAY BREAK SITES
// [ERROR] SSL_ERROR_UNSAFE_NEGOTIATION
user_pref('security.ssl.require_safe_negotiation', true);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref('security.cert_pinning.enforcement_level', 2);

// PREF: show weather on New Tab page
user_pref('browser.newtabpage.activity-stream.showWeather', true);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

// credit: https://github.com/AveYo/fox/blob/cf56d1194f4e5958169f9cf335cd175daa48d349/Natural%20Smooth%20Scrolling%20for%20user.js
// recommended for 120hz+ displays
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref('apz.overscroll.enabled', true); // DEFAULT NON-LINUX
user_pref('general.smoothScroll', true); // DEFAULT
user_pref('general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS', 12);
user_pref('general.smoothScroll.msdPhysics.enabled', true);
user_pref('general.smoothScroll.msdPhysics.motionBeginSpringConstant', 600);
user_pref('general.smoothScroll.msdPhysics.regularSpringConstant', 650);
user_pref('general.smoothScroll.msdPhysics.slowdownMinDeltaMS', 25);
user_pref('general.smoothScroll.msdPhysics.slowdownMinDeltaRatio', '2');
user_pref('general.smoothScroll.msdPhysics.slowdownSpringConstant', 250);
user_pref('general.smoothScroll.currentVelocityWeighting', '1');
user_pref('general.smoothScroll.stopDecelerationWeighting', '1');
user_pref('mousewheel.default.delta_multiplier_y', 300); // 250-400; adjust this number to your liking

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
user_pref("gfx.webrender.all", true); // enables WR + additional features


// PREF: Webrender layer compositor
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1945683
// [2] https://www.reddit.com/r/firefox/comments/1p58qre/firefox_is_getting_ready_to_make_youtube_fast/
// [3] https://www.ghacks.net/2025/11/24/these-two-tweaks-should-improve-firefoxs-performance-on-youtube-significantly/
user_pref("gfx.webrender.layer-compositor", true);
    // If your PC uses an AMD GPU, you might want to make a second change.
    // This one improves CPU usage on AMD systems.
user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true);

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
    //user_pref("gfx.webrender.software.opengl", true); // LINUX

// PREF: GPU-accelerated Canvas2D
// Uses Accelerated Canvas2D for hardware acceleration of Canvas2D.
// This provides a consistent acceleration architecture across all platforms
// by utilizing WebGL instead of relying upon Direct2D.
// [WARNING] May cause issues on some Windows machines using integrated GPUs [2] [3]
// Add to your overrides if you have a dedicated GPU.
// [NOTE] Higher values will use more memory.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1741501
// [2] https://github.com/yokoffing/Betterfox/issues/153
// [3] https://github.com/yokoffing/Betterfox/issues/198
user_pref("gfx.canvas.accelerated", true); // [DEFAULT FF133+]
    //user_pref("gfx.canvas.accelerated.cache-items", 4096); // [default=8192 FF135+]; Chrome=4096
    //user_pref("gfx.canvas.max-size", 32767); // DEFAULT=32767


/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/
