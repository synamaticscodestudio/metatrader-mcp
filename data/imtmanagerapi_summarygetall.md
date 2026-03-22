# SummaryGetAll (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryGetAll | [](imtmanagerapi_summaryget.md "SummaryGet") [](imtmanagerapi_exposure.md "Exposure Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryGetAll
Get an array of summary records.
C++
MTAPIRES IMTManagerAPI::SummaryGetAll( IMTSummaryArray* summary // An object of the array of summary positions )  
---  
.NET
MTRetCode CIMTManagerAPI.SummaryGetAll( CIMTSummaryArray summary // An object of the array of summary positions )  
---  
Python
ManagerAPI.SummaryGetAll()  
---  
Parameters
summary
[out] An object of the array of summary positions. The summary object must first be created using the [IMTManagerAPI::SummaryCreateArray](imtmanagerapi_summarycreatearray.md "SummaryCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To receive information about summary, it is necessary to subscribe to events of its changes using the [IMTManagerAPI::SummarySubscribe](imtmanagerapi_summarysubscribe.md "SummarySubscribe") method.
The returned array includes the result (total) record from the summary table (as a symbol with empty name).
Information about the profit/loss of positions ([IMTSummary::Profit*](imtsummary_profitclients.md "ProfitClients")) belonging to clients, whose deposit currency ([IMTConGroup::Currency](imtcongroup_currency.md "Currency")) differs from the summary currency ([IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency")) may not be available immediately. After connecting and synchronizing with the server, the Manager API application must receive at least one quote for the symbol, required for converting profit from the deposit currency to the summary currency. Until then, the values of [IMTSummary::Profit*](imtsummary_profitclients.md "ProfitClients") for such clients will be zero. Information on position volumes ([IMTSummary::Volume*](imtsummary_volumebuyclients.md "VolumeBuyClients")) is available immediately.