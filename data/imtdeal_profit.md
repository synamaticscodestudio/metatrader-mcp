# Profit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Profit | [](imtdeal_volumeclosedext.md "VolumeClosedExt") [](imtdeal_value.md "Value") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Profit
Get the value of the profit from the deal execution.
C++
double IMTDeal::Profit() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.Profit()  
---  
Python
MTDeal.Profit  
---  
Return Value
Profit from a deal.
IMTDeal::Profit
Set the value of the profit from the deal execution.
C++
MTAPIRES IMTDeal::Profit( const double profit // Profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Profit( double profit // Profit )  
---  
Python
MTDeal.Profit  
---  
Parameters
profit
[in] Profit from a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.