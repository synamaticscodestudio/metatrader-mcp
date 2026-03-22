# Commission (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Commission | [](imtdeal_storage.md "Storage") [](imtdeal_fee.md "Fee") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Commission
Get the amount of commission charged for a deal.
C++
double IMTDeal::Commission() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.Commission()  
---  
Python
MTDeal.Commission  
---  
Return Value
The amount of commission charged for a deal. A negative value means funds are deducted from the account. A positive value means funds are added to the account.
IMTDeal::Commission
Set the amount of commission for a deal.
C++
MTAPIRES IMTDeal::Commission( const double comm // Commission )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Commission( double comm // Commission )  
---  
Python
MTDeal.Commission  
---  
Parameters
comm
[in] Commission for a deal. A negative value means funds are deducted from the account. A positive value means funds are added to the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.