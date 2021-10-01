import debug from "debug";

const log = debug("streamelements");

export function listenEvents() {
  let eventsLimit = 5,
    userLocale = "en-US",
    includeFollowers = true,
    includeRedemptions = true,
    includeHosts = true,
    minHost = 0,
    includeRaids = true,
    minRaid = 0,
    includeSubs = true,
    includeTips = true,
    minTip = 0,
    includeCheers = true,
    direction = "top",
    textOrder = "nameFirst",
    minCheer = 0,
    fadeoutTime = 0;

  let userCurrency,
    totalEvents = 0;

  window.addEventListener("onEventReceived", function (obj) {
    log("onEventReceived %O", { obj });

    if (!obj.detail.event) {
      return;
    }

    if (typeof obj.detail.event.itemId !== "undefined") {
      obj.detail.listener = "redemption-latest";
    }

    const listener = obj.detail.listener.split("-")[0];
    const event = obj.detail.event;
  });

  window.addEventListener("onWidgetLoad", function (obj) {
    log("onWidgetLoad %O", { obj });

    let recents = obj.detail.recents;

    recents.sort(function (a, b) {
      return Date.parse(a.createdAt) - Date.parse(b.createdAt);
    });

    userCurrency = obj.detail.currency;

    const fieldData = obj.detail.fieldData;

    eventsLimit = fieldData.eventsLimit;
    includeFollowers = fieldData.includeFollowers === "yes";
    includeRedemptions = fieldData.includeRedemptions === "yes";
    includeHosts = fieldData.includeHosts === "yes";
    minHost = fieldData.minHost;
    includeRaids = fieldData.includeRaids === "yes";
    minRaid = fieldData.minRaid;
    includeSubs = fieldData.includeSubs === "yes";
    includeTips = fieldData.includeTips === "yes";
    minTip = fieldData.minTip;
    includeCheers = fieldData.includeCheers === "yes";
    minCheer = fieldData.minCheer;
    direction = fieldData.direction;
    userLocale = fieldData.locale;
    textOrder = fieldData.textOrder;
    fadeoutTime = fieldData.fadeoutTime;
  });
}
