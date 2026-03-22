# DealReason (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ DealReason | [](imtexecution_dealprice.md "DealPrice") [](imtexecution_dealstorage.md "DealStorage") |
| --- | --- | --- |
| --- | --- |

IMTExecution::DealReason
Get the reason for a deal.
C++
UINT IMTExecution::Reason() const  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.Reason()  
---  
Return Value
A value of the [IMTDeal::EnDealReason](imtdeal_enum.htm#endealreason) enumeration.
IMTExecution::DealReason
Set the reason for a deal.
C++
MTAPIRES IMTExecution::DealReason( const UINT reason // Deal reason )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.DealReason( uint reason // Deal reason )  
---  
Parameters
reason
[in] The reason for deal execution. To pass it, the [IMTDeal::EnDealReason](imtdeal_enum.htm#endealreason) enumeration is used.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The deal reason can be additionally specified when using the [TE_DEAL_EXTERNAL](imtexecution_enum.md "Enumerations") trade execution.