In the Thunderbird legacy API it was possible to add tags through the tagservice:
 Components.classes["@mozilla.org/messenger/tagservice;1"].getService(Components.interfaces.nsIMsgTagService);

This Experiment API adds that functionality again.

see https://thunderbird-webextensions.readthedocs.io/en/78/how-to/experiments.html#adding-an-experiment-to-your-extension