# DigitsCurrency (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ DigitsCurrency | [](imtorder_digits.md "Digits") [](imtorder_contractsize.md "ContractSize") |
| --- | --- | --- |
| --- | --- |

IMTOrder::DigitsCurrency
Get the number of decimal places the deposit currency of the client who has placed the order.
C++
UINT IMTOrder::DigitsCurrency() const  
---  
.NET (Gateway/Manager API)
uint CIMTOrder.DigitsCurrency()  
---  
Python
MTOrder.DigitsCurrency  
---  
Return Value
The number of decimal places the deposit currency of the client who has placed the order.
IMTOrder::DigitsCurrency
Set the number of decimal places the deposit currency of the client who has placed the order.
C++
MTAPIRES IMTOrder::DigitsCurrency( const UINT digits // Decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.DigitsCurrency( uint digits // Decimal places )  
---  
Python
MTOrder.DigitsCurrency  
---  
Parameters
digits
[in] The number of decimal places the deposit currency of the client who has placed the order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.