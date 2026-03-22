# SummaryGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Summary Positions ](imtmanagerapi_summary.md "Summary Functions")/ SummaryGet | [](imtmanagerapi_summarynext.md "SummaryNext") [](imtmanagerapi_summarygetall.md "SummaryGetAll") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SummaryGet
Get a record from a summary table for a symbol.
C++
MTAPIRES IMTManagerAPI::SummaryGet( LPCWSTR symbol, // Symbol IMTSummary* summary // Summary position object )  
---  
.NET
MTRetCode CIMTManagerAPI.SummaryGet( string symbol, // Symbol CIMTSummary summary // Summary position object )  
---  
Python
ManagerAPI.SummaryGet( str symbol # Symbol )  
---  
Parameters
symbol
[in] Symbol.
summary
[out] Summary position object. The summary object must first be created using the [IMTManagerAPI::SummaryCreate](imtmanagerapi_summarycreate.md "SummaryCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To receive information about summary, it is necessary to subscribe to events of its changes using the [IMTManagerAPI::SummarySubscribe](imtmanagerapi_summarysubscribe.md "SummarySubscribe") method.
Information about the profit/loss of positions ([IMTSummary::Profit*](imtsummary_profitclients.md "ProfitClients")) belonging to clients, whose deposit currency ([IMTConGroup::Currency](imtcongroup_currency.md "Currency")) differs from the summary currency ([IMTManagerAPI::SummaryCurrency](imtmanagerapi_summarycurrency.md "SummaryCurrency")) may not be available immediately. After connecting and synchronizing with the server, the Manager API application must receive at least one quote for the symbol, required for converting profit from the deposit currency to the summary currency. Until then, the values of [IMTSummary::Profit*](imtsummary_profitclients.md "ProfitClients") for such clients will be zero. Information on position volumes ([IMTSummary::Volume*](imtsummary_volumebuyclients.md "VolumeBuyClients")) is available immediately.