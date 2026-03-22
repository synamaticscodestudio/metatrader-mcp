# ExposureSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureSubscribe | [](imtmanagerapi_exposurecreatearray.md "ExposureCreateArray") [](imtmanagerapi_exposureunsubscribe.md "ExposureUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureSubscribe
Subscribe to events associated with changes in the exposure database.
C++
MTAPIRES IMTManagerAPI::ExposureSubscribe( IMTExposureSink* sink // A pointer to the IMTExposureSink object )  
---  
.NET
MTRetCode CIMTManagerAPI::ExposureSubscribe( CIMTExposureSink sink // CIMTExposureSink object )  
---  
Python
ManagerAPI::ExposureSubscribe( callback # MTExposureSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTExposureSink](imtexposuresink.md "IMTExposureSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTExposureSink](imtexposuresink.md "IMTExposureSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::ExposureUnsubscribe](imtmanagerapi_exposureunsubscribe.md "ExposureUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.