# ReasonSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ReasonSet | [](imtorder_reason.md "Reason") [](imtorder_timesetup.md "TimeSetup") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ReasonSet
Sets the order placing reason.
C++
MTAPIRES IMTOrder::ReasonSet( const UINT reason // Reason )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ReasonSet( uint reason // Reason )  
---  
Python
MTOrder.Reason  
---  
Parameters
reason
[in] Reason for placing the order. The reason is passed using the [IMTOrder::EnOrderReason](imtorder_enum.htm#enorderreason) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.
Note
To preserve the integrity of data, do not change order reasons unless you have a special need.