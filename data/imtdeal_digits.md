# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Digits | [](imtdeal_entry.md "Entry") [](imtdeal_digitscurrency.md "DigitsCurrency") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Digits
Get the number of decimal places in the price of a deal.
C++
UINT IMTDeal::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTDeal.Digits()  
---  
Python
MTDeal.Digits  
---  
Return Value
The number of decimal places in the price of a deal.
IMTDeal::Digits
Set the number of decimal places in the price of a deal.
C++
MTAPIRES IMTDeal::Digits( const UINT digits // Decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Digits( uint digits // Decimal places )  
---  
Python
MTDeal.Digits  
---  
Parameters
digits
[in] The number of decimal places in the price of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.