# EOSProrfitRateSell (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSProrfitRateSell | [](imtexecution_eosprorfitratebuy.md "EOSProrfitRateBuy") [](imtexecution_eosprorfitrate.md "EOSProrfitRate") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSProrfitRateSell
Get a new rate for recalculating profit/loss for sell deals.
C++
double IMTExecution::EOSProrfitRateSell() const  
---  
.NET (Gateway/Manager API)
double CIMTExecution.EOSProrfitRateSell()  
---  
Return Value
A new rate for recalculating profit/loss for sell deals.
Note
The new rate is used for generating a trade execution for the event of return recalculation for the deals executed during the trading session ([IMTExecution::EOS_CALC_DEALS](imtexecution_enum.htm#entradeexecutions)).
The bounds of the session for which the return recalculation is performed, are determined using the methods [IMTExecution:: EOSSessionStart](imtexecution_eossessionstart.md "EOSSessionStart") and [IMTExecution:: EOSSessionEnd](imtexecution_eossessionend.md "EOSSessionEnd").