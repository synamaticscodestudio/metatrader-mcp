# SummarySubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummarySubscribe | [](imtmanagerapi_summarycreatearray.md "SummaryCreateArray") [](imtmanagerapi_summaryunsubscribe.md "SummaryUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummarySubscribe
Subscribe to events associated with changes in the summary of clients' positions.
C++
MTAPIRES IMTManagerAPI::SummarySubscribe( IMTSummarySink* sink // A pointer to the IMTSummarySink object )  
---  
.NET
MTRetCode CIMTManagerAPI.SummarySubscribe( CIMTSummarySink sink // CIMTSummarySink object )  
---  
Python
ManagerAPI.SummarySubscribe( sink # IMTSummarySink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTSummarySink](imtsummarysink.md "IMTSummarySink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTSummarySink](imtsummarysink.md "IMTSummarySink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::SummaryUnsubscribe](imtmanagerapi_summaryunsubscribe.md "SummaryUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.