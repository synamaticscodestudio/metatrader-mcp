# OnGroupUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ OnGroupUpdate | [](imtcongroupsink_ongroupadd.md "OnGroupAdd") [](imtcongroupsink_ongroupdelete.md "OnGroupDelete") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::OnGroupUpdate
A handler of the event of updating group settings.
C++
virtual void IMTConGroupSink::OnGroupUpdate( const IMTConGroup* config // A pointer to the group object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGroupSink.OnGroupUpdate( CIMTConGroup config // The group object )  
---  
Parameters
config
[in] A pointer to the updated group object.
Note
This method is called by the API to notify of updates in group settings.