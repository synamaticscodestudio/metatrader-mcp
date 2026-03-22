# SummaryCurrency (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryCurrency | [](imtmanagerapi_summaryunsubscribe.md "SummaryUnsubscribe") [](imtmanagerapi_summarytotal.md "SummaryTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryCurrency
Get the currency used for calculating profits of the summary positions.
C++
LPCWSTR IMTManagerAPI::SummaryCurrency()  
---  
.NET
string CIMTManagerAPI.SummaryCurrency()  
---  
Python
ManagerAPI.SummaryCurrency()  
---  
Return Value
If successful, it returns a pointer to the string with the currency. Otherwise, it returns NULL.
IMTManagerAPI::SummaryCurrency
Sets the currency, in which clients' summary positions for a symbol are calculated.
C++
MTAPIRES IMTManagerAPI::SummaryCurrency( LPCWSTR currency // Currency )  
---  
.NET
MTRetCode CIMTManagerAPI.SummaryCurrency( string currency // Currency )  
---  
Python
ManagerAPI.SummaryCurrency( str currency # Currency )  
---  
Parameters
currency
[in] The currency used for calculating profits of the summary positions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.