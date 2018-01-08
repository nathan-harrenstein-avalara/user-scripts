// ==UserScript==
// @name         Disable Jira Issue Detail Pane (Open in New Tab)
// @match        https://jira.avalara.com/secure/RapidBoard.jspa*
// ==/UserScript==

(function() {
    $(document).off('click', '#ghx-backlog .js-issue');
    $(document).off('click', '#ghx-pool .js-issue');
    $(document).off('click', '.ghx-swimlane-header');
    $(document).on('click', '.js-issue, .ghx-swimlane-header', (e) => {
        window.open(e.target.href);
        e.preventDefault();
    });
})();