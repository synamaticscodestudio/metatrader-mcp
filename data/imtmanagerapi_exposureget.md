# ExposureGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureGet | [](imtmanagerapi_exposurenext.md "ExposureNext") [](imtmanagerapi_exposuregetall.md "ExposureGetAll") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureGet
Get a record from an exposure table by a symbol.
C++
MTAPIRES IMTManagerAPI::ExposureGet( LPCWSTR symbol, // Symbol IMTExposure* exposure // Exposure object )  
---  
.NET
MTRetCode CIMTManagerAPI.ExposureGet( string symbol, // Symbol CIMTExposure exposure // Exposure object )  
---  
Python
ManagerAPI.ExposureGet( str symbol # Symbol )  
---  
Parameters
symbol
[in] Symbol.
exposure
[out] An object of the exposure record. The exposure object must first be created using the [IMTManagerAPI::ExposureCreate](imtmanagerapi_exposurecreate.md "ExposureCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To receive information about exposure, it is necessary to subscribe to events of its changes using the [IMTManagerAPI::ExposureSubscribe](imtmanagerapi_exposuresubscribe.md "ExposureSubscribe") method.