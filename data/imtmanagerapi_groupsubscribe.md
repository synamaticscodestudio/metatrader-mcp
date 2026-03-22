# GroupSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupSubscribe | [](imtmanagerapi_grouptiercreate.md "GroupTierCreate") [](imtmanagerapi_groupunsubscribe.md "GroupUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupSubscribe
Subscribe to events associated with the configuration of groups.
C++
MTAPIRES IMTManagerAPI::GroupSubscribe( IMTConGroupSink* sink // A pointer to the IMTConGroupSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupSubscribe( CIMTConGroupSink sink // CIMTConGroupSink object )  
---  
Python
ManagerAPI.GroupSubscribe( sink # IMTConGroupSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
To receive [IMTConGroupSink::OnGroupSync](imtcongroupsink_ongroupsync.md "OnGroupSync") events, subscribe before calling the [IMTManagerAPI::Connect](imtmanagerapi_connect.md "Connect") method.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::GroupUnsubscribe](imtmanagerapi_groupunsubscribe.md "GroupUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with group configuration changes, the pumping mode [IMTManagerAPI::PUMP_MODE_GROUPS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.