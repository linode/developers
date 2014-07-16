(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "\n    <strong class=\"small\">by "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.person)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " &middot;\n      published "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.datepublished), {"name":"formatDate","hash":{},"data":data})))
    + "</strong>\n  ";
},"7":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\n    <p class=\"small\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.metatags)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1['og:description'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n  ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"library-search-result\">\n  <h6><a href=\""
    + escapeExpression(((helper = helpers.link || (depth0 && depth0.link)),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></h6>\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.person), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.metatags)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1['og:description']), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</div>\n";
},"useData":true});
})();