(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<div class=\"library-search-result\">\n  <h6><a href=\""
    + escapeExpression(((helper = helpers.link || (depth0 && depth0.link)),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></h6>\n  <strong class=\"small\">by "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.person)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " &middot;\n    published "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.datepublished), {"name":"formatDate","hash":{},"data":data})))
    + "</strong>\n  <p class=\"small\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.metatags)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1['og:description'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n</div>\n";
},"useData":true});
})();