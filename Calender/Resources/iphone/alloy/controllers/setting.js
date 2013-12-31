function Controller() {
    function closeSettingWindow() {
        $.container.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setting";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win3 = Ti.UI.createWindow({
        id: "win3",
        title: "Settings",
        backgroundColor: "white"
    });
    $.__views.__alloyId6 = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FF0000",
        backgroundColor: "NONE",
        backgroundImage: "NONE",
        title: "Done",
        id: "__alloyId6"
    });
    closeSettingWindow ? $.__views.__alloyId6.addEventListener("click", closeSettingWindow) : __defers["$.__views.__alloyId6!click!closeSettingWindow"] = true;
    $.__views.win3.rightNavButton = $.__views.__alloyId6;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.win3.add($.__views.label);
    $.__views.container = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win3,
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId6!click!closeSettingWindow"] && $.__views.__alloyId6.addEventListener("click", closeSettingWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;