# OnGroupDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSink ](imtcongroupsink.md "IMTConGroupSink")/ OnGroupDelete | [](imtcongroupsink_ongroupupdate.md "OnGroupUpdate") [](imtcongroupsink_ongroupsync.md "OnGroupSync") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSink::OnGroupDelete
A handler of the event of group removal.
C++
virtual void IMTConGroupSink::OnGroupDelete( const IMTConGroup* config // A pointer to the group object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConGroupSink.OnGroupDelete( CIMTConGroup config // The group object )  
---  
Parameters
config
[in] A pointer to the object of the deleted group.
Note
This method is called by the API to notify of a fact that a group has been deleted.