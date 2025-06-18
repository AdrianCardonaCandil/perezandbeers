import lorem1 from "./lorem1.webp";
import lorem2 from "./lorem2.webp";
import lorem3 from "./lorem3.webp";
import lorem4 from "./lorem4.webp";
import lorem5 from "./lorem5.webp";
import lorem6 from "./lorem6.webp";
import lorem7 from "./lorem7.webp";
import lorem8 from "./lorem8.webp";
import lorem9 from "./lorem9.webp";
import lorem10 from "./lorem10.webp";

const images = [
    lorem1,
    lorem2,
    lorem3,
    lorem4,
    lorem5,
    lorem6,
    lorem7,
    lorem8,
    lorem9,
    lorem10,
].map((path, i) => ({
    path,
    id: (i + 1).toString(),
    alt: [
        "lorem1",
        "lorem2",
        "lorem3",
        "lorem4",
        "lorem5",
        "lorem6",
        "lorem7",
        "lorem8",
        "lorem9",
        "lorem10",
    ][i],
}));

export default images;
