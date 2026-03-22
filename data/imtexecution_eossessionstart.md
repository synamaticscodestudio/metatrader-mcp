# EOSSessionStart (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSSessionStart | [](imtexecution_positionpricetp.md "PositionPriceTP") [](imtexecution_eossessionend.md "EOSSessionEnd") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSSessionStart
Get the time of the session beginning.
C++
INT64 IMTExecution::EOSSessionStart() const  
---  
.NET (Gateway/Manager API)
long CIMTExecution.EOSSessionStart()  
---  
Return Value
The time of the session beginning, specified in seconds that have elapsed since 01.01.1970.
IMTExecution::EOSSessionStart
Set the time of the session beginning.
C++
MTAPIRES IMTExecution::EOSSessionStart( INT64 start // Beginning of the session )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.EOSSessionStart( long start // Beginning of the session )  
---  
Parameters
start
[in] The time of the session beginning, specified in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The beginning and end of the session are specified when generating a trade execution for the event of recalculation of daily deals at the end of a trading session ([IMTExecution::EOS_CALC_DEALS](imtexecution_enum.htm#entradeexecutions)).