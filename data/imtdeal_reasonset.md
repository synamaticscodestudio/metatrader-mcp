# ReasonSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ReasonSet | [](imtdeal_reason.md "Reason") [](imtdeal_gateway.md "Gateway") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ReasonSet
Sets the reason for a deal.
C++
MTAPIRES IMTDeal::ReasonSet( const UINT reason // Reason )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.ReasonSet( uint reason // Reason )  
---  
Python
MTDeal.Reason  
---  
Parameters
reason
[in] Reason for deal execution. The reason is passed using the [IMTDeal::EnDealReason](imtdeal_enum.htm#endealreason) enumeration.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.
Note
To preserve the integrity of data, do not change deal reasons unless you have a special need.