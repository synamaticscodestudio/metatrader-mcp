# OrderActivationFlags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderActivationFlags | [](imtexecution_orderprice.md "OrderPrice") [](imtexecution_orderactivationmode.md "OrderActivationMode") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderActivationFlags
Gets additional order activation conditions.
C++
UINT IMTExecution::OrderActivationFlags()  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.OrderActivationFlags()  
---  
Return Value
A value of the [IMTOrder::EnTradeActivationFlags](imtorder_enum.htm#entradeactivationflags) enumeration.
Note
IMTExecution::OrderActivationFlags changes the value of the appropriate order field [IMTOrder::ActivationFlags](imtorder_activationflags.md "ActivationFlags").
IMTExecution::OrderActivationFlags
Sets additional order activation conditions.
C++
MTAPIRES IMTExecution::OrderActivationFlags( const UINT activation // Activation conditions ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderActivationFlags( uint activation // Activation conditions )  
---  
Parameters
activation
[in] Additional conditions for the activation of orders. The [IMTOrder::EnTradeActivationFlags](imtorder_enum.htm#entradeactivationflags) enumeration is used to pass the conditions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
IMTExecution::OrderActivationFlags changes the value of the appropriate order field [IMTOrder::ActivationFlags](imtorder_activationflags.md "ActivationFlags").
Additional activation flags can be set when sending a trade execution notifying that a trade request has been accepted for processing in an external trading system ([IMTExecution::TE_ORDER_NEW_REQUEST](imtexecution_enum.md "Enumerations")). Schematically, processing of an operation with data output to an external system can be represented as follows.
| Client | Gateway API |
| --- | --- |
| --- | --- |
| Sending a request. |
| Receiving a request from the queue. |
| Request confirmation ([IMTConfirm](imtconfirm_retcode.md "Retcode")) with the response code [MT_RET_REQUEST_PLACED](retcodes_trade_request.md "Trade Requests"). The state [IMTOrder::ORDER_STATE_PLACED](imtorder_enum.htm#enorderstate) is set for a confirmed order. |
| Trade execution of the [IMTExecition::TE_ORDER_NEW_REQUEST](imtexecution_enum.md "Enumerations") type meaning that the order has been accepted for processing. Depending on the type of a trade request, one of the following [states](imtorder_enum.htm#enorderstate) can be set to an order: ORDER_STATE_REQUEST_ADD, ORDER_STATE_REQUEST_MODIFY or ORDER_STATE_REQUEST_CANCEL. At this stage you can specify [additional flags](imtorder_enum.htm#entradeactivationflags) to indicate which events should not be handled on the MetaTrader 5 server side. |
| Depending on the results of processing in an external trading system, the IMTExecution trade execution of the corresponding type is formed: [TE_ORDER_NEW](imtexecution_enum.htm#entradeexecutions), [TE_ORDER_FILL](imtexecution_enum.htm#entradeexecutions) etc. |