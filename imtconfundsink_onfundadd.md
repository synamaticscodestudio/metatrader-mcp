# OnFundAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundSink ](imtconfundsink.md "IMTConFundSink")/ OnFundAdd | [](imtconfundsink.md "IMTConFundSink") [](imtconfundsink_onfundupdate.md "OnFundUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConFundSink::OnFundAdd
Event handler for adding of a new fund configuration.
C++
virtual void IMTConFundSink::OnFundAdd( const IMTConFund* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFundSink.OnFundAdd( CIMTConFund config // Configuration object )  
---  
Parameters
config
[in] A pointer to the added configuration object [IMTConFund](imtconfund.md "IMTConFund").
Note
The API calls this method to notify that a new fund configuration has been added.