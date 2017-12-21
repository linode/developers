(function($) {

    function search(query, searchStore) {
        var result = searchStore.index.search(query);
        var resultList = $('#ds-search-list');
        resultList.empty();
        for (var i = 0; i < result.length; i++) {
            var item = result[i];

            // We could add a threshold with score, but that would not show single results with low score ("Ubuntu" being one example).
            if (i > 30) {
                break;
            }

            var title = searchStore.store[item.ref]
            var url = item.ref
            var searchitem = '<li class="list-group-item"><a href="' + url + '">' + title + '</li>';
            resultList.append(searchitem);
        }
        resultList.show();
    }

    function toggleAndSearch(searchStore, query) {
        $('#ds-search-modal').modal('toggle');
        query = query || $('#ss_keyword').val();
        $('#ds-search').val(query);
        search(query, searchStore);
    }

    function initModal() {
        var options = {
            "backdrop": true,
            "show": false
        }

        var elem = $('#ds-search-modal')

        elem.modal(options);

        elem.on("shown.bs.modal", function() {
            $('#ds-search').focus();
        });
    }

    Search = {

        init: function() {
            $(document).ready(function() {

                initModal();

                var setupSearch = function(json) {
                    var searchStore = {}
                    searchStore.index = lunr.Index.load(json.index);
                    searchStore.store = json.store;

                    if (window.location.pathname == '/docs/search/' && Page.param('q')) {
                        var query = decodeURIComponent(Page.param('q').replace(/\+/g, '%20'));
                        toggleAndSearch(searchStore, query);
                    };

                    $(document).on('keypress', '#ss_keyword', function(e) {
                        if (e.keyCode !== 13) {
                            return
                        }
                        var query = $(this).val();
                        toggleAndSearch(searchStore, query);

                    });

                    $('#ds-search').keyup(function(e) {
                        var query = $(this).val();
                        search(query, searchStore);
                    });

                    $(document).on('click', '#ds-search-btn', function(e) {
                        toggleAndSearch(searchStore);

                    });

                    $(document).on('click', '#ds-search-btn-modal', function(e) {
                        query = $('#ds-search').val();
                        search(query, searchStore);
                    });
                }

                $.getJSON('/docs/build/lunr.json', setupSearch);

            });

        },

    };


    // For now we assume that every page that includes this JS needs search.
    Search.init();


})(jQuery);
