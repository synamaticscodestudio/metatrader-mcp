# EOSProrfitRate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSProrfitRate | [](imtexecution_eosprorfitratesell.md "EOSProrfitRateSell") [](imtexecution_eostickvalue.md "EOSTickValue") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSProrfitRate
Set a new rate for recalculating profit/loss for the deals performed during the session.
C++
MTAPIRES IMTExecution::EOSProrfitRate( const double rate_buy // A rate for buy deals const double rate_sell // A rate for sell deals )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.EOSProrfitRate( double rate_buy // A rate for buy deals double rate_sell // A rate for sell deals )  
---  
Parameters
rate_buy
[in] A rate for recalculating profit/loss for buy deals.
rate_sell
[in] A rate for recalculating profit/loss for sell deals.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The new rate is used for generating a trade execution for the event of return recalculation for the deals executed during the trading session ([IMTExecution::EOS_CALC_DEALS](imtexecution_enum.htm#entradeexecutions)).
The bounds of the session for which the return recalculation is performed, are determined using the methods [IMTExecution:: EOSSessionStart](imtexecution_eossessionstart.md "EOSSessionStart") and [IMTExecution:: EOSSessionEnd](imtexecution_eossessionend.md "EOSSessionEnd").
If the new rate is not specified, the rate specified in deals is used.