# Print (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Print | [](imtposition_clear.md "Clear") [](imtposition_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Print
Get the string description of a position.
C++
LPCWSTR IMTPosition::Print( MTAPISTR& string // Position description string ) const  
---  
.NET (Gateway/Manager API)
string CIMTPosition.Print()  
---  
Parameters
string
[out] The trade position description string.
Return Value
A pointer to string that is passed as a parameter.
Note
The description string does not include the login of the client, to whom the position belongs.