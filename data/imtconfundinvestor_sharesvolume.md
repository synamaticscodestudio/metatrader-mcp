# SharesVolume (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundInvestor ](imtconfundinvestor.md "IMTConFundInvestor")/ SharesVolume | [](imtconfundinvestor_name.md "Name") [](imtconfundsink.md "IMTConFundSink") |
| --- | --- | --- |
| --- | --- |

IMTConFundInvestor::SharesVolume
Get the investor's share size.
C++
UINT64 IMTConFundInvestor::SharesVolume() const  
---  
.NET (Gateway/Manager API)
uint CIMTConFundInvestor.SharesVolume()  
---  
Return Value
The investor's share size. Corresponds to the size of the fund symbol position ([IMTPosition::Volume](imtposition_volumeext.md "VolumeExt")) opened on the investor's account.