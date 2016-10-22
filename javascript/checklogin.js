if (!!$.cookie('sessionID')) {
    // No cookie do nothing
} else {
    document.write("Cookie found:" + $.cookie('sessionID'));
}