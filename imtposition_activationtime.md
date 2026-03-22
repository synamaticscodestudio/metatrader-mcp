# ActivationTime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ActivationTime | [](imtposition_activationmode.md "ActivationMode") [](imtposition_activationprice.md "ActivationPrice") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ActivationTime
Get position activation time.
C++
INT64 IMTPosition::ActivationTime() const  
---  
.NET (Gateway/Manager API)
long CIMTPosition.ActivationTime()  
---  
Return Value
Date and time of position activation, in seconds that have elapsed since 01.01.1970.
IMTPosition::ActivationTime
Sets position activation time.
C++
MTAPIRES IMTPosition::ActivationTime( const INT64 atm // Activation time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ActivationTime( long atm // Activation time )  
---  
Parameters
atm
[in] Date and time of position activation in seconds that have elapsed since January 1, 1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.