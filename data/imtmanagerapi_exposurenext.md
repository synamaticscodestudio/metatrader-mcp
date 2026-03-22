# ExposureNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureNext | [](imtmanagerapi_exposuretotal.md "ExposureTotal") [](imtmanagerapi_exposureget.md "ExposureGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureNext
Get a record from an exposure table by an index.
C++
MTAPIRES IMTManagerAPI::ExposureNext( const UINT pos, // Position IMTExposure* exposure // Exposure object )  
---  
.NET
MTRetCode CIMTManagerAPI.ExposureNext( uint pos, // Position CIMTExposure exposure // Exposure object )  
---  
Python
ManagerAPI.ExposureNext( int pos # Position )  
---  
Parameters
pos
[in] Position of the record, starting with 0.
exposure
[out] An object of the exposure record. The exposure object must first be created using the [IMTManagerAPI::ExposureCreate](imtmanagerapi_exposurecreate.md "ExposureCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
To receive information about exposure, it is necessary to subscribe to events of its changes using the [IMTManagerAPI::ExposureSubscribe](imtmanagerapi_exposuresubscribe.md "ExposureSubscribe") method.