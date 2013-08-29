function Controller() {
    function doButtonClick() {
        Titanium.UI.createAlertDialog({
            cancel: 1,
            buttonNames: [ "Confirm", "Cancel", "Info" ],
            message: "Would you like to delete the file?",
            title: "Delete"
        }).show();
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
    $.__views.button1 = Ti.UI.createButton({
        title: "Button AJR",
        top: "10",
        id: "button1"
    });
    $.__views.index.add($.__views.button1);
    doButtonClick ? $.__views.button1.addEventListener("click", doButtonClick) : __defers["$.__views.button1!click!doButtonClick"] = true;
    $.__views.button2 = Ti.UI.createButton({
        title: "Button AJR",
        top: "30",
        id: "button2"
    });
    $.__views.index.add($.__views.button2);
    doButtonClick ? $.__views.button2.addEventListener("click", doButtonClick) : __defers["$.__views.button2!click!doButtonClick"] = true;
    $.__views.sectionFruit = Ti.UI.createTableViewSection({
        id: "sectionFruit",
        headerTitle: "Fruit"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.sectionFruit);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        title: "Apple",
        id: "__alloyId2"
    });
    $.__views.sectionFruit.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        title: "Bananas",
        id: "__alloyId3"
    });
    $.__views.sectionFruit.add($.__views.__alloyId3);
    $.__views.sectionVeg = Ti.UI.createTableViewSection({
        id: "sectionVeg",
        headerTitle: "Vegetables"
    });
    __alloyId1.push($.__views.sectionVeg);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        title: "Carrots",
        id: "__alloyId4"
    });
    $.__views.sectionVeg.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        title: "Potatoes",
        id: "__alloyId5"
    });
    $.__views.sectionVeg.add($.__views.__alloyId5);
    $.__views.sectionFish = Ti.UI.createTableViewSection({
        id: "sectionFish",
        headerTitle: "Fish"
    });
    __alloyId1.push($.__views.sectionFish);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        title: "Cod",
        id: "__alloyId6"
    });
    $.__views.sectionFish.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        title: "Haddock",
        id: "__alloyId7"
    });
    $.__views.sectionFish.add($.__views.__alloyId7);
    $.__views.table = Ti.UI.createTableView({
        data: __alloyId1,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.button1!click!doButtonClick"] && $.__views.button1.addEventListener("click", doButtonClick);
    __defers["$.__views.button2!click!doButtonClick"] && $.__views.button2.addEventListener("click", doButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;