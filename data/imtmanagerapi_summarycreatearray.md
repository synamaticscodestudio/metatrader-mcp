# SummaryCreateArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryCreateArray | [](imtmanagerapi_summarycreate.md "SummaryCreate") [](imtmanagerapi_summarysubscribe.md "SummarySubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryCreateArray
Create an array of objects of the summary of clients' positions.
C++
IMTSummaryArray* IMTManagerAPI::SummaryCreateArray()  
---  
.NET
CIMTSummaryArray CIMTManagerAPI.SummaryCreateArray()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTSummaryArray](imtsummaryarray.md "IMTSummaryArray") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTSummary::Release](imtsummaryarray_release.md "Release") method of this object.