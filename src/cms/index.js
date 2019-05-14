import CMS from "netlify-cms-app";
import {
  InlineSelectControl,
  InlineSelectPreview
} from "netlify-cms-widget-inline-select";

CMS.registerWidget("inline-select", InlineSelectControl, InlineSelectPreview);

CMS.init();
