//Create simple Window
const myWindow = {
    window: {
        id: "mywindow",
        type: "window",
        modal: false,
        title: "Simple Window",
        onClosed: function () {
            console.log("Window was closed");
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
