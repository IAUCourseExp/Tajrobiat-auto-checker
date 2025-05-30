// ==UserScript==
// @name         Auto Select Radio Button (Melat Form Helper)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically selects the right option for Melat survey forms
// @author       @YourUsername
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.querySelectorAll('input[type="radio"][value="7150024486"]').forEach(radio => {
        radio.checked = true;
        const onclickAttr = radio.getAttribute("onclick");
        if (onclickAttr) {
            eval(onclickAttr);
        }
    });
})();
