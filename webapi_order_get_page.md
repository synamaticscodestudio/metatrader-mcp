# Get Open Paged (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Get Open Paged | [](webapi_order_get_total.md "Get Open Total") [](webapi_order_get_batch.md "Get Multiple Open") |
| --- | --- | --- |
| --- | --- |

Getting Open Orders Page by Page
This request allows to get open orders of a client by the login.
Request format
GET /api/order/get_page?login=login&offset=index&total=number POST /api/order/get_page?login=login&offset=index&total=number  
---  
Response format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/order/get_page?login=1020&offset=0&total=3 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Order" : "12832917", "ExternalID" : "", "Login" : "1020", ... }, {  "Order" : "12832918", "ExternalID" : "", "Login" : "1020", ... }, ... ] }  
---  
Request Parameters
  * login — the login of the client whose orders you need to obtain.
  * offset — the index of the order starting from which you need to obtain orders. Numbering starts with 0.
  * total — the number of orders that should be obtained. The maximum number of orders that can be requested in one command is 100.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — order array in JSON format. The complete description of the passed order parameters is given in the ["Data structure"](webapi_order_data_structure.md "Data Structure") section.

Note
This method allows to easily arrange a paged output of resulting orders. First you should get the total number of a client's orders using the [/api/order/get_total](webapi_order_get_total.md "Get Open Total") request. After defining the number of orders that should be shown on one page (set by the total parameter), you can easily find the offset parameter for each page.