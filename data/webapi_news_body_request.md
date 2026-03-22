# Get News With Body (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ News ](webapi_news.md "News")/ Get News With Body | [](webapi_news_get.md "Get News Without Body") [](webapi_prices.md "Prices") |
| --- | --- | --- |
| --- | --- |

Get the full news description
The request allows receiving the full news description, including its body.
Request Format
GET /api/news/get_body?id=news_identifiers  
---  
Response Format
{ "retcode" : "code description", "answer" : [ { news description }, { news description }, ... ] }  
---  
Example
//--- request to the server POST /api/news/get_body?id=496341,496342 //--- server response { "retcode" : "0 Done", "answer": [ { "Info" : {  "ID" : "496341", "Size" : "0", "Time" : "1565797554", "Language" : "9", "Category" : "Technical analysis", "Subject" : "EURUSD forecast for next week" }, "Body": "PAAhAEQATwB...ADAANQAvAGgA" }, { "Info" : { "ID" : "496342", "Size" : "0", "Time" : "1565797556", "Language" : "9", "Category" : "Macroeconomic indicators", "Subject" : "3Q employment rate published" }, "Body": "PAAhAEQATwBDAFQAW...BjAG8AbgB0AGUAbgB0" }  ] }  
---  
Request Parameters
  * id — one or more news identifiers separated by commas. Required parameter. Use the [/api/news/get](webapi_news_get.md "Get News Without Body") request to get identifiers.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — an array of news in JSON format. The complete description of the passed data is given in the ["Data structure"](webapi_news_data_structure.md "Data Structure") section.
