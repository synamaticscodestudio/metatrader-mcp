# Get by Index (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Subscriptions ](webapi_subscription_cfg.md "Subscriptions")/ Get by Index | [](webapi_subscription_cfg_total.md "Get Total") [](webapi_subscription_cfg_get.md "Get by Name/ID") |
| --- | --- | --- |
| --- | --- |

Get a subscription configuration by index
Get one or more subscription configurations by index in the list.
Request Format
GET /api/subscription/config/next?index=index&count=number POST /api/subscription/config/next?index=index&count=number  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/subscription/config/next?index=0 //--- server response { "retcode" : "0 Done", "answer" : {  "ID" : "132240227905103158", "ParentID" : "132240225640031925", "Type" : "0", "Name" : "US Mutual Funds", "URL" : "https:\/\/www.fundserv.com\/home\/#fundserv", "AgreementURL" : "", "Flags" : "3", "Control" : "0", "Image" : "1006", "ImageURL" : "", "Period" : "3", "PeriodCustom" : "0", "FreePeriod" : "0", "FreePeriodCustom" : "0", "Price" : "0.0000", "PriceCurrency" : "USD", "PriceProfessional" : "0.0000", "PriceCost" : "0.0000", "DependsID" : "0", "Description" : "<p>Provides <a href=\"https:\/\/www.investopedia.com\/terms\/n\/no-loadfund.asp\" target=\"_blank\">no-load mutual funds<\/a><\/p>", "Countries" : ["DZ", "AI", "AR"], "Groups" : ["preliminary"], "Symbols" : [ { "Level" : "2", "Symbols" : "Forex\\\\*", "TickHistory" : "10" }  ], "News" : [ { "Category" : "Fnance", "Language" : "12" } ] } }  
---  
Request Parameters
  * index — subscription configuration index starting with 0.
  * count — the number of configurations to get. If the parameter is not set or is equal to 1, the query returns one object with a configuration description. If count > 1, the query will return an array of objects. For example, when sending a query with parameters ?index=1&count=3, you will get three configurations, from the second to the fourth one.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned. If an index of a nonexistent group is requested, the response code [13](retcodes_common.md "Common errors") is returned.
  * answer — subscription configuration in the JSON format. The complete description of passed server parameters is available under the ["Data structure"](webapi_subscription_cfg_data_format.md "Data Structure") section.
