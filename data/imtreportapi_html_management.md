# HTML (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ HTML Reports ](imtreportapi_html.md "HTML Reports")/ HTML | [](imtreportapi_html.md "HTML Reports") [](imtreportapi_htmlwrite.md "HtmlWrite") |
| --- | --- | --- |
| --- | --- |

HTML Functions
The following functions for managing HTML code are available:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [HtmlWrite](imtreportapi_htmlwrite.md "HtmlWrite") | Output a formatted string into an HTML page. |
| [HtmlWriteString](imtreportapi_htmlwritestring.md "HtmlWriteString") | Output an unformatted string into an HTML page (faster output). |
| [HtmlWriteSafe](imtreportapi_htmlwritesafe.md "HtmlWriteSafe") | Output a string into HTML with HTML service symbols screening. |
| [HtmlTplLoad](imtreportapi_htmltplload.md "HtmlTplLoad") | Load a template from the submitted line. |
| [HtmlTplLoadFile](imtreportapi_htmltplloadfile.md "HtmlTplLoadFile") | Load a template from a file. |
| [HtmlTplLoadResource](imtreportapi_htmltplloadresource.md "HtmlTplLoadResource") | Load a template from a resource. |
| [HtmlTplNext](imtreportapi_htmltplnext.md "HtmlTplNext") | Get the next macros (predetermined tag) from a template for processing. |
| [HtmlTplProcess](imtreportapi_htmltplprocess.md "HtmlTplProcess") | Set the feature of the processing of all tags inside the current macros (predetermined tag). |

The functions described in this section work only in case of an HTML report generation ([EnTypes::TYPE_HTML](mtreportinfo.htm#entypes)).  
---