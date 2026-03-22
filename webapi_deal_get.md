# Get by Ticket (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Get by Ticket | [](webapi_deal_data_structure.md "Data Structure") [](webapi_deal_get_total.md "Get Total") |
| --- | --- | --- |
| --- | --- |

Getting a Deal by Ticket
This request allows to receive a deal by its ticket.
Request format
GET /api/deal/get?ticket=ticket POST /api/deal/get?ticket=ticket  
---  
Response format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/deal/get?ticket=13761310 //--- server response { "retcode" : "0 Done", "answer" : {  "Deal" : "13761310", "ExternalID" : "", "Login": "937718", "Dealer": "0", "Order": "14837694", "Action": "1", "Entry": "0", "Reason": "16", ... }  
---  
Request Parameters
  * ticket — the ticket of the deal that you need to get.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — deal parameters in JSON format. The complete description of the passed deal parameters is given in the ["Data structure"](webapi_deal_data_structure.md "Data Structure") section.
