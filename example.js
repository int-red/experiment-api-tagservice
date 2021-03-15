//add tag and set star on message with id "messageid"
function setTagAndFlag(messageid) {
    return new Promise(resolve => {

        //Returns a Promise fulfilled with:    array of MessageTag
        messenger.messages.listTags()
            .then(response => {
                console.log("messenger.messages.listTags() response:", response);

                //check if "newtag" exists, if not add it to tag list

                function checkTagKey(tag) {
                    return tag.key == this;
                }

                if (!response.find(checkTagKey, "newtag")) {

                    var newMessageTag = {
                        color: "black",
                        key: "newtag", // Distinct tag identifier - use this string when referring to a tag
                        tag: "newtag", //Human-readable tag name
                        ordinal: ""
                    };

					//add new tag to the tag list
                    messenger.tagservice.AddTag(newMessageTag);

                }

                var newTags = ["kontaktdb", "archiv"];

                var newProperties = {
                    flagged: true, //flagged sets the "star"
                    tags: newTags
                };

                try {
                    messenger.messages.update(messageid, newProperties);
                }
                catch (error) {
                    console.error("messenger.messages.update() failed with error:", error);
                    throw error;
                }

                resolve(true);

            })
            .catch(error => {
                console.error("messenger.messages.listTags() failed with error:", error);
                throw error;
            });
    });

}