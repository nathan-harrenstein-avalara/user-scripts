// ==UserScript==
// @name         Disable Jira Issue Detail Pane
// @match        https://jira.avalara.com/secure/RapidBoard.jspa*
// ==/UserScript==

(function() {
    $(document).off('click', '#ghx-backlog .js-issue');
    $(document).off('click', '#ghx-pool .js-issue');
    $(document).off('click', '.ghx-swimlane-header');
})();