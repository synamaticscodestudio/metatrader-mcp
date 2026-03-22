# RequestNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestNext | [](imtmanagerapi_requesttotal.md "RequestTotal") [](imtmanagerapi_requestget.md "RequestGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestNext
Get a trade request by a queue position.
C++
MTAPIRES IMTManagerAPI::RequestNext( const UINT pos, // Trade request position IMTRequest* request // An object of a trade request )  
---  
.NET
MTRetCode CIMTManagerAPI.RequestNext( uint pos, // Trade request position CIMTRequest request // An object of a trade request )  
---  
Python
ManagerAPI.RequestNext( pos # Trade request position )  
---  
Parameters
pos
[in] Position of a trade request in a queue, starting with 0.
request
[out] An object of a trade request. The request object must first be created using the [IMTManagerAPI::RequestCreate](imtmanagerapi_requestcreate.md "RequestCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies trade request data at the specified queue position to the request object. To use this method, you must first call [DealerStart](imtmanagerapi_dealerstart.md "DealerStart").