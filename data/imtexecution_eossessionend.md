# EOSSessionEnd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSSessionEnd | [](imtexecution_eossessionstart.md "EOSSessionStart") [](imtexecution_eospricesettlement.md "EOSPriceSettlement") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSSessionEnd
Get the time of the session end.
C++
INT64 IMTExecution::EOSSessionEnd() const  
---  
.NET (Gateway/Manager API)
long CIMTExecution.EOSSessionEnd()  
---  
Return Value
The end of session time, specified in seconds that have elapsed since 01.01.1970.
IMTExecution::EOSSessionEnd
Set the session end time.
C++
MTAPIRES IMTExecution::EOSSessionEnd( INT64 end // End of the session )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.EOSSessionEnd( long end // End of the session )  
---  
Parameters
end
[in] The end of session time, specified in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The beginning and end of the session are specified when generating a trade execution for the event of recalculation of daily deals at the end of a trading session ([IMTExecution::EOS_CALC_DEALS](imtexecution_enum.htm#entradeexecutions)).