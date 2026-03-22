# SummaryCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryCreate | [](imtmanagerapi_summary.md "Summary Functions") [](imtmanagerapi_summarycreatearray.md "SummaryCreateArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryCreate
Create an object of the summary of clients' positions.
C++
IMTSummary* IMTManagerAPI::SummaryCreate()  
---  
.NET
CIMTSummary CIMTManagerAPI.SummaryCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTSummary](imtsummary.md "IMTSummary") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTSummary::Release](imtsummary_release.md "Release") method of this object.