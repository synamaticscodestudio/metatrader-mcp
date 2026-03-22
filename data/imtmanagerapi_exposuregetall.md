# ExposureGetAll (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureGetAll | [](imtmanagerapi_exposureget.md "ExposureGet") [](imtmanagerapi_daily.md "Daily Report Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureGetAll
Get an array of exposure records.
C++
MTAPIRES IMTManagerAPI::ExposureGetAll( IMTExposureArray* exposure // An object of an array of exposure records )  
---  
.NET
MTRetCode CIMTManagerAPI.ExposureGetAll( CIMTExposureArray exposure // An object of an array of exposure records )  
---  
Python
ManagerAPI.ExposureGetAll()  
---  
Parameters
exposure
[out] An object of the array. The exposure object must first be created using the [IMTManagerAPI::ExposureCreateArray](imtmanagerapi_exposurecreatearray.md "ExposureCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To receive information about exposure, it is necessary to subscribe to events of its changes using the [IMTManagerAPI::ExposureSubscribe](imtmanagerapi_exposuresubscribe.md "ExposureSubscribe") method.
The returned array includes the result (total) record from the exposure table (as a symbol with empty name).