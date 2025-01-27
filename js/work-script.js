// Define configurations for each interactive element
const elementsConfig = {
    vision: {
        pic: document.getElementById("vision-drawn"),
        div: document.getElementById("vision-frame"),
        txt: document.getElementById("vision-txt"),
        hoverImg: "../materials/vision-drawn2.png",
        defaultImg: "../materials/vision-drawn.png",
        cursor: "url('/materials/eye.cur'), auto",
        clickAction: () => window.location.href = "../projects/vision.html",
    },
    cat: {
        pic: document.getElementById("cat-drawn"),
        div: document.getElementById("cat-frame"),
        txt: document.getElementById("cat-txt"),
        hoverImg: "../materials/cat-drawn2.png",
        defaultImg: "../materials/cat-drawn.png",
        cursor: "grab",
        clickAction: () => window.location.href = "../projects/robotCat.html",
    },
    hero: {
        pic: document.getElementById("hero-drawn"),
        div: document.getElementById("hero-frame"),
        txt: document.getElementById("hero-txt"),
        hoverImg: "../materials/superwoman-drawn.png",
        defaultImg: "../materials/superman-drawn.png",
        cursor: "zoom-in",
    },
    ghost: {
        pic: document.getElementById("ghost-drawn"),
        div: document.getElementById("ghost-frame"),
        txt: document.getElementById("ghost-txt"),
        hoverAction: (pic) => { pic.style.display = "none"; },
        resetAction: (pic) => { pic.style.display = "block"; },
    },
};

// Reusable functions
const addHoverEffect = ({ pic, div, txt, hoverImg, defaultImg, cursor, hoverAction, resetAction }) => {
    const elements = [pic, txt, div];

    elements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            if (hoverAction) {
                hoverAction(pic);
            } else {
                pic.src = hoverImg;
                pic.style.cursor = cursor;
            }
        });
    });

    div.addEventListener('mouseout', () => {
        if (resetAction) {
            resetAction(pic);
        } else {
            pic.src = defaultImg;
            pic.style.cursor = "auto";
        }
    });
};

const addClickEffect = ({ txt,div, clickAction }) => {
    if (clickAction) {
        txt.addEventListener('click',clickAction);
        div.addEventListener('click', clickAction);
    }
};

// Apply effects for each element
Object.values(elementsConfig).forEach((config) => {
    addHoverEffect(config);
    addClickEffect(config);
});
