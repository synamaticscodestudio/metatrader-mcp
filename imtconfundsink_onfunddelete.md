# OnFundDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundSink ](imtconfundsink.md "IMTConFundSink")/ OnFundDelete | [](imtconfundsink_onfundupdate.md "OnFundUpdate") [](imtconfundsink_onfundsync.md "OnFundSync") |
| --- | --- | --- |
| --- | --- |

IMTConFundSink:OnFundDelete
Event handler for fund configuration deletion.
C++
virtual void IMTConFundSink::OnFundDelete( const IMTConFund* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFundSink.OnFundDelete( CIMTConFund config // Configuration object )  
---  
Parameters
config
A pointer to the deleted [IMTConFund](imtconfund.md "IMTConFund") configuration object.
Note
The API calls this method to notify that a fund configuration has been deleted.