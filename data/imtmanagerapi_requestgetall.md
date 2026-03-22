# RequestGetAll (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestGetAll | [](imtmanagerapi_requestget.md "RequestGet") [](imtmanagerapi_trade_auxiliary.md "Auxiliary Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestGetAll
Get all the trade requests in a queue.
C++
MTAPIRES IMTManagerAPI::RequestGetAll( IMTRequestArray* requests // An object of the array of requests )  
---  
.NET
MTRetCode CIMTManagerAPI.RequestGetAll( CIMTRequestArray requests // An object of the array of requests )  
---  
Python
ManagerAPI.RequestGetAll( requests # An object of the array of requests )  
---  
Parameters
requests
[out] An object of the array of requests. The requests object must first be created using the [IMTManagerAPI::RequestCreateArray](imtmanagerapi_requestcreatearray.md "RequestCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the array of trade requests in a queue to the requests object. To use this method, you must first call [IMTManagerAPI::DealerStart](imtmanagerapi_dealerstart.md "DealerStart").