# Profit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Profit | [](imtposition_volumeext.md "VolumeExt") [](imtposition_storage.md "Storage") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Profit
Get the current profit/loss of a trade position.
C++
double IMTPosition::Profit() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.Profit()  
---  
Return Value
The current profit/loss of a trade position in the deposit currency of the account.
IMTPosition::Profit
Set the current profit/loss of a trade position.
C++
MTAPIRES IMTPosition::Profit( const double profit // Current profit )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Profit( double profit // Current profit )  
---  
Parameters
profit
[in] The current profit/loss of a trade position in the deposit currency of the account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.