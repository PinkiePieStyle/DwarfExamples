// Simple Dialog
const myDlgID = "mydialog";

const simpleDlg = {
    dialog: {
        id: myDlgID,
        title: "Dialog Example",
        onClosed: function () {
            console.log("Dialog was closed");
        },
        elements: [
            {
                type: "button",
                title: "Shake",
                onClicked: function () {
                    Dwarf.getUIManager().animateWindow(myDlgID, "shake", 1000);
                },
            },
        ],
    },
};

if (Dwarf.hasUI) {
    Dwarf.createUI(simpleDlg);
}
