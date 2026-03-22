# OnFundUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundSink ](imtconfundsink.md "IMTConFundSink")/ OnFundUpdate | [](imtconfundsink_onfundadd.md "OnFundAdd") [](imtconfundsink_onfunddelete.md "OnFundDelete") |
| --- | --- | --- |
| --- | --- |

IMTConFundSink::OnFundUpdate
Event handler for fund configuration update.
C++
virtual void IMTConFundSink::OnFundUpdate( const IMTConFund* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFundSink.OnFundUpdate( CIMTConFund config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated configuration object [IMTConFund](imtconfund.md "IMTConFund").
Note
The API calls this method to notify that a fund configuration has changed.