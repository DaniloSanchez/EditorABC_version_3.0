
(function(view) {
    "use strict";
    var
    document = view.document
    , $ = function(id) {
        return document.getElementById(id);
    }
    , session = view.sessionStorage
    , get_blob_builder = function() {
        return view.BlobBuilder || view.WebKitBlobBuilder || view.MozBlobBuilder;
    }
    , text = $("textarea") // ID campo de texto
    , text_options_form = $("text-options") // ID formulario
    , text_filename = $("text-filename") // ID nombre de archivo
    ;
    if (session.text) {
        text.value = session.text;
    }
    if (session.text_filename) {
        text_filename.value = session.text_filename;
    }

    text_options_form.addEventListener("submit", function(event) {
        event.preventDefault();
        var BB = get_blob_builder();
        var bb = new BB;
        bb.append(text.value);
        saveAs(
            bb.getBlob("text/plain;charset=" + document.characterSet)
            , (text_filename.value || text_filename.placeholder) + ".txt"
            );
    }, false);

    view.addEventListener("unload", function() {
        session.text = text.value;
        session.text_filename = text_filename.value;
    }, false);
}(self));
