# DigitsCurrency (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ DigitsCurrency | [](imtposition_digits.md "Digits") [](imtposition_contractsize.md "ContractSize") |
| --- | --- | --- |
| --- | --- |

IMTPosition::DigitsCurrency
Get the number of decimal places the deposit currency of the client who has opened the position.
C++
UINT IMTPosition::DigitsCurrency() const  
---  
.NET (Gateway/Manager API)
uint CIMTPosition.DigitsCurrency()  
---  
Return Value
The number of decimal places the deposit currency of the client who has opened the position.
IMTPosition::DigitsCurrency
Set the number of decimal places the deposit currency of the client who has opened the position.
C++
MTAPIRES IMTPosition::DigitsCurrency( const UINT digits // Decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.DigitsCurrency( uint digits // Decimal places )  
---  
Parameters
digits
[in] The number of decimal places the deposit currency of the client who has opened the position.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.