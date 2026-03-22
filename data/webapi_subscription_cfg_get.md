# Get by Name/ID (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Get by Name/ID | [](webapi_subscription_cfg_next.md "Get by Index") [](webapi_trading.md "Trading") |
| --- | --- | --- |
| --- | --- |

Get a subscription configuration by name/ID.
The request enables the obtaining of subscription configurations by a list of IDs or indexes, as well as by name.
Request Format
GET /api/subscription/config/get?index=indices GET /api/subscription/config/get?id=identifiers GET /api/subscription/config/get?name=name POST /api/subscription/config/get?index=indices POST /api/subscription/config/get?id=identifiers POST /api/subscription/config/get?name=name  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/subscription/config/get?name=US%20Mutual%20Funds //--- server response { "retcode" : "0 Done", "answer" : {  "ID" : "132240227905103158", "ParentID" : "132240225640031925", "Type" : "0", "Name" : "US Mutual Funds", "URL" : "https:\/\/www.fundserv.com\/home\/#fundserv", "AgreementURL" : "", "Flags" : "3", "Control" : "0", "Image" : "1006", "ImageURL" : "", "Period" : "3", "PeriodCustom" : "0", "FreePeriod" : "0", "FreePeriodCustom" : "0", "Price" : "0.0000", "PriceCurrency" : "USD", "PriceProfessional" : "0.0000", "PriceCost" : "0.0000", "DependsID" : "0", "Description" : "<p>Provides <a href=\"https:\/\/www.investopedia.com\/terms\/n\/no-loadfund.asp\" target=\"_blank\">no-load mutual funds<\/a><\/p>", "Countries" : ["DZ", "AI", "AR"], "Groups" : ["preliminary"], "Symbols" : [ { "Level" : "2", "Symbols" : "Forex\\\\*", "TickHistory" : "10" }  ], "News" : [ { "Category" : "Fnance", "Language" : "12" } ] } }  
---  
Request Parameters
  * index — subscription configuration index starting with 0. Multiple indices can be specified as separated by commas.
  * id — subscription configuration identifier. Multiple indices can be specified as separated by commas.
  * name — subscription configuration name. Multiple names can be specified as separated by commas.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent group is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — subscription configuration in the JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_subscription_cfg_data_format.md "Data Structure") section.

Note
Only one of the parameters can be specified in a request, i.e. id, index or name. Indication of multiple lists is not allowed.