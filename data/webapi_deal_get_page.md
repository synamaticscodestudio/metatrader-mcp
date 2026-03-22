# Get Paged (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Deals ](webapi_deal.md "Deals")/ Get Paged | [](webapi_deal_get_total.md "Get Total") [](webapi_deal_get_batch.md "Get Multiple") |
| --- | --- | --- |
| --- | --- |

Getting Deals Page by Page
This request is used for obtaining deals performed by a client within a specified time range.
Request format
GET /api/deal/get_page?login=login&from=date&to=date&offset=index&total=number POST /api/deal/get_page?login=login&from=date&to=date&offset=index&total=number  
---  
Response format
{ "retcode" : "code description", "answer" : [ { description }, { description }, { description }, ... ] }  
---  
Example
//--- request to the server GET /api/deal/get_page?login=1020&from=1546345925&to=1569933125&offset=0&total=3 //--- server response { "retcode" : "0 Done", "answer" : [ {  "Deal" : "11918642", "ExternalID" : '', "Login" : "1020", ... }, {  "Deal" : "11918643", "ExternalID" : "", "Login" : "1020", ... }, ... ] }  
---  
Request Parameters
  * login — the login of the client whose deals you need to obtain.
  * from — the beginning of the period for requesting deals. The date is specified in seconds that have elapsed since 01.01.1970.
  * to — the end of the period for requesting deals. The date is specified in seconds that have elapsed since 01.01.1970.
  * offset — the index of the deal starting from which you need to obtain deals. Numbering starts with 0.
  * total — the number of deals that should be obtained. The maximum number of deals that can be requested in one command is 100.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * answer — deal array in JSON format. The complete description of the passed order parameters is given in the ["Data structure"](webapi_deal_data_structure.md "Data Structure") section.

Note
This method allows to easily arrange a paged output of resulting deals. First you should get the total number of a client's deals using the [/api/deal/get_total](webapi_deal_get_total.md "Get Total") method. After defining the number of deals that should be shown on one page (set by the total parameter), you can easily find the offset parameter for each page.