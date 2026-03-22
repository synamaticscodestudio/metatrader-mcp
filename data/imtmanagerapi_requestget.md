# RequestGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Activity ](imtmanagerapi_trade_operations.md "Trading Functions") / [ Trade Requests ](imtmanagerapi_trading_request.md "Trade Requests")/ RequestGet | [](imtmanagerapi_requestnext.md "RequestNext") [](imtmanagerapi_requestgetall.md "RequestGetAll") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::RequestGet
Get a trade request by ID.
C++
MTAPIRES IMTManagerAPI::RequestGet( const UINT id, // Request ID IMTRequest* request // An object of a trade request )  
---  
.NET
MTRetCode CIMTManagerAPI.RequestGet( uint  id, // Request ID CIMTRequest request // An object of a trade request )  
---  
Python
ManagerAPI.RequestGet( id # Request ID )  
---  
Parameters
id
[in] Trade request ID. The [IMTRequest::Id](imtrequest_id.md "ID") value is used as the identifier.
request
[out] An object of a trade request. The request object must first be created using the [IMTManagerAPI::RequestCreate](imtmanagerapi_requestcreate.md "RequestCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To use this method, you must first call [IMTManagerAPI::DealerStart](imtmanagerapi_dealerstart.md "DealerStart").