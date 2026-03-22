# DigitsCurrency (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ DigitsCurrency | [](imtdeal_digits.md "Digits") [](imtdeal_contractsize.md "ContractSize") |
| --- | --- | --- |
| --- | --- |

IMTDeal::DigitsCurrency
Get the number of decimal places the deposit currency of the client who has executed the deal.
C++
UINT IMTDeal::DigitsCurrency() const  
---  
.NET (Gateway/Manager API)
uint CIMTDeal.DigitsCurrency()  
---  
Python
MTDeal.DigitsCurrency  
---  
Return Value
The number of decimal places the deposit currency of the client who has executed the deal.
IMTDeal::DigitsCurrency
Set the number of decimal places the deposit currency of the client who has executed the deal.
C++
MTAPIRES IMTDeal::DigitsCurrency( const UINT digits // Decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.DigitsCurrency( uint digits // Decimal places )  
---  
Python
MTDeal.DigitsCurrency  
---  
Parameters
digits
[in] The number of decimal places the deposit currency of the client who has executed the deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.