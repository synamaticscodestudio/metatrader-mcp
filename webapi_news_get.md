# Get News Without Body (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ News ](webapi_news.md "News")/ Get News Without Body | [](webapi_news_send.md "Send News") [](webapi_news_body_request.md "Get News With Body") |
| --- | --- | --- |
| --- | --- |

Get a short news description
The request allows receiving a short news description, without its body.
Request Format
GET /api/news/get?id=news_identifier&total=number_of_news  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { news description }, { news description }, ... ] }  
---  
Example
//--- request to the server POST /api/news/get?total=2 //--- server response { "retcode" : "0 Done", "answer": [ { "ID" : "496341", "Size" : "0", "Time" : "1565797554", "Language" : "9", "Category" : "Technical analysis", "Subject" : "EURUSD forecast for next week" }, { "ID" : "496342", "Size" : "0", "Time" : "1565797556", "Language" : "9", "Category" : "Macroeconomic indicators", "Subject" : "3Q employment rate published" } ] }  
---  
Request Parameters
  * id — one or more news identifiers separated by commas. An optional parameter. If the identifier is not specified, all available newsletters are returned, starting from the first one. Otherwise, the request will return all news items with identifiers following the specified one.
  * total — the number of news items which the WebAPI client is ready to receive. If no limit is set, the maximum possible number of news is returned. If there are too many news, so that they cannot be passed in one message (internal limit is reached), the request will return as many emails as news it is possible, with the response code [14](retcodes_common.md "Common errors").

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of news in JSON format. The complete description of the passed data is given in the ["Data structure"](webapi_news_data_structure.md "Data Structure") section.
