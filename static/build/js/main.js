(function($) {

    Page = {
        isMobile: function() {
            return $(window).width() <= 768;
        },
        param: function(sVar) {
            return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" +
                encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
        },
        Toggle: {
            init: function(element) {
                var $element = $(element);
                var $child = $($element.data("target"));

                if ($child.hasClass("in")) {
                    $element.find(".toggle-open").show();
                    $element.find(".toggle-closed").hide();
                } else {
                    $element.find(".toggle-closed").show();
                    $element.find(".toggle-open").hide();
                }
            },

            update: function(element) {
                var $element = $(element);
                if ($element.find(".toggle-closed").is(":visible")) {
                    $element.find(".toggle-open").show();
                    $element.find(".toggle-closed").hide();
                } else {
                    $element.find(".toggle-closed").show();
                    $element.find(".toggle-open").hide();
                }
            }
        }
    };

    function search(query, searchStore) {
        var result = searchStore.index.search(query);
        var resultList = $('#ds-search-list');
        resultList.empty();
        for (var i = 0; i < result.length; i++) {
            var item = result[i];
            if (item.score < 0.4) {
                break;
            }

            // TODO(bep) store and lookup the titles ...
            var title = searchStore.store[item.ref]
            var url = item.ref
            var searchitem = '<li class="list-group-item"><a href="' + url + '">' + title + '</a><span class="badge">' + item.score.toFixed(2) + '</span></li>';
            resultList.append(searchitem);
        }
        resultList.show();
    }

    Search = {

        init: function() {

            $(document).ready(function() {

                var setupSearch = function(json) {
                    var searchStore = {}
                    searchStore.index = lunr.Index.load(json.index);
                    searchStore.store = json.store
                    $(document).on('keypress', '#ss_keyword', function(e) {
                        if (e.keyCode !== 13) {
                            return
                        }
                        $('#ds-search-modal').modal('toggle');
                        var query = $(this).val()
                        $('#ds-search').val(query);
                        search(query, searchStore);

                    });

                    $(document).on('keypress', '#ds-search', function(e) {
                        if (e.keyCode !== 13) {
                            return
                        }
                        var query = $(this).val();

                        search(query, searchStore);

                    });
                }

                $.getJSON('/docs/lunr.json', setupSearch);



            });

        },

    };

    Handlebars.registerHelper('formatDate', function(object) {
        var date = new Date(object),
            months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

        return months[date.getMonth()] + ' ' + (date.getDay() + 1) + ', ' + date.getFullYear();
    });

    // toggle
    $(".toggle").each(function(i, element) {
        Page.Toggle.init(element);
    });
    $(".toggle").click(function(event) {
        Page.Toggle.update($(event.target).parent()[0]);
    });

    Search.init();

    if (Page.param('format') === 'app') {
        $('header').hide();
        $('.breadcrumb-row').hide();
        $('.first-section').addClass('library-section-app');
        $('footer').hide();
        $("[href^='/docs']").each(function() {
            var u;
            if (this.href.match(/format=app/)) return;
            u = new URL(this.href);
            u.search = u.search + (u.search.match(/^\?/) ? '&' : '?') + 'format=app';
            this.href = u.toString();
        });
    }

    TocScroll = {
        init: function() {
            var tocElemID = '#doc-sidebar';
            var toc = $(tocElemID);

            var footer = $('footer');
            var bottom = Math.round($(document).height() - footer.offset().top) + 80;

            toc.affix({
                offset: {
                    top: toc.offset().top,
                    bottom: bottom
                }
            });


            // Workaround for https://github.com/twbs/bootstrap/issues/16045
            toc.on("affixed.bs.affix", function() {
                var style = $(this).attr("style");
                style = style.replace("position: relative;", "");
                $(this).attr("style", style)
            });


            var resizeFn = function() {
                toc.css('width', $('#doc-sidebar-container').width());
            };

            resizeFn();
            $(window).resize(resizeFn);

            /* activate scrollspy menu */
            var $body = $(document.body);
            var navHeight = toc.outerHeight(true) + 10;

            $body.scrollspy({
                target: tocElemID,
                offset: navHeight
            });

            /*  scrollspy Table of contents, adapted from https://www.bootply.com/100983 
                license: MIT
                author: bootply.com
             */
            /* smooth scrolling sections */
            $('a[href*=\\#]:not([href=\\#])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 50
                        }, 1000);
                        return false;
                    }
                }
            });
        }

    }

})(jQuery);