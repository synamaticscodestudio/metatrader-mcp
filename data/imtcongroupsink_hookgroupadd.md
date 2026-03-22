# HookGroupAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ HookGroupAdd | [](imtcongroupsink_ongroupsync.md "OnGroupSync") [](imtcongroupsink_hookgroupupdate.md "HookGroupUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::HookGroupAdd
Hook for the new group addition.
C++
virtual MTAPIRES IMTConGroupSink::HookGroupAdd( const UINT64 login, // Manager login IMTConGroup* new_cfg // A pointer to the group object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConGroupSink.HookGroupAdd( ulong login, // Manager login CIMTConGroup  new_cfg // Group object )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login"), who is adding the new group. If the new group is being added by the plugin, 0 is specified in the parameter.
new_cfg
[in/out] A pointer the [object of the group to be added](imtcongroup.md "IMTConGroup").
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), then the group will not be created and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before adding a group configuration to the client base. The main purpose of this hook is to modify an entry that is added, and, if necessary, to prevent the addition of unwanted records.
This method can only be used in the MetaTrader 5 Server API.