# HookGatewayAccountRequest (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ HookGatewayAccountRequest | [](imtgatewaysink_hookgatewayordersrequest.md "HookGatewayOrdersRequest") [](reportapi.md "Report API") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::HookGatewayAccountRequest
The hook for synchronizing MetaTrader 5 client's trading data with an external trading system. The hook is called when clicking "Synchronize" at "Account" tab of MetaTrader 5 Administrator, as well as when calling IMTAdminAPI::UserExternalSync and IMTManagerAPI::UserExternalSync methods from MetaTrader 5 Manager API.
When calling the hook, the gateway developer should decide whether orders, positions and client balance from an external system should be requested. Depending on the decision, one of [response codes](retcodes_successful.md "Successful completion") should be returned from the hook:
  * MT_RET_OK — if this code is returned, the developer is to call [IMTGatewayAPI::GatewayAccountAnswer](imtgatewayapi_gatewayaccountanswer.md "GatewayAccountAnswer") method that will be used to pass the response code for receiving data from an external system (MT_RET_OK) and the data itself, if it is received successfully. After that, the passed orders, positions and balance replace the same data for the specified client account.
  * MT_RET_OK_NONE — if this code is returned, the gateway developer signalizes that the current orders, positions and client balance have already been synchronized with an external system, the new synchronization does not happen.

C++
MTAPIRES IMTGatewaySink::HookGatewayAccountRequest( UINT64 login, // Login LPCWSTR  account_id // Account number in an external system )  
---  
.NET
MTRetCode CIMTGatewaySink.HookGatewayAccountRequest( ulong login, // Login srting  account_id // Account number in an external system )  
---  
Parameters
login
[in] Account login, for which synchronization is performed.
*account_id
[in] ID of the client's external trading system account, for which synchronization is performed.
Return Value
MT_RET_OK or MT_RET_OK_NONE response code depending on whether the data is synchronized. In case of an error, the appropriate [error code](reference_retcodes.md "Return Codes") should be returned.