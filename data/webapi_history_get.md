# Get Closed by Ticket (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Get Closed by Ticket | [](webapi_order_cancel.md "Move to History") [](webapi_history_get_total.md "Get Closed Total") |
| --- | --- | --- |
| --- | --- |

Getting a Closed Order by Ticket
This request allows to get an order from the history by a ticket.
Request format
GET /api/history/get?ticket=ticket POST /api/history/get?ticket=ticket  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/history/get?ticket=12832917 //--- server response { "retcode" : "0 Done", "answer" : {  "Order" : "12832917", "ExternalID" : "", "Login" : "938252", "Dealer" : "0", "Symbol" : "AUDCAD", "Digits" : "5", "DigitsCurrency" : "2", "ContractSize" : "100000.00", "State" : "1", "Reason" : "0", ... }  
---  
Request Parameters
  * ticket — the ticket of the order that you need to get.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — order parameters in JSON format. The complete description of the passed order parameters is given in the ["Data structure"](webapi_order_data_structure.md "Data Structure") section.
