* palavra chave (blue, transparente)
* hexadecimal (#089)
* funções: rgb, rgba, hsl, hsla

```css
element {
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;

    /* <hex-color> values 0-F */
    color: #090; /* RED GREEN BLUE */
    color: #009900;
    color: #090a;
    color: #009900aa;

    /* <rgb()> values */
    color: rgb(34, 12, 64, 0.6); /* 0-255 */
    color: rgba(34, 12, 64, 0.6);
    color: rgb(34 12 64 / 0.6);
    color: rgba(34 12 12 64 / 0.3);
    color: rgb(34.0 12 64 / 60%);
    color: rgba(34.6 12 64 / 30%);
}