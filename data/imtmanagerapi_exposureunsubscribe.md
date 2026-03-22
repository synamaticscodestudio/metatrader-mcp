# ExposureUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Exposure ](imtmanagerapi_exposure.md "Exposure Functions")/ ExposureUnsubscribe | [](imtmanagerapi_exposuresubscribe.md "ExposureSubscribe") [](imtmanagerapi_exposurecurrency.md "ExposureCurrency") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ExposureUnsubscribe
Undubscribe from events associated with changes in the exposure database.
C++
MTAPIRES IMTManagerAPI::ExposureUnsubscribe( IMTExposureSink* sink // A pointer to the IMTExposureSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.ExposureUnsubscribe( CIMTExposureSink sink // CIMTExposureSink object )  
---  
Python
ManagerAPI.ExposureUnsubscribe( callback # MTExposureSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTExposureSink](imtexposuresink.md "IMTExposureSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This is a pair method to [IMTManagerAPI::ExposureSubscribe](imtmanagerapi_exposuresubscribe.md "ExposureSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.