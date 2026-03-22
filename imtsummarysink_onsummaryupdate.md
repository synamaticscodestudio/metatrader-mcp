# OnSummaryUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Summary Positions ](trading_summary.md "Summary Positions") / [ IMTSummarySink ](imtsummarysink.md "IMTSummarySink")/ OnSummaryUpdate | [](imtsummarysink.md "IMTSummarySink") [](trading_exposure.md "Assets") |
| --- | --- | --- |
| --- | --- |

IMTSummarySink::OnSummaryUpdate
A handler of an event of update of summary positions.
C++
virtual void IMTSummarySink::OnSummaryUpdate( const IMTSummary* summary // A pointer to the object of the summary position record )  
---  
.NET (Gateway/Manager API)
virtual void CIMTSummarySink.OnSummaryUpdate( CIMTSummary  summary // The object of the summary position record )  
---  
Parameters
summary
[in] A pointer to the object of the updated summary position record.
Note
This method is called by the API to notify that a summary position record has been modified.