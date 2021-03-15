//In the legacy API it was possible to add tags through the tagservice:
//Components.classes["@mozilla.org/messenger/tagservice;1"].getService(Components.interfaces.nsIMsgTagService);
//Experiment API to add that functionality again

//https://thunderbird-webextensions.readthedocs.io/en/78/how-to/experiments.html#extension-manifest

var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var { MailUtils } = Components.utils.import("resource:///modules/MailUtils.jsm");


var tagservice = class extends ExtensionCommon.ExtensionAPI {
    getAPI(context) {
        return {
            tagservice: {
                AddTag: function (tag) {

                    var tagService = Components.classes["@mozilla.org/messenger/tagservice;1"].getService(Components.interfaces.nsIMsgTagService);

                    tagService.addTagForKey(tag.key, tag.tag, tag.color, tag.ordinal);

                },
            }
        }
    }
};


