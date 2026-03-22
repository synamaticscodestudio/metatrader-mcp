# EOSTickValue (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSTickValue | [](imtexecution_eosprorfitrate.md "EOSProrfitRate") [](imtexecution_eosrollovervaluelong.md "EOSRolloverValueLong") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSTickValue
Set a new tick price for recalculating profit/loss for the deals performed during the session.
C++
MTAPIRES IMTExecution::EOSTickValue( const double value // Tick price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.EOSTickValue( double value // Tick price )  
---  
Parameters
value
[in] A new tick price for recalculating profit/loss for the deals performed during the session.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The new tick price is used for generating a trade execution for the event of return recalculation for the deals executed during the trading session ([IMTExecution::EOS_CALC_DEALS](imtexecution_enum.htm#entradeexecutions)).
The bounds of the session for which the return recalculation is performed, are determined using the methods [IMTExecution:: EOSSessionStart](imtexecution_eossessionstart.md "EOSSessionStart") and [IMTExecution:: EOSSessionEnd](imtexecution_eossessionend.md "EOSSessionEnd").
If the new tick price is not specified, a value from the symbol settings is used ([IMTConSymbol::TickValue](imtconsymbol_tickvalue.md "TickValue")).