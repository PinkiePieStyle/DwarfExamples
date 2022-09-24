//Create simple Window
const myWindow = {
    container: {
        id: "mywindow",
        type: "window", // main container - required - "window" or "dialog" see doc->containers
        title: "Simple Window",
        options: { //optional
            static: false, // default: false - Windows/Dialogs are destroyed after closing otherwise use static: true
            modal: false, // default: false
            blocking: false, // default: false
            moveable: true, // default: true
            hasCloseButton: true, // default: true
            canBeMaximized: false, // window default: true - dialog default: false
            canBeMinimized: false, // see comment above
        },
        onClose: function () {
            console.log("Before window/dialog is closed");
        },
        onClosed: function () {
            console.log("Window/Dialog was closed");
        },
        onPositionChanged: function (pos) {
            console.log("New Position: " + pos.x + ", " + pos.y);
        },
        elements: [
            {
                id: "mybutton",
                type: "button",
                text: "List Modules",
                onClicked: function () {
                    console.log("Button was clicked");
                    if (Dwarf.isStarted) {
                        Process.enumerateModules().forEach((module) => {
                            console.log(module.name);
                        });
                    }
                },
            },
        ],
    },
};

if (Dwarf.hasUI) {
    Dwarf.createUI(myWindow);
}
