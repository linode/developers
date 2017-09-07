var app = app || {};

(function() {

  // Global event handler
  app.events = _.extend({}, Backbone.Events);

  // Models
  app.SearchResult = Backbone.Model.extend();


  // Collections
  var SearchResults = Backbone.Collection.extend({
    model: app.SearchResult,
    url: 'https://www.googleapis.com/customsearch/v1',

    fetch: function(options) {
      var collection = this;

      options = _.extend(options || {}, {
        type: 'GET',
        dataType: 'jsonp',
        url: this.url,
        queue: true,
        success: function(data) {
          // if we didn't get anything back :(
          if (_.isUndefined(data.items) && !this.length) {
            app.events.trigger('empty');
          } else {
            // add each item
            _.each(data.items, function(item) {
              collection.add(item);
            });

            // remove loading state
            $('.remove-after-search').remove();

            // page buttons
            if (Search.getPageNumber() > 1) {
              Search.showPrevButton();
            }
            if (data.queries.nextPage) {
              Search.showNextButton();
            } else {
              Search.hideNextButton();
            }

            // stop if no next page
            if (!data.queries.nextPage) { app.events.trigger('stop'); }
          }
        }
      });

      $.ajaxq('search', options);
    }
  });

  // A global collection of search results
  app.searchResults = new SearchResults();


  // Views
  // A view for rendering a single search result
  app.SearchResultView = Backbone.View.extend({
    tagName: 'div',
    attributes: { class: 'library-search-result' },
    template: Handlebars.templates.search,

    render: function() {
      this.$el.html( this.template(this.model.toJSON()) );
      return this;
    }
  });

  // Main view
  app.SearchPageView = Backbone.View.extend({
    el: '#search-results',

    initialize: function() {
      this.status = $('#library-search-status');
      this.stop = false;

      this.listenTo(app.searchResults, 'add', this.addResult);
      app.events.bind('empty', this.noResults, this);
      app.events.bind('stop', function() { this.stop = true; }, this);

      var _this = this;
      _(Search.numReps).times(function(i) {
        if (!_this.stop) {
          app.searchResults.fetch({
            data: {
              q: Search.getQuery() + ' more:pagemap:techarticle',
              num: Search.resultsPerPage,
              start: ((( (Search.getPageNumber() - 1) * Search.numReps + i ) * Search.resultsPerPage) + 1),
              key: 'AIzaSyCMGfdDaSfjqv5zYoS0mTJnOT3e9MURWkU',
              cx: '006150713320016956361:5rcen_5ss4c'
            }
          });
        }
      });
    },

    addResult: function(result) {
      if (!this.stop) {
        var view = new app.SearchResultView({ model: result });
        this.$el.append(view.render().el);
      }
    },

    noResults: function() {
      _gaq.push(['_trackEvent', 'Search Results', 'No Results', window.location.search.substr(1).replace('q=', '')]);
      this.status.html('<p>No results found.</p>');
    }
  });

})();

