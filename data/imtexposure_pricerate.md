# PriceRate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposure ](imtexposure.md "IMTExposure")/ PriceRate | [](imtexposure_volumecoverage.md "VolumeCoverage") [](imtexposure_volumenet.md "VolumeNet") |
| --- | --- | --- |
| --- | --- |

IMTExposure::PriceRate
The rate of conversion of the net total to the selected currency.
C++
double IMTExposure::PriceRate() const  
---  
.NET (Gateway/Manager API)
double CIMTExposure.PriceRate()  
---  
Return Value
The rate of conversion of the net total to the selected currency. The currency of the net total is specified by the [IMTManagerAPI::ExposureCurrency](imtmanagerapi_exposurecurrency.md "ExposureCurrency") method.