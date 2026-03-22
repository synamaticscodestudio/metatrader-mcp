# HookGroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ HookGroupUpdate | [](imtcongroupsink_hookgroupadd.md "HookGroupAdd") [](imtcongroupsink_hookgroupdelete.md "HookGroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::HookGroupAdd
Hook for the update of group settings.
C++
virtual MTAPIRES IMTConGroupSink::HookGroupUpdate( const UINT64 login, // Manager login const IMTConGroup* cfg, // A pointer to the current group IMTConGroup* new_cfg // A pointer to the updated group )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConGroupSink.HookGroupUpdate( ulong login, // Manager login CIMTConGroup  cfg, // Current group CIMTConGroup  new_cfg // Updated group )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login"), who is going to update the group settings. If the group is to be updated by the plugin, 0 is specified in the parameter.
cfg
[in] A pointer to the [current group object](imtcongroup.md "IMTConGroup").
new_cfg
[out] A pointer to the [group object](imtcongroup.md "IMTConGroup") after making change.
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), then the group will not be updated and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before making changes to the configuration database. The main purpose of this hook is to modify an entry that is being updated, and, if necessary, to prevent the unwanted change of records.
This method can only be used in the MetaTrader 5 Server API.