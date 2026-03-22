# GroupUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupUnsubscribe | [](imtadminapi_groupsubscribe.md "GroupSubscribe") [](imtadminapi_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupUnsubscribe
Unsubscribe from events associated with the configuration of groups.
C++
MTAPIRES IMTAdminAPI::GroupUnsubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupUnsubscribe( CIMTConGroupSink sink // CIMTConGroupSink object )  
---  
Python
AdminAPI.GroupUnsubscribe( sink # IMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::GroupSubscribe](imtadminapi_groupsubscribe.md "GroupSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.