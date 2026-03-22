# VolumeNet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposure ](imtexposure.md "IMTExposure")/ VolumeNet | [](imtexposure_pricerate.md "PriceRate") [](imtexposurearray.md "IMTExposureArray") |
| --- | --- | --- |
| --- | --- |

IMTExposure::VolumeNet
The difference (net total) between the volume of [client](imtexposure_volumeclients.md "VolumeClients") positions and [hedged](imtexposure_volumecoverage.md "VolumeCoverage") positions in the exposure currency [IMTManagerAPI::ExposureCurrency](imtmanagerapi_exposurecurrency.md "ExposureCurrency").
C++
double IMTExposure::VolumeNet() const  
---  
.NET (Gateway/Manager API)
double CIMTExposure.VolumeNet()  
---  
Return Value
The net total between the volume of client positions and hedged positions in the exposure currency [IMTManagerAPI::ExposureCurrency](imtmanagerapi_exposurecurrency.md "ExposureCurrency").