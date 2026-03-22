# Digits (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposure ](imtexposure.md "IMTExposure")/ Digits | [](imtexposure_symbol.md "Symbol") [](imtexposure_volumeclients.md "VolumeClients") |
| --- | --- | --- |
| --- | --- |

IMTExposure::Digits
Gets the number of decimal places in the [rate of conversion](imtexposure_pricerate.md "PriceRate") of the [net total](imtexposure_volumenet.md "VolumeNet") to the exposure currency[IMTManagerAPi::ExposureCurrency](imtmanagerapi_exposurecurrency.md "ExposureCurrency").
C++
UINT IMTExposure::Digits() const  
---  
.NET (Gateway/Manager API)
uint CIMTExposure.Digits()  
---  
Return Value
The number of decimal places in the conversion rate.