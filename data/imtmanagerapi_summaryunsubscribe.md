# SummaryUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryUnsubscribe | [](imtmanagerapi_summarysubscribe.md "SummarySubscribe") [](imtmanagerapi_summarycurrency.md "SummaryCurrency") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryUnsubscribe
Unsubscribe from events associated with changes in the summary of clients' positions.
C++
MTAPIRES IMTManagerAPI::SummaryUnsubscribe( IMTSummarySink* sink // A pointer to the IMTSummarySink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SummaryUnsubscribe( CIMTSummarySink sink // CIMTSummarySink object )  
---  
Python
ManagerAPI.SummaryUnsubscribe( sink # IMTSummarySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTSummarySink](imtsummarysink.md "IMTSummarySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a pair method to [IMTManagerAPI::SummarySubscribe](imtmanagerapi_summarysubscribe.md "SummarySubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.