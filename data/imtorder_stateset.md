# StateSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ StateSet | [](imtorder_state.md "State") [](imtorder_reason.md "Reason") |
| --- | --- | --- |
| --- | --- |

IMTOrder::State
Sets the order state.
C++
MTAPIRES IMTOrder::StateSet( const UINT state // The order state )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.StateSet( uint state // The order state )  
---  
Python
MTOrder.State  
---  
Parameters
state
[in] Order state. The order state is passed using the [IMTOrder::EnOrderState](imtorder_enum.htm#enorderstate) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.
Note
Do not edit order states unless you have a specific reason, since this can cause serious consequences. For example, if you change the state of a filled order (ORDER_STATE_FILLED) to Placed (ORDER_STATE_PLACED), it can trigger once again.