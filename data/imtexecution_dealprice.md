# DealPrice (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ DealPrice | [](imtexecution_dealvolumeremaindext.md "DealVolumeRemaindExt") [](imtexecution_dealreason.md "DealReason") |
| --- | --- | --- |
| --- | --- |

IMTExecution::DealPrice
Gets the price of a deal.
C++
double IMTExecution::DealPrice() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.DealPrice()  
---  
Return Value
Deal execution price.
IMTExecution::DealPrice
Sets the price of a deal.
C++
MTAPIRES IMTExecution::DealPrice( const double price // Deal price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.DealPrice( double price // Deal price )  
---  
Parameters
price
[in] Deal execution price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.