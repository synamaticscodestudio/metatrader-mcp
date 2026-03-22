# Price (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Price | [](imtdeal_symbol.md "Symbol") [](imtdeal_pricesl.md "PriceSL") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Price
Get the price of a deal.
C++
double IMTDeal::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.Price()  
---  
Python
MTDeal.Price  
---  
Return Value
The price at which the deal was executed.
IMTDeal::Price
Set the price of a deal.
C++
MTAPIRES IMTDeal::Price( const double price // Deal price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Price( double price // Deal price )  
---  
Python
MTDeal.Price  
---  
Parameters
price
[in] The price at which the deal is executed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.