# ExposureCurrency (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureCurrency | [](imtmanagerapi_exposureunsubscribe.md "ExposureUnsubscribe") [](imtmanagerapi_exposuretotal.md "ExposureTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureCurrency
Get a currency of the net total of assets.
C++
LPCWSTR IMTManagerAPI::ExposureCurrency()  
---  
.NET
string CIMTManagerAPI.ExposureCurrency()  
---  
Python
ManagerAPI.ExposureCurrency()  
---  
Return Value
The currency of the net total of assets.
IMTManagerAPI::ExposureCurrency
Set a currency of the net total of assets.
C++
MTAPIRES IMTManagerAPI::ExposureCurrency( LPCWSTR currency // Currency )  
---  
.NET
MTRetCode CIMTManagerAPI.ExposureCurrency( string currency // Currency )  
---  
Python
ManagerAPI.ExposureCurrency( str currency # Currency )  
---  
Parameters
currency
[in] The currency of the net total of assets.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.