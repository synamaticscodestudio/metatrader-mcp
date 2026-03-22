# Price (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTConfirm ](imtconfirm.md "IMTConfirm")/ Price | [](imtconfirm_volumeext.md "VolumeExt") [](imtconfirm_tickbid.md "TickBid") |
| --- | --- | --- |
| --- | --- |

IMTConfirm::Price
Get the price, at which the trade request was confirmed.
C++
double IMTConfirm::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTConfirm.Price()  
---  
Return Value
The price, at which the trade request was confirmed.
IMTConfirm::Price
Set the price of request confirmation.
C++
MTAPIRES IMTConfirm::Price( const double price // Confirmation price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConfirm.Price( double price // Confirmation price )  
---  
Parameters
price
[in] Trade request confirmation price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.