# GroupSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupSubscribe | [](imtadminapi_grouptiercreate.md "GroupTierCreate") [](imtadminapi_groupunsubscribe.md "GroupUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupSubscribe
Subscribe to events associated with the configuration of groups.
C++
MTAPIRES IMTAdminAPI::GroupSubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.GroupSubscribe( CIMTConGroupSink sink // CIMTConGroupSink object )  
---  
Python
AdminAPI.GroupSubscribe( sink # IMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConGroupSink::OnGroupSync](imtcongroupsink_ongroupsync.md "OnGroupSync") events, subscribe before calling the [IMTAdminAPI::Connect](imtadminapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::GroupUnsubscribe](imtadminapi_groupunsubscribe.md "GroupUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.