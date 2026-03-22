# Action (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Action | [](imtexecution_externalaccount.md "ExternalAccount") [](imtexecution_datetime.md "Datetime") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Action
Get the trade execution type.
C++
UINT IMTExecution::Action() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.Action()  
---  
Return Value
A value of the [IMTExecution::EnTradeExecutions](imtexecution_enum.htm#entradeexecutions) enumeration.
IMTExecution::Action
Set the trade execution type.
C++
MTAPIRES IMTExecution::Action( const UINT action // Trade execution type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Action( uint action // Trade execution type )  
---  
Parameters
action
[in] Trade execution type. To pass the type, the [IMTExecution::EnTradeExecutions](imtexecution_enum.htm#entradeexecutions)enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.