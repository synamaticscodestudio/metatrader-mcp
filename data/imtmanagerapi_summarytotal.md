# SummaryTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryTotal | [](imtmanagerapi_summarycurrency.md "SummaryCurrency") [](imtmanagerapi_summarynext.md "SummaryNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryTotal
Get the number of records in the summary table.
C++
UINT IMTManagerAPI::SummaryTotal()  
---  
.NET
uint CIMTManagerAPI.SummaryTotal()  
---  
Python
ManagerAPI.SummaryTotal()  
---  
Return Value
The number of records in the summary table.
Note
The number of records returned by the method includes the result (total) record from the summary table (as a symbol with empty name).