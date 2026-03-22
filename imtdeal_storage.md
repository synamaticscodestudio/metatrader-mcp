# Storage (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Storage | [](imtdeal_value.md "Value") [](imtdeal_commission.md "Commission") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Storage
Get the swap size for a deal.
C++
double IMTDeal::Storage() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.Storage()  
---  
Python
MTDeal.Storage  
---  
Return Value
The swap size for a deal.
IMTDeal::Storage
Set the swap size for a deal.
C++
MTAPIRES IMTDeal::Storage( const double storage // Swap )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Storage( double storage // Swap )  
---  
Python
MTDeal.Storage  
---  
Parameters
storage
[in] The swap size for a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.