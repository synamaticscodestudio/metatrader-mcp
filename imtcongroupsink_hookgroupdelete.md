# HookGroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ HookGroupDelete | [](imtcongroupsink_hookgroupupdate.md "HookGroupUpdate") [](imtconcommission.md "IMTConCommission") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::HookGroupDelete
Group deletion hook.
C++
virtual MTAPIRES IMTConGroupSink::HookGroupDelete( const UINT64 login, // Manager login const IMTConGroup* cfg // A pointer to the group object )  
---  
.NET (Gateway/Manager API)
virtual MTRetCode CIMTConGroupSink.HookGroupDelete( ulong login, // Manager login CIMTConGroup  cfg // Group object )  
---  
Parameters
login
[in] [The login of the manager](imtconmanager_login.md "Login") who is deleting the group. If the group is to be deleted by the plugin, 0 is specified in the parameter.
cfg
[in] A pointer to the [group object](imtcongroup.md "IMTConGroup").
Return Value
In case there are no handlers if this event, [MT_RET_OK](retcodes_successful.md "Successful completion") is returned.
If the event handler returns a code different from [MT_RET_OK](retcodes_successful.md "Successful completion"), then the group will not be deleted and the hook will not be passed to other handlers (including other plugins).
Note
The hook is called right before deleting a record from the configuration database. The main purpose of this hook is prevent the unwanted deletion of records.
This method can only be used in the MetaTrader 5 Server API.