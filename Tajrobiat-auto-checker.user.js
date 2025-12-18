// ==UserScript==
// @name         Auto checker (Amoozeshyar form helper)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically selects "خیلی خوب" in Professors survey forms
// @author       @IAUCourseExp
// @match        *://amoozeshyar.iau.ir/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const TARGET_VALUE = "7150024486";

    function checkAllRadios() {
        const radios = document.querySelectorAll(
            `input[type="radio"][value="${TARGET_VALUE}"]`
        );

        if (radios.length === 0) return false;

        radios.forEach(radio => {
            if (!radio.checked) {
                radio.checked = true;

                const onclickAttr = radio.getAttribute("onclick");
                if (onclickAttr) {
                    eval(onclickAttr);
                }

                radio.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });

        return true;
    }

    const observer = new MutationObserver(() => {
        if (checkAllRadios()) {
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
