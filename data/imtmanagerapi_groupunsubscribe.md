# GroupUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupUnsubscribe | [](imtmanagerapi_groupsubscribe.md "GroupSubscribe") [](imtmanagerapi_groupupdate.md "GroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupUnsubscribe
Unsubscribe from events associated with the configuration of groups.
C++
MTAPIRES IMTManagerAPI::GroupUnsubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupUnsubscribe( CIMTConGroupSink sink // CIMTConGroupSink object )  
---  
Python
ManagerAPI.GroupUnsubscribe( sink # IMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::GroupSubscribe](imtmanagerapi_groupsubscribe.md "GroupSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.