function Controller() {
    function doClick() {
        Alloy.createController("setting").getView().open({
            modal: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.win1 = Ti.UI.createWindow({
        title: "Calenders",
        id: "win1",
        backgroundColor: "white"
    });
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.win1.add($.__views.label);
    var __alloyId2 = [];
    $.__views.todayBtn = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FF0000",
        backgroundColor: "NONE",
        backgroundImage: "NONE",
        id: "todayBtn",
        title: "Today"
    });
    __alloyId2.push($.__views.todayBtn);
    $.__views.__alloyId3 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.calenderBtn = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FF0000",
        backgroundColor: "NONE",
        backgroundImage: "NONE",
        id: "calenderBtn",
        title: "Calenders"
    });
    __alloyId2.push($.__views.calenderBtn);
    $.__views.__alloyId4 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.inboxBtn = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#FF0000",
        backgroundColor: "NONE",
        backgroundImage: "NONE",
        id: "inboxBtn",
        title: "Inbox"
    });
    __alloyId2.push($.__views.inboxBtn);
    doClick ? $.__views.inboxBtn.addEventListener("click", doClick) : __defers["$.__views.inboxBtn!click!doClick"] = true;
    $.__views.__alloyId0 = Ti.UI.iOS.createToolbar({
        items: __alloyId2,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId0"
    });
    $.__views.win1.add($.__views.__alloyId0);
    $.__views.container = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.win1,
        id: "container"
    });
    $.__views.index.add($.__views.container);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.container.open();
    __defers["$.__views.inboxBtn!click!doClick"] && $.__views.inboxBtn.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;