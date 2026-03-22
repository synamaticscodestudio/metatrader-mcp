# SummaryNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryNext | [](imtmanagerapi_summarytotal.md "SummaryTotal") [](imtmanagerapi_summaryget.md "SummaryGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryNext
Get a record from a summary table by an index.
C++
MTAPIRES IMTManagerAPI::SummaryNext( const UINT pos, // Position IMTSummary* summary // Summary position object )  
---  
.NET
MTRetCode CIMTManagerAPI.SummaryNext( uint pos, // Position CIMTSummary summary // Summary position object )  
---  
Python
ManagerAPI.SummaryNext( int  pos # Position )  
---  
Parameters
pos
[in] Position of the record, starting with 0.
summary
[out] Summary position object. The summary object must first be created using the [IMTManagerAPI::SummaryCreate](imtmanagerapi_summarycreate.md "SummaryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To receive information about summary, it is necessary to subscribe to events of its changes using the [IMTManagerAPI::SummarySubscribe](imtmanagerapi_summarysubscribe.md "SummarySubscribe") method.
Information about the profit/loss of positions ([IMTSummary::Profit*](imtsummary_profitclients.md "ProfitClients")) belonging to clients, whose deposit currency ([IMTConGroup::Currency](imtcongroup_currency.md "Currency")) differs from the summary currency ([IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency")) may not be available immediately. After connecting and synchronizing with the server, the Manager API application must receive at least one quote for the symbol, required for converting profit from the deposit currency to the summary currency. Until then, the values of [IMTSummary::Profit*](imtsummary_profitclients.md "ProfitClients") for such clients will be zero. Information on position volumes ([IMTSummary::Volume*](imtsummary_volumebuyclients.md "VolumeBuyClients")) is available immediately.