# GatewayID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ GatewayID | [](imtexecution_actiongateway.md "ActionGateway") [](imtexecution_externalretcode.md "ExternalRetcode") |
| --- | --- | --- |
| --- | --- |

IMTExecution::GatewayID
Gets the ID of the gateway from which a trade execution has been received. It corresponds to the value of [IMTConGateway::ID](imtcongateway_id.md "ID").
C++
UINT64 IMTExecution::GatewayID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTExecution.GatewayID()  
---  
Return Value
The ID of the gateway from which a trade execution has been received.
IMTExecution::GatewayID
Sets the ID of the gateway from which a trade execution has been received. It corresponds to the value of [IMTConGateway::ID](imtcongateway_id.md "ID").
C++
MTAPIRES IMTExecution::GatewayID( const UINT64 id // Gateway ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.GatewayID( ulong id // Gateway ID )  
---  
Parameters
id
[in] The ID of the gateway from which a trade execution has been received.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.