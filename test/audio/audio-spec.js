var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("audio-test", function(testPage) {

    describe("test/audio/audio-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Audio", function() {
            describe("default", function () {
                it("can be created", function() {
                    expect(testPage.test.audio).toBeDefined();
                });
                var audio;
                beforeEach(function() {
                    if (!audio) {
                        audio = testPage.test.audio;
                        //keep default values
                        //defaultChecked = audio.checked;
                    }
                    //restore default values
                    //audio.checked = defaultChecked;
                });
            });
        });
    });
});
